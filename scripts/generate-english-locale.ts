import { writeFile } from 'node:fs/promises';
import { HEVINY_PRODUCTS } from '../src/data/products.ts';
import { ARTICLES_DATA } from '../src/data/articles.ts';

const email = process.env.MYMEMORY_EMAIL || 'hevinycs@gmail.com';
const maxChunkLength = 430;
const protectedNames = [
  ...HEVINY_PRODUCTS.flatMap(product => [product.name, ...(product.variantsList ?? []).map(variant => variant.name)]),
  'Heviny',
  'Hana Cosmetics',
  ...ARTICLES_DATA.flatMap(article => article.recommendedProducts)
].filter(Boolean).sort((left, right) => right.length - left.length);

type ProductLocale = {
  categoryLabel: string;
  subtitle: string;
  description: string;
  heroIngredient: string;
  benefits: string[];
  variantsList: Array<{ notes?: string }>;
  availableSizes: string[];
  packagingSpecs: Array<{ packagingType: string; targetAudience: string }>;
  howToUse: string;
};

type ArticleLocale = {
  title: string;
  author: string;
  category: string;
  readTime: string;
  summary: string;
  tags: string[];
  keyTakeaways: string[];
  metaDescription: string;
  contentParagraphs?: string[];
};

const chunkText = (text: string): string[] => {
  const words = text.split(/(\s+)/);
  const chunks: string[] = [];
  let chunk = '';
  for (const word of words) {
    if (chunk.length + word.length > maxChunkLength && chunk) {
      chunks.push(chunk);
      chunk = '';
    }
    chunk += word;
  }
  if (chunk) chunks.push(chunk);
  return chunks;
};

const translateText = async (text: string, cache: Map<string, string>): Promise<string> => {
  if (!text.trim()) return text;
  const cached = cache.get(text);
  if (cached) return cached;

  const tokens: string[] = [];
  let protectedText = text;
  protectedNames.forEach((name, index) => {
    const token = `QZPRODUCTTOKEN${index}X`;
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    protectedText = protectedText.replace(new RegExp(escaped, 'g'), token);
    tokens[index] = name;
  });

  const translatedChunks: string[] = [];
  for (const chunk of chunkText(protectedText)) {
    const params = new URLSearchParams({
      q: chunk,
      langpair: 'id|en',
      de: email
    });
    const response = await fetch(`https://api.mymemory.translated.net/get?${params}`);
    if (!response.ok) throw new Error(`Translation service returned ${response.status}`);
    const result = await response.json() as {
      responseStatus: number;
      responseDetails?: string;
      responseData?: { translatedText?: string };
    };
    if (result.responseStatus !== 200 || !result.responseData?.translatedText) {
      throw new Error(result.responseDetails || 'Translation service returned no translated text');
    }
    translatedChunks.push(result.responseData.translatedText);
    await new Promise(resolve => setTimeout(resolve, 120));
  }

  let translated = translatedChunks.join('');
  tokens.forEach((name, index) => {
    translated = translated.replaceAll(`QZPRODUCTTOKEN${index}X`, name);
  });
  cache.set(text, translated);
  return translated;
};

const translateArray = async (values: string[], cache: Map<string, string>) =>
  Promise.all(values.map(value => translateText(value, cache)));

const main = async () => {
  const metadataOnly = process.argv.includes('--metadata-only');
  const productCharacters = HEVINY_PRODUCTS.reduce((total, product) => total + [
    product.categoryLabel, product.subtitle, product.description, product.heroIngredient,
    ...product.benefits, ...(product.variantsList ?? []).map(variant => variant.notes ?? ''),
    ...product.availableSizes, ...product.packagingSpecs.flatMap(spec => [spec.packagingType, spec.targetAudience]),
    product.howToUse
  ].join('').length, 0);
  const articleCharacters = ARTICLES_DATA.reduce((total, article) => total + [
    article.title, article.author, article.category, article.readTime, article.summary,
    ...(article.tags ?? []), ...(article.keyTakeaways ?? []), article.metaDescription ?? '',
    ...(metadataOnly ? [] : article.contentParagraphs)
  ].join('').length, 0);

  if (process.argv.includes('--count')) {
    console.log(JSON.stringify({ productCharacters, articleCharacters, totalCharacters: productCharacters + articleCharacters }));
    return;
  }

  const cache = new Map<string, string>();
  const productCopy: Record<string, ProductLocale> = {};
  for (const product of HEVINY_PRODUCTS) {
    productCopy[product.id] = {
      categoryLabel: await translateText(product.categoryLabel, cache),
      subtitle: await translateText(product.subtitle, cache),
      description: await translateText(product.description, cache),
      heroIngredient: await translateText(product.heroIngredient, cache),
      benefits: await translateArray(product.benefits, cache),
      variantsList: await Promise.all((product.variantsList ?? []).map(async variant => ({
        ...(variant.notes ? { notes: await translateText(variant.notes, cache) } : {})
      }))),
      availableSizes: await translateArray(product.availableSizes, cache),
      packagingSpecs: await Promise.all(product.packagingSpecs.map(async spec => ({
        packagingType: await translateText(spec.packagingType, cache),
        targetAudience: await translateText(spec.targetAudience, cache)
      }))),
      howToUse: await translateText(product.howToUse, cache)
    };
  }

  const articleCopy: Record<string, ArticleLocale> = {};
  for (const article of ARTICLES_DATA) {
    articleCopy[article.id] = {
      title: await translateText(article.title, cache),
      author: await translateText(article.author, cache),
      category: await translateText(article.category, cache),
      readTime: await translateText(article.readTime, cache),
      summary: await translateText(article.summary, cache),
      tags: await translateArray(article.tags ?? [], cache),
      keyTakeaways: await translateArray(article.keyTakeaways ?? [], cache),
      metaDescription: await translateText(article.metaDescription ?? '', cache),
      ...(metadataOnly ? {} : { contentParagraphs: await translateArray(article.contentParagraphs, cache) })
    };
    console.log(`Translated article ${articleCopy[article.id].title}`);
  }

  const output = `export const GENERATED_ENGLISH_PRODUCTS = ${JSON.stringify(productCopy, null, 2)} as const;\n\nexport const GENERATED_ENGLISH_ARTICLES = ${JSON.stringify(articleCopy, null, 2)} as const;\n`;
  await writeFile(new URL('../src/data/generatedEnglish.ts', import.meta.url), output, 'utf8');
  console.log(`Wrote ${cache.size} translated strings to src/data/generatedEnglish.ts`);
};

main().catch(error => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
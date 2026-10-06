import { ProductCategory } from '../types';

export interface PhotoVariant {
  file: string;
  size: string;
  image: string;
}

export interface PhotoProduct {
  id: string;
  brand: string;
  name: string;
  category: Exclude<ProductCategory, 'all'>;
  variants: PhotoVariant[];
}

export const getPhotoCategory = (name: string): PhotoProduct['category'] => {
  if (/varnish remover|pelarut cat kuku/i.test(name)) return 'nail';
  if (/air mawar|astringent|face tonic|milk cleanser|facial wash/i.test(name)) return 'face';
  if (/shampoo|shampo|conditioner|creambath|hair mask|hair tonic/i.test(name)) return 'hair';
  return 'body';
};

export const photoProducts: PhotoProduct[] = (() => {
  const products = new Map<string, PhotoProduct>();

  if (typeof __PRODUCT_PHOTO_FILES__ === 'undefined' || !Array.isArray(__PRODUCT_PHOTO_FILES__)) {
    return [];
  }

  __PRODUCT_PHOTO_FILES__.forEach((file) => {
    const stem = file.replace(/\.[^.]+$/, '').replace(/ - \d+(?:\s*\([^)]*\))?$/, '');
    const separatorIndex = stem.lastIndexOf(' - ');
    const familyName = separatorIndex === -1 ? stem : stem.slice(0, separatorIndex);
    const size = separatorIndex === -1 ? 'Kemasan' : stem.slice(separatorIndex + 3);
    const brand = familyName.match(/^(HEVINY|FEGO|HAVINA)\b/i)?.[0] ?? 'HEVINY';
    const id = familyName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    let product = products.get(id);

    if (!product) {
      product = {
        id,
        brand,
        name: familyName.replace(/^(HEVINY|FEGO|HAVINA)\s+/i, ''),
        category: getPhotoCategory(familyName),
        variants: [],
      };
      products.set(id, product);
    }

    product.variants.push({
      file,
      size,
      image: `/product-images/${encodeURIComponent(file)}`,
    });
  });

  return Array.from(products.values());
})();

export const isProductInCategory = (p: PhotoProduct, catId: ProductCategory) => {
  if (catId === 'all') return true;
  return p.category === catId;
};

export const getProductCategoryCount = (catId: ProductCategory): number => {
  if (catId === 'all') return photoProducts.length;
  return photoProducts.filter((p) => isProductInCategory(p, catId)).length;
};

import React from 'react';

interface BotanicalArticleVisualProps {
  category: string;
  readTime?: string;
  className?: string;
}

export const BotanicalArticleVisual: React.FC<BotanicalArticleVisualProps> = ({
  category,
  readTime,
  className = ''
}) => {
  const catNorm = (category || '').toLowerCase();

  // Category thematic pure color palette (Pure minimal color - No SVGs, no illustrations)
  let theme = {
    bg: 'from-brand-800 to-brand-600'
  };

  if (catNorm.includes('face') || catNorm.includes('skincare') || catNorm.includes('wajah')) {
    theme = {
      bg: 'from-[#422D35] to-[#593E48]'
    };
  } else if (catNorm.includes('body') || catNorm.includes('spa') || catNorm.includes('lulur') || catNorm.includes('tubuh')) {
    theme = {
      bg: 'from-brand-900 to-brand-700'
    };
  } else if (catNorm.includes('hair') || catNorm.includes('rambut')) {
    theme = {
      bg: 'from-brand-700 to-brand-500'
    };
  } else if (catNorm.includes('bahan') || catNorm.includes('alami') || catNorm.includes('herbal')) {
    theme = {
      bg: 'from-brand-800 to-brand-500'
    };
  } else if (catNorm.includes('bisnis') || catNorm.includes('salon')) {
    theme = {
      bg: 'from-brand-950 to-brand-800'
    };
  }

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-r ${theme.bg} select-none px-6 py-4.5 sm:px-7 sm:py-5 flex items-center justify-between ${className}`}
    >
      <span className="inline-flex items-center text-[10px] sm:text-[11px] uppercase font-bold tracking-[0.2em] text-white">
        {category}
      </span>

      {/* Reading Time */}
      {readTime && (
        <span className="text-[11px] font-sans text-white/80 tracking-wide">
          {readTime}
        </span>
      )}
    </div>
  );
};

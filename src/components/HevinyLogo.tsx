import React from 'react';

/**
 * Logo Heviny dipakai mentah sesuai file asli yang dibagikan.
 * File harus disimpan di folder /public sebagai:
 * - /logo.webp
 * - /favicon.webp
 */
export const OFFICIAL_LOGO_PATH = '/logo.webp';
export const OFFICIAL_LOGO_WHITE_PATH = '/logo.webp';

interface HevinyLogoProps {
  className?: string;
  imgClassName?: string;
  variant?: 'original' | 'white' | 'monochrome' | 'badge';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showTagline?: boolean;
}

export const HevinyLogo: React.FC<HevinyLogoProps> = ({
  className = '',
  imgClassName = '',
  variant = 'original',
  size = 'md',
  showTagline = false
}) => {
  const sizeClasses = {
    xs: 'h-7 sm:h-8',
    sm: 'h-10',
    md: 'h-14 sm:h-16',
    lg: 'h-20 sm:h-24',
    xl: 'h-28 sm:h-32',
    custom: ''
  };

  const logoSrc = variant === 'white' ? OFFICIAL_LOGO_WHITE_PATH : OFFICIAL_LOGO_PATH;

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Logo Heviny"
        className={`${sizeClasses[size]} ${imgClassName} w-auto max-w-full object-contain select-none`}
        loading="eager"
        draggable={false}
      />
    </div>
  );
};

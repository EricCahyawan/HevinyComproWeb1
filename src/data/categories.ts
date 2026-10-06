export interface OfficialSubCategory {
  id: string;
  name: string;
  productId: string;
}

export interface OfficialCategory {
  id: 'body' | 'hair' | 'face' | 'nail';
  name: string;
  label: string;
  items: OfficialSubCategory[];
}

export const OFFICIAL_HEVINY_CATEGORIES: OfficialCategory[] = [
  {
    id: 'body',
    name: 'Perawatan Tubuh',
    label: 'Perawatan Tubuh (Body Care)',
    items: [
      { id: 'massage-cream', name: 'Massage Cream', productId: 'heviny-massage-cream' },
      { id: 'massage-oil', name: 'Massage Oil', productId: 'heviny-massage-oil' },
      { id: 'bath-foam', name: 'Bath Foam', productId: 'heviny-bath-foam' },
      { id: 'body-scrub', name: 'Body Scrub', productId: 'heviny-body-scrub' },
      { id: 'body-lotion', name: 'Body Lotion', productId: 'heviny-body-lotion' },
      { id: 'hand-wash', name: 'Hand Wash', productId: 'heviny-hand-wash' },
      { id: 'shower-cream', name: 'Shower Cream', productId: 'heviny-shower-cream' },
      { id: 'shower-gel', name: 'Shower Gel', productId: 'heviny-shower-gel' },
      { id: 'hair-and-body-wash-tubuh', name: 'Hair and Body Wash', productId: 'heviny-hair-and-body-wash' },
      { id: 'body-mask', name: 'Body Mask', productId: 'heviny-body-mask' },
      { id: 'milk-bath', name: 'Milk Bath', productId: 'heviny-milk-bath' },
      { id: 'bath-salt', name: 'Bath Salt', productId: 'heviny-bath-salt' },
      { id: 'foot-cream', name: 'Foot Cream', productId: 'heviny-foot-cream' }
    ]
  },
  {
    id: 'hair',
    name: 'Perawatan Rambut',
    label: 'Perawatan Rambut (Hair Care)',
    items: [
      { id: 'shampoo', name: 'Shampoo', productId: 'heviny-shampoo' },
      { id: 'hair-tonic', name: 'Hair Tonic', productId: 'heviny-hair-tonic' },
      { id: 'hair-mask', name: 'Hair Mask', productId: 'heviny-hair-mask' },
      { id: 'creambath', name: 'Creambath', productId: 'heviny-creambath' },
      { id: 'creambath-spa', name: 'Creambath Spa', productId: 'heviny-creambath-spa' },
      { id: 'conditioner', name: 'Conditioner', productId: 'heviny-conditioner' },
      { id: 'hair-and-body-wash-rambut', name: 'Hair and Body Wash', productId: 'heviny-hair-and-body-wash' }
    ]
  },
  {
    id: 'face',
    name: 'Perawatan Wajah',
    label: 'Perawatan Wajah (Face Care)',
    items: [
      { id: 'face-tonic', name: 'Face Tonic', productId: 'heviny-face-tonic' },
      { id: 'milk-cleanser', name: 'Milk Cleanser', productId: 'heviny-milk-cleanser' },
      { id: 'astringent', name: 'Astringent', productId: 'heviny-astringent' },
      { id: 'air-mawar', name: 'Air Mawar', productId: 'heviny-air-mawar' }
    ]
  },
  {
    id: 'nail',
    name: 'Perawatan Kuku',
    label: 'Perawatan Kuku (Nail Care)',
    items: [
      { id: 'varnish-remover', name: 'Varnish Remover', productId: 'heviny-varnish-remover' }
    ]
  }
];

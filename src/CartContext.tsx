import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { ProductCategory } from './types';

export interface CartItem {
  id: string; // unique ID: `${productId}__${size || 'default'}`
  productId: string;
  name: string;
  brand: string;
  size: string;
  category?: ProductCategory | string;
  image?: string;
  quantity: number;
}

export interface AddItemInput {
  productId: string;
  name: string;
  brand: string;
  size?: string;
  category?: ProductCategory | string;
  image?: string;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: AddItemInput, delta?: number) => void;
  decreaseItem: (productId: string, size?: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  getItemQuantity: (productId: string, size?: string) => number;
  clearCart: () => void;
  totalCount: number;
  formattedProductsText: string;
  formattedQuantityText: string;
}

export const EMPTY_CART_PRODUCTS_TEXT = 'Pilih produk dari halaman produk pada website heviny.com';

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'heviny_selected_products_v1';

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // ignore parsing error
    }
    return [];
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore storage error
    }
  }, [items]);

  const makeId = (productId: string, size?: string) => {
    const cleanSize = (size || 'default').trim().toLowerCase();
    return `${productId}__${cleanSize}`;
  };

  const addItem = (product: AddItemInput, delta: number = 1) => {
    const size = product.size || '';
    const id = makeId(product.productId, size);

    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === id);
      if (existingIndex > -1) {
        const next = [...prev];
        const nextQty = next[existingIndex].quantity + delta;
        if (nextQty <= 0) {
          next.splice(existingIndex, 1);
        } else {
          next[existingIndex] = {
            ...next[existingIndex],
            quantity: nextQty
          };
        }
        return next;
      }

      if (delta <= 0) return prev;

      return [
        ...prev,
        {
          id,
          productId: product.productId,
          name: product.name,
          brand: product.brand,
          size,
          category: product.category,
          image: product.image,
          quantity: delta
        }
      ];
    });
  };

  const decreaseItem = (productId: string, size?: string) => {
    const id = makeId(productId, size);
    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === id);
      if (existingIndex === -1) return prev;

      const next = [...prev];
      const newQty = next[existingIndex].quantity - 1;
      if (newQty <= 0) {
        next.splice(existingIndex, 1);
      } else {
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: newQty
        };
      }
      return next;
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prev) => {
      if (quantity <= 0) {
        return prev.filter((i) => i.id !== id);
      }
      return prev.map((i) => (i.id === id ? { ...i, quantity } : i));
    });
  };

  const getItemQuantity = (productId: string, size?: string) => {
    const id = makeId(productId, size);
    const item = items.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  const formattedProductsText = useMemo(() => {
    if (items.length === 0) {
      return EMPTY_CART_PRODUCTS_TEXT;
    }

    return items
      .map((item, idx) => {
        const sizeStr = item.size ? ` (${item.size})` : '';
        const brandStr =
          item.brand && !item.name.toLowerCase().includes(item.brand.toLowerCase())
            ? `${item.brand} `
            : '';
        return `${idx + 1}. ${brandStr}${item.name}${sizeStr} : ${item.quantity} pcs`;
      })
      .join('\n');
  }, [items]);

  const formattedQuantityText = useMemo(() => {
    if (totalCount === 0) return '';
    return `${totalCount} pcs`;
  }, [totalCount]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        decreaseItem,
        removeItem,
        updateQuantity,
        getItemQuantity,
        clearCart,
        totalCount,
        formattedProductsText,
        formattedQuantityText
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

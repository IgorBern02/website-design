import { createContext, useContext, useState, type ReactNode } from "react";

export type PurchaseItem = {
  id: string;
  title: string;
  price: number;
  image: string;
};

type PurchaseContextType = {
  purchases: PurchaseItem[];
  togglePurchase: (item: PurchaseItem) => void;
  isPurchase: (id: string) => boolean;
  removePurchase: (id: string) => void;
};

const PurchaseContext = createContext({} as PurchaseContextType);

export const PurchaseProvider = ({ children }: { children: ReactNode }) => {
  const [purchases, setPurchases] = useState<PurchaseItem[]>([]);

  const togglePurchase = (item: PurchaseItem) => {
    setPurchases((prev) => {
      const exists = prev.find((fav) => fav.id === item.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const isPurchase = (id: string) => {
    return purchases.some((fav) => fav.id === id);
  };

  const removePurchase = (id: string) => {
    setPurchases((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <PurchaseContext.Provider
      value={{ purchases, togglePurchase, isPurchase, removePurchase }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};

export const usePurchase = () => useContext(PurchaseContext);

import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "../types/products";
import { API } from "../services/api";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  isInCart: (id: string) => boolean;
  reloadCart: () => Promise<void>;
};

const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const loadCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setCart([]);
        return;
      }

      const res = await fetch(`${API}/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const { cart } = await res.json();

      const mapped: CartItem[] = cart.map((item: any) => ({
        product: {
          id: item.product._id,
          name: item.product.name,
          imageUrl: item.product.imageUrl,
          price: item.product.price,
        },
        quantity: item.quantity,
      }));

      setCart(mapped);
    } catch (error) {
      console.error("Erro ao carregar carrinho:", error);
      setCart([]);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const isInCart = (id: string) => cart.some((c) => c.product.id === id);

  const addToCart = async (product: Product) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    await fetch(`${API}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId: product.id, quantity: 1 }),
    });

    await loadCart();
  };

  const removeFromCart = async (productId: string) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    await fetch(`${API}/cart/${productId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    await loadCart();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        isInCart,
        reloadCart: loadCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

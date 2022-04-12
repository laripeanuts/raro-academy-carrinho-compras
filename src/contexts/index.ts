import axios from "axios";
import create from "zustand";

import { CartProductType } from "../types/CartProductType";

//ESTADO DOS PRODUTOS RECEBIDOS
type Products = {
  products: CartProductType[];
  setProducts: () => void;
};

export const useProducts = create<Products>((set) => ({
  products: [],
  setProducts: async () => {
    const response = await axios.get("http://localhost:3001/products");
    set(() => ({ products: response.data }));
  },
}));

//ESTADO DOS PRODUTOS NO CARRINHO
type CartProducts = {
  cartProducts: CartProductType[];
  setCartProducts: (product: CartProductType) => void;
  handleAddCart: (productAtual: CartProductType) => void;
  handleDeleteCart: (productAtual: CartProductType) => void;
  emptyCard: () => void;
};

export const useCartProducts = create<CartProducts>((set) => ({
  cartProducts: [],

  setCartProducts: (product: CartProductType) => {
    set(({ cartProducts }) => {
      console.log(cartProducts);
      return {
        cartProducts: [...cartProducts, product],
      };
    });
  },

  handleAddCart: (productAtual: CartProductType) => {
    set(({ cartProducts }) => {
      //Checando se o produto está no carrinho
      const isProductInCart = cartProducts.find(
        (product) => product.id === productAtual.id,
      );

      if (isProductInCart) {
        //Se estiver, soma a quantidade
        return {
          cartProducts: cartProducts.map((product) =>
            product.id === productAtual.id
              ? { ...product, amount: product.amount + 1 }
              : product,
          ),
        };
      }
      //Se não estiver, adiciona o item
      return {
        cartProducts: [...cartProducts, { ...productAtual, amount: 1 }],
      };
    });
  },

  handleDeleteCart: (productAtual: CartProductType) => {
    set(({ cartProducts }: any) => { 
      const resultante = cartProducts.map((product: CartProductType) => {
        if (product.id === productAtual.id) {
          return { ...product, amount: product.amount - 1 }
        } else {
          return { ...product }
        }
      }).filter((product: CartProductType) => product.amount > 0);
      return {
        cartProducts: resultante
      };
    });
  },

  emptyCard: () => {
    set(({ cartProducts }) => {
      console.log(cartProducts);
      return {
        cartProducts: [],
      };
    });
  },
}));
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
};

export const useCartProducts = create<CartProducts>((set) => ({
	cartProducts: [],
	setCartProducts: (product: CartProductType) => {
		set(({ cartProducts }) => {













			
			console.log(cartProducts);
			return ({
				cartProducts: [...cartProducts, product],
			})
		});
	}
}));

	// const handleAddCart = (productAtual: CartProductType) => {
	// 	setCartProducts((prev) => {
	// 		//Checando se o produto está no carrinho
	// 		const isProductInCart = prev.find(
	// 			(product) => product.id === productAtual.id,
	// 		);

	// 		if (isProductInCart) {
	// 			//Se estiver, soma a quantidade
	// 			return prev.map((product) =>
	// 				product.id === productAtual.id
	// 					? { ...product, amount: product.amount + 1 }
	// 					: product,
	// 			);
	// 		}
	// 		//Se não estiver, adiciona o item
	// 		return [...prev, { ...productAtual, amount: 1 }];
	// 	});
	// };

	// const handleDeleteCart = (id: number) => {
	// 	setCartProducts((prev) =>
	// 		prev.reduce((acc, product) => {
	// 			//Checar se estamos no item que estamos interagindo
	// 			if (product.id === id) {
	// 				//Se a quantidade for igual a igual a 1, remove o item
	// 				if (product.amount === 1) return acc;
	// 				//Se for maior que 1, diminui a quantidade
	// 				return [...acc, { ...product, amount: product.amount - 1 }];
	// 				//Se não, retorna o item
	// 			} else {
	// 				return [...acc, product];
	// 			}
	// 		}, [] as CartProductType[]),
	// 	);
	// };
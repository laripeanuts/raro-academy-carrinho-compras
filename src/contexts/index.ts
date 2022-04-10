import axios from "axios";
import create from "zustand";







// type Products = {
//   products: ProductProps[],
//   setProducts: () => void
// };

// export const useProducts = create<Products>(set => ({
//   products: [],
//   setProducts: async () => {
//     const response = await axios.get("http://localhost:3001/products")
//     set(() => ({ products: response.data }))
// 	}
// }));

// type Cart = {
// 	cart: CartProps[];
// 	setCart: ({
// 		id,
// 		name,
// 		price,
// 		picture,
// 		quantity,
// 		quantityCart,
// 		priceItem,
// 	}: CartProps) => void;
// };

// export const useCart = create<Cart>((set) => ({
// 	cart: [],
// 	setCart: ({id, name, price, picture, quantity, quantityCart, priceItem}: CartProps) => {
// 		set(({ cart }) => {
// 			let validate = true;
// 			cart.forEach((products) => {
// 				if (products.id === id) validate = false;
// 			});
// 			if (validate) {
// 				return {
// 					cart: [...cart, { cart }],
// 				};
// 			}
// 			return { cart };
// 		});
// 	},
// }));

// type QuantityCart = {
// 	quantityCart: number;
// 	setQuantityCartPlus: (id: number) => void;
// 	setQuantityCartMinus: () => void;
// };

// export const useQuantityCart = create<QuantityCart>((set) => ({
// 	quantityCart: 0,
// 	setQuantityCartPlus: (id) => {
// 		set(({ quantityCart }) => ({
// 			quantityCart: quantityCart + 1,
// 		}));
// 	},
// 	setQuantityCartMinus: () => {
// 		set(({ quantityCart }) => ({
// 			quantityCart: quantityCart - 1,
// 		}));
// 	}
// }));

// type ProductCount = {
// 	productCount: number[];
// 	setProductCount: (id: number) => void;
// };

// export const useProductCount = create<ProductCount>((set) => ({
// 	productCount: [],
// 	setProductCount: (id) => {
// 		set(({ productCount }) => ({
// 			productCount: [...productCount, id],
// 		}));
// 	},
// }));
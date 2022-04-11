//IMPORTE DE UTILIDADES
import { useEffect, useState } from "react";
//IMPORTE DE ESTILOS
import { Container } from "../components/Container";
//IMPORTE DE COMPONENTES
import { Cart } from "../components/Cart";
import { Products } from "../components/Products";
import Header from "../components/Header";
import LinearProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
//IMPORTE DE TIPOS
import { CartProductType } from "../types/CartProductType";
import { useCartProducts, useProducts } from "../contexts";
import Product from "../components/Product";

const Home = () => {
	//ESTADOS GLOBAIS
	const { products, setProducts } = useProducts();
	// const { cartProducts, setCartProducts } = useCartProducts();
	//ESTADOS LOCAIS
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [cartProducts, setCartProducts] = useState([] as CartProductType[]);

	//SOMA DA QUANTIDADE DE PRODUTOS
	const getTotalProducts = (product: CartProductType[]) => {
		return product.reduce((prev: number, product) => prev + product.amount, 0);
	};

	const handleAddCart = (productAtual: CartProductType) => {
		setCartProducts(( prev ) => {
			//Checando se o produto está no carrinho
			const isProductInCart = prev.find(
				(product) => product.id === productAtual.id,
			);

			if (isProductInCart) {
				//Se estiver, soma a quantidade
				return prev.map((product) =>
					product.id === productAtual.id
						? { ...product, amount: product.amount + 1 }
						: product,
				);
			}
			//Se não estiver, adiciona o item
			return [...prev, { ...productAtual, amount: 1 }];
		});
	};

	const handleDeleteCart = (id: number) => {
		setCartProducts((prev) =>
			prev.reduce((acc, product) => {
				//Checar se estamos no item que estamos interagindo
				if (product.id === id) {
					//Se a quantidade for igual aigual a 1, remove o item
					if (product.amount === 1) return acc;
					//Se for maior que 1, diminui a quantidade
					return [...acc, { ...product, amount: product.amount - 1 }];
					//Se não, retorna o item
				} else {
					return [...acc, product];
				}
			}, [] as CartProductType[]),
		);
	};

	useEffect(() => {
		setProducts();
		setIsLoading(false);
	}, []);

	return (
		<>
			<Header setIsOpen={setIsOpen} />
			<Container>
				{isLoading ? (
					<div className="loading">
						<Box sx={{ display: "flex", justifyContent: "center" }}>
							<LinearProgress disableShrink color="secondary" />
						</Box>
					</div>
				) : (
					<div>
						<Products
							cartProducts={cartProducts}
							addToCart={handleAddCart}
							removeFromCart={handleDeleteCart}
						/>
					</div>
				)}
				<Cart
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					cartProducts={cartProducts}
					addToCart={handleAddCart}
					removeFromCart={handleDeleteCart}
				/>
			</Container>
		</>
	);
};

export default Home;

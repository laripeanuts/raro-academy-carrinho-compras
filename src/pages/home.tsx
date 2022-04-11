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

// import { useCartProducts } from "../contexts";
import Product from "../components/Product";

const Home = () => {
	//ESTADOS LOCAIS
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	//ESTADOS GLOBAIS
	const { products, setProducts } = useProducts();
	const { cartProducts, setCartProducts } = useCartProducts();

	// const [cartProducts, setCartProducts] = useState([] as CartProductType[]);

	//SOMA DA QUANTIDADE DE PRODUTOS
	const getTotalProducts = (product: CartProductType[]) => {
		return product.reduce((prev: number, product) => prev + product.amount, 0);
	};

	const handleAddCart = (productAtual: CartProductType) => {
		setCartProducts(productAtual);
	};

	const handleDeleteCart = (id: number) => null;

	// const handleDeleteCart = (productAtual: CartProductType) => {
	// 	setCartProducts(productAtual);
	// };

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

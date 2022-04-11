//IMPORTE DE UTILIDADES
import { useEffect, useState } from "react";
import axios from "axios";
//IMPORTE DE ESTILOS
import { Container } from "../components/Container";
//IMPORTE DE COMPONENTES
import Cart from "../components/Cart";
import Header from "../components/Header";
import LinearProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import { Box, CircularProgress } from "@mui/material";
//IMPORTE DE TIPOS
import { CartItemType } from "../types/CartItemType";
import { useProducts } from "../contexts";
import Product from "../components/Product";

const Home = () => {
	//ESTADOS GLOBAIS
	const { products, setProducts } = useProducts();
	//ESTADOS LOCAIS
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [cartItems, setCartItems] = useState([] as CartItemType[]);
	// const [products, setProducts] = useState([] as CartItemType[]);

	const getTotalProducts = () => null;
	const handleAddCart = () => null;
	const handleDeleteCart = () => null;

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
						{products.map((item: CartItemType) => {
							return <Product key={item.id} {...item} />;
						})}
					</div>
				)}
				<Cart isOpen={isOpen} setIsOpen={setIsOpen} />
			</Container>
		</>
	);
};

export default Home;

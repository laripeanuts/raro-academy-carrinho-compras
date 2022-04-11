//IMPORTE DE UTILIDADES
import { useEffect, useState } from "react";
//IMPORTE DE ESTILOS
import { Container } from "../components/Container";
//IMPORTE DE COMPONENTES
import { Cart } from "../components/Cart";
import Header from "../components/Header";
import LinearProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
//IMPORTE DE TIPOS
import { CartProductType } from "../types/CartProductType";
import { useProducts } from "../contexts";
import Product from "../components/Product";

const Home = () => {
	//ESTADOS GLOBAIS
	const { products, setProducts } = useProducts();
	//ESTADOS LOCAIS
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [cartProducts, setCartProducts] = useState([] as CartProductType[]);
	//FUNÇÕES GLOBAIS
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
						{products.map((product: CartProductType) => {
							return (
								<Product key={product.id}
									product={product}
									addToCart={handleAddCart}
									removeFromCart={handleDeleteCart}
								/>
						)})}
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

//IMPORTE DE UTILIDADES
import { useEffect, useState } from "react";
import axios from "axios";
//IMPORTE DE ESTILOS
import { Container } from "../components/Container";
//IMPORTE DE COMPONENTES
import Cart from "../components/Cart";
import Header from "../components/Header";
import Product, { ProductProps } from "../components/Product";
//IMPORTE DE TIPOS
import { CartItemType } from "../types/CartItemType";
import { useProducts } from "../contexts";


const data: ProductProps = {
  id: 1,
  name: "Product 1",
  picture:
    "https://somos.lojaiplace.com.br/wp-content/uploads/2021/04/apple_iphone-12-spring21_purple_04202021.jpg",
  price: 20.50,
};

const url = "http://localhost:3001/products";
// const setProducts = async (): Promise<CartItemType[]> => {
//   const response = await (
//     await axios.get(url)
//   ).data

//   return response;
// };


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
					<div>Carregando...</div>
				) : (
					<div>
						Produtos carregados
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

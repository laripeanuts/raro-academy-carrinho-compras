//IMPORTE DE UTILIDADES
import { useEffect, useState } from "react";
//IMPORTE DE ESTILOS
import { Container } from "../components/Container";
//IMPORTE DE COMPONENTES
import LinearProgress from "@mui/material/CircularProgress";
import Header from "../components/Header";
import { Box } from "@mui/material";
import { Cart } from "../components/Cart";
import { Product } from "../components/Product";
//IMPORTE DE TIPOS
import { CartProductType } from "../types/CartProductType";
import { useProducts } from "../contexts";
import { useCartProducts } from "../contexts";

const Home = () => {
  //ESTADOS LOCAIS
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //ESTADOS GLOBAIS
  const { products, setProducts } = useProducts();
  const { cartProducts, setCartProducts } =
    useCartProducts();

  //SOMA DA QUANTIDADE DE PRODUTOS
  const getTotalProducts = (product: CartProductType[]) => {
    return product.reduce((prev: number, product) => prev + product.amount, 0);
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
            {products?.map((product) => (
							<Product
								key={product.id}
								product={product}
								cartProducts={cartProducts} />
            ))}
          </div>
        )}
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;

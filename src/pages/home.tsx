//IMPORTE DE UTILIDADES
import { useEffect, useState } from "react";
//IMPORTE DE ESTILOS
import { Container, ContainerProducts } from "../components/Container";
//IMPORTE DE COMPONENTES
import LinearProgress from "@mui/material/CircularProgress";
import Header from "../components/Header";
import { Box } from "@mui/material";
import { Cart } from "../components/Cart";
import { Product } from "../components/Product";
//IMPORTE DE TIPOS
import { useProducts } from "../contexts";

const Home = () => {
  //ESTADOS LOCAIS
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //ESTADOS GLOBAIS
  const { products, setProducts } = useProducts();

  useEffect(() => {
    setProducts();
    setIsLoading(false);
  }, []);

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        <ContainerProducts>
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
                />
              ))}
            </div>
          )}
        </ContainerProducts>
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;

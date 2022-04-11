import Button from "@mui/material/Button";
import ShoppingCartCheckout from "@mui/icons-material/ShoppingCartCheckout";
import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";
import { CartProductType } from "../../types/CartProductType";
import { formatPriceReal } from "../../helpers/formatPriceReal";
import { useCartProducts } from "../../contexts";

export type ProductProps = {
	product: CartProductType;
	cartProducts: CartProductType[];
};

export const Product = ({
	product,
}: ProductProps) => {
	const { cartProducts, handleAddCart, handleDeleteCart } = useCartProducts();
	const cartAmount = cartProducts[product.id]?.amount;
	return (
    <Wrapper>
      <img src={product.picture} alt={`Imagem de referência ${product.name}`} />

      <Info>
        <Column>
          <Text>{product.name}</Text>
          <Text>{formatPriceReal(product.price)}</Text>
        </Column>

        <WrapperIncrementor>
          {cartAmount > 0 ? (
            <Incrementor
              onClickPlus={() => handleAddCart(product)}
              onClickMinus={() => handleDeleteCart(product)}
              amount={cartAmount}
            />
          ) : (
            <Button
              disableElevation
              onClick={() => handleAddCart(product)}
              variant="contained"
              color="secondary"
              endIcon={<ShoppingCartCheckout />}
            >
              COMPRAR
            </Button>
          )}
          ;
        </WrapperIncrementor>
      </Info>
    </Wrapper>
  );
};
import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";
import { CartProductType } from "../../types/CartProductType";
import { formatPriceReal } from "../../helpers/formatPriceReal";
import { useCartProducts } from "../../contexts";
import { useEffect } from "react";

export type ProductProps = {
	product: CartProductType;
};

export const Product = ({
	product,
}: ProductProps) => {
	const { cartProducts, handleAddCart, handleDeleteCart } = useCartProducts();
  
  const getAmountProduct = (cartProducts: CartProductType[]) => {
    let amount = 0;
    cartProducts.forEach((item) => {
      if (item.id === product.id) {
        amount = item.amount;
      }
    });
    return amount;
  };
  
  const amountProduct = getAmountProduct(cartProducts)
  
  const alertPop = (message: string) => alert(message)
  
  useEffect(() => {}, [cartProducts]);
  
  return (
    <Wrapper>
      <img src={product.picture} alt={`Imagem de referência ${product.name}`} />

      <Info>
        <Column>
          <Text>{product.name}</Text>
          <Text>{formatPriceReal(product.price)}</Text>
        </Column>

        <WrapperIncrementor>
          <Incrementor
            onClickPlus={
              amountProduct <= product.quantity
                ? () => handleAddCart(product)
                : () => alertPop("Infelizmente atingiu o limite de estoque")
            }
            onClickMinus={() => handleDeleteCart(product)}
            amount={amountProduct}
          />
          {/* {cartAmount > 0 ? (
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
          )} */}
        </WrapperIncrementor>
      </Info>
    </Wrapper>
  );
};
import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";
import { CartProductType } from "../../types/CartProductType";
import { formatPriceReal } from "../../helpers/formatPriceReal";
import { useCartProducts } from "../../contexts";

type CartProductProps = {
	product: CartProductType;
};

export const CartProduct = ({
	product
}: CartProductProps) => {
	const { handleAddCart, handleDeleteCart } = useCartProducts();
	
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
            amount={product.amount}
            onClickPlus={() => handleAddCart(product)}
            onClickMinus={() => handleDeleteCart(product)}
          />
        </WrapperIncrementor>
      </Info>
    </Wrapper>
  );
};
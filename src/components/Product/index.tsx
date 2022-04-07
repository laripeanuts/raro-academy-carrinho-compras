import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  picture: string;
};

const Product = ({ id, name, price, picture }: ProductProps) => (
  <Wrapper>
    <img src={picture} alt={`Imagem de referência ${name}`} />

    <Info>
      <Column>
        <Text>{name}</Text>
        <Text>{price}</Text>
      </Column>

      <WrapperIncrementor>
        <Incrementor id={id} quantity={1} />
      </WrapperIncrementor>
    </Info>
  </Wrapper>
);

export default Product;

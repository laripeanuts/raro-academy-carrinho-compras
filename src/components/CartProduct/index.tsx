import Button from "@mui/material/Button";
import ShoppingCartCheckout from "@mui/icons-material/ShoppingCartCheckout";
import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";
import { CartProductType } from "../../types/CartProductType";

type CartProductProps = {
	product: CartProductType;
	addToCart: (product: CartProductType) => void;
	removeFromCart: (id: number) => void;
};

export const CartProduct = ({
	product,
	addToCart,
	removeFromCart,
}: CartProductProps) => (
	<Wrapper>
		<img src={product.picture} alt={`Imagem de referência ${product.name}`} />

		<Info>
			<Column>
				<Text>{product.name}</Text>
				<Text>{product.price}</Text>
			</Column>

			<WrapperIncrementor>
				<Incrementor
					onClickPlus={() => addToCart(product)}
					onClickMinus={() => removeFromCart(product.id)}
					amount={product.amount}
				/>
			</WrapperIncrementor>
		</Info>
	</Wrapper>
);

import Button from "@mui/material/Button";
import ShoppingCartCheckout from "@mui/icons-material/ShoppingCartCheckout";
import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";
import { CartItemType } from "../../types/cart";

type CartItemProps = {
	product: CartItemType;
	addToCart: (product: CartItemType) => void;
	removeFromCart: (id: number) => void;
};

export const CartItem = ({
	product,
	addToCart,
	removeFromCart,
}: CartItemProps) => (
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
					quantity={product.amount}
				/>
				<Button
					disableElevation
					onClick={() => addToCart(product)}
					variant="contained"
					color="secondary"
					endIcon={<ShoppingCartCheckout />}
				>
					COMPRAR
				</Button>
			</WrapperIncrementor>
		</Info>
	</Wrapper>
);

export default Product;

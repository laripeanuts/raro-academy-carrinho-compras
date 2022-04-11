import Button from "@mui/material/Button";
import ShoppingCartCheckout from "@mui/icons-material/ShoppingCartCheckout";
import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";
import { CartProductType } from "../../types/CartProductType";
import { formatPriceReal } from "../../helpers/formatPriceReal";

export type ProductProps = {
	product: CartProductType;
	addToCart: (product: CartProductType) => void;
	removeFromCart: (id: number) => void;
};

export const Product = ({
	product,
	addToCart,
	removeFromCart,
}: ProductProps) => {
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
						onClickPlus={() => addToCart(product)}
						onClickMinus={() => removeFromCart(product.id)}
						amount={product.amount}
					/>
					<Button
						disableElevation
						onClick={() => {}}
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
};
export default Product;

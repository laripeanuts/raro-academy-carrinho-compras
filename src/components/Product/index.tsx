import Button from "@mui/material/Button";
import ShoppingCartCheckout from "@mui/icons-material/ShoppingCartCheckout";
import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";
import { CartProductType } from "../../types/CartProductType";
import { formatPriceReal } from "../../helpers/formatPriceReal";

export type ProductProps = {
	product: CartProductType;
	cartProducts: CartProductType[];
	addToCart: (product: CartProductType) => void;
	removeFromCart: (product: CartProductType) => void;
};

export const Product = ({
	product,
	cartProducts,
	addToCart,
	removeFromCart,
}: ProductProps) => {
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
							onClickPlus={() => addToCart(product)}
							onClickMinus={() => removeFromCart(product)}
							amount={cartAmount}
						/>
					) : (
						<Button
							disableElevation
							onClick={() => addToCart(product)}
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
export default Product;

import { Dispatch, SetStateAction } from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline";
import Button from "../Button";
import Typography from "../Typography";
import { Wrapper, Subtotal, Header, CartContainer, CartHeader } from "./styles";
import { CartProductType } from "../../types/CartProductType";
import { CartProduct } from "../CartProduct";
import { formatPriceReal } from "../../helpers/formatPriceReal";
import { useCartProducts } from "../../contexts";

export type CartProps = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

/**
 * Adicionar itens ao carrinho, design ao seu critério mas deve conter:
 * - Nome do produto
 * - Imagem
 * - Preço
 * - Incrementador
 */

export const Cart = ({ isOpen, setIsOpen }: CartProps) => {
	const { cartProducts } = useCartProducts();
	
  const calculateProducts = (items: CartProductType[]) => {
    return items.reduce(
      (acc: number, item) => acc + item.amount * item.price,
      0,
    );
  };

  return (
		<Wrapper className="modal" isOpen={isOpen}>
			<Header>
				<CartHeader>
					<Typography level={5} size="large" fontWeight={600}>
						Produtos no carrinho
					</Typography>
					<CloseOutline onClick={() => setIsOpen(false)} />
				</CartHeader>
			</Header>
			<CartContainer>
				{cartProducts.length === 0 ? <h2>Carrinho Vazio...</h2> : null}
				{cartProducts?.map((product) => (
					<CartProduct
						key={product.id}
						product={product}
					/>
				))}
			</CartContainer>
			<Subtotal>
				<Typography level={5} size="large" fontWeight={600}>
					Total
				</Typography>
				<Typography>
					{formatPriceReal(calculateProducts(cartProducts))}
				</Typography>
			</Subtotal>

			<Button fullWidth>Finalizar compra</Button>
		</Wrapper>
	);
};
import { Dispatch, SetStateAction } from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline";
import Button from "../Button";
import Typography from "../Typography";
import { Wrapper, Subtotal, Header } from "./styles";
import { CartProductType } from "../../types/CartProductType";
import { CartProduct } from "../CartProduct";

export type CartProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  cartProducts: CartProductType[];
  addToCart: (product: CartProductType) => void;
  removeFromCart: (id: number) => void;
};

/**
 * Adicionar itens ao carrinho, design ao seu critério mas deve conter:
 * - Nome do produto
 * - Imagem
 * - Preço
 * - Incrementador
 */

export const Cart = ({ isOpen, setIsOpen, cartProducts, addToCart, removeFromCart }: CartProps) => {
  const calculateProducts = (items: CartProductType[]) => {
    return items.reduce(
      (acc: number, item) => acc + item.amount * item.price,
      0,
    );
  };

  return (
		<Wrapper className="modal" isOpen={isOpen}>
			<Header>
				<Typography level={5} size="large" fontWeight={600}>
					Produtos no carrinho
				</Typography>
				<CloseOutline onClick={() => setIsOpen(false)} />
			</Header>
			<div className="cart-products">
				{cartProducts.length === 0 ? <p>No items</p> : null}
				{cartProducts?.map((product) => (
					<CartProduct
						key={product.id}
						product={product}
						addToCart={addToCart}
						removeFromCart={removeFromCart}
					/>
				))}
			</div>
			<Subtotal>
				<Typography level={5} size="large" fontWeight={600}>
					Total
				</Typography>
				<Typography>Total: {calculateProducts(cartProducts)}</Typography>
			</Subtotal>

			<Button fullWidth>Finalizar compra</Button>
		</Wrapper>
	);
};
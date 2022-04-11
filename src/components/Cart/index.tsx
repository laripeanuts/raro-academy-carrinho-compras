import { Dispatch, SetStateAction } from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline";

import Button from "../Button";
import Typography from "../Typography";

import { Wrapper, Subtotal, Header } from "./styles";

export type MenuPaymentProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

type PropsCart = {
	cartItems: CartItemType[];
	addToCart: (item: CartItemType) => void;
	removeFromCart: (id: number) => void;
};
/**
 * Adicionar itens ao carrinho, design ao seu critério mas deve conter:
 * - Nome do produto
 * - Imagem
 * - Preço
 * - Incrementador
 */

const MenuPayment = ({ isOpen, setIsOpen }: MenuPaymentProps) => (
  <Wrapper className="modal" isOpen={isOpen}>
    <Header>
      <Typography level={5} size="large" fontWeight={600}>
        Produtos no carrinho
      </Typography>
      <CloseOutline onClick={() => setIsOpen(false)} />
    </Header>

    <Subtotal>
      <Typography level={5} size="large" fontWeight={600}>
        Total
      </Typography>
      <Typography>1,600.50</Typography>
    </Subtotal>

    <Button fullWidth>Finalizar compra</Button>
  </Wrapper>
);

export default MenuPayment;

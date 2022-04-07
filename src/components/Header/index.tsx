import { Dispatch, SetStateAction } from "react";
import { ShoppingBagOutline as ShoppingIcon } from "styled-icons/evaicons-outline";

import { Wrapper } from "./styles";

type HeaderProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setIsOpen }: HeaderProps) => (
  <Wrapper>
    <ShoppingIcon onClick={() => setIsOpen(true)} aria-label="Shopping Icon" />
  </Wrapper>
);

export default Header;

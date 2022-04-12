import { Dispatch, SetStateAction } from "react";
import { ShoppingBagOutline as ShoppingIcon } from "styled-icons/evaicons-outline";
import { useCartProducts } from "../../contexts";
import { CartProductType } from "../../types/CartProductType";
import { Wrapper, IconWrapper } from "./styles";
import { styled } from "@mui/material/styles";
import Badge, { BadgeProps } from "@mui/material/Badge";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 10,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

type HeaderProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setIsOpen }: HeaderProps) => {
  const { cartProducts } = useCartProducts();

  //SOMA DA QUANTIDADE DE PRODUTOS
  const getTotalProducts = (product: CartProductType[]) => {
    return product.reduce((prev: number, product) => prev + product.amount, 0);
  };

  return (
    <Wrapper>
      <h1>RARO SHOP</h1>
      <StyledBadge
        badgeContent={getTotalProducts(cartProducts)}
        showZero
        color="error"
      >
      <IconWrapper>
        <ShoppingIcon height="40px" width="40px"
          onClick={() => setIsOpen(true)}
          aria-label="Shopping Icon"
          fontSize="large"
        />
      </IconWrapper>
      </StyledBadge>
    </Wrapper>
  );
};

export default Header;

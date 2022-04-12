import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

import { CartProps } from "../Cart";

export const Wrapper = styled.nav<Pick<CartProps, "isOpen">>`
  padding: 3rem;
  display: flex;
  position: absolute;
	min-height: 220%;
  top: 0;
  right: 0;
  z-index: 1;
  /* min-width: 300px; */
  align-items: center;

  z-index: 2;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.25);
  background: red;

  h4 {
    margin-bottom: 3.2rem;
  }

  ${({ isOpen, theme }) => css`
    display: ${isOpen ? "block" : "none"};
    background-color: ${theme.colors.lightGray};
  `}
`;

export const Subtotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CartContainer = styled.div`
  display: flex;
	flex-direction: column;
  justify-content: center;
	min-width: 550px;
	max-width: 550px;
	min-height: 100%;
  align-items: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.black};
`
export const CartHeader = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-bottom: 30px;

	> svg {
    border-radius: 50%;
		cursor: pointer;
		color: ${({ theme }) => theme.colors.primary};
		width: 3rem;
		:hover {
			color: ${theme.colors.secondary};

		}
	}
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 2.6rem;
`;

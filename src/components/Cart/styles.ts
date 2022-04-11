import styled, { css } from "styled-components";

import { MenuPaymentProps } from ".";

export const Wrapper = styled.nav<Pick<MenuPaymentProps, "isOpen">>`
	padding: 3rem;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  border-radius: 20px;
  z-index: 2;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
  
	background-color: rgba(0, 0, 0, 0.25);

	h4 {
		margin-bottom: 3.2rem;
	}

	${({ isOpen, theme }) => css`
		display: ${isOpen ? "block" : "none"};
		background-color: ${theme.colors.lightPink};
	`}
`;

export const Subtotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.6rem;

  > svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
    width: 3rem;
  }
`;

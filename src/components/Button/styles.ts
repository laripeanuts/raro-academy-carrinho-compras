import styled, { css } from "styled-components";

import { ButtonProps } from ".";

export const Wrapper = styled.button<Omit<ButtonProps, "children">>`
  cursor: pointer;
  border: none;
  padding: 0.8rem 1.6rem;
  text-decoration: none;

  ${({ theme, fullWidth }) => css`
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius.default};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weight.bold};
    background-color: ${theme.colors.primary};
    line-height: 1.9rem;

    ${fullWidth &&
    css`
      width: 100%;
      padding: 1.6rem;
      border-radius: ${theme.border.radius.other};
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;

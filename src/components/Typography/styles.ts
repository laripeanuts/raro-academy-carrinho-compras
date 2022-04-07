import styled, { css } from "styled-components";
import media from "styled-media-query";

import { DefaultTheme } from "../../common/defaultTheme";
import { theme } from "../../styles/theme";
import { TypographyType } from ".";

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    ${media.greaterThan("medium")`
      font-size: ${theme.font.sizes.small};
    `}
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    ${media.greaterThan("medium")`
      font-size: ${theme.font.sizes.medium};
    `}
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xmedium};
    ${media.greaterThan("medium")`
      font-size: ${theme.font.sizes.large};
    `}
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xmedium};
    ${media.greaterThan("medium")`
      font-size: ${theme.font.sizes.huge};
    `}
  `,
};

export const Wrapper = styled.h1.attrs<TypographyType>(({ level }) => ({
  as: `h${level}`,
}))<TypographyType>`
  ${({ size = "large", fontWeight = 700, lineHeight = 1.5 }) =>
    css`
      color: ${theme.colors.black};
      font-weight: ${fontWeight};
      line-height: ${lineHeight};
      ${!!size && wrapperModifiers[size](theme)}
    `}
`;

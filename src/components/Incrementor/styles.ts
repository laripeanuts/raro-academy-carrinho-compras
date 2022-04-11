import styled, { css } from "styled-components";

type IconWrapperProps = {
  disabled?: boolean;
};

export const Wrapper = styled.div`
  padding: 0.4rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.secondary};
    border-radius: ${theme.border.radius.default};
  `}
`;

export const IconWrapper = styled.button<IconWrapperProps>`
	${({ theme, disabled }) => css`
		color: ${!disabled ? theme.colors.primary : theme.colors.lightPink};
		width: 1.6rem;
		height: 1.6rem;
		cursor: ${!disabled ? "pointer" : "not-allowed"};
		border: none;
    border-radius: 50%;
		:hover {
      color: ${disabled ? theme.colors.white : theme.colors.secondary};
      background-color: ${theme.colors.lightGray};
		}
	`}
`;

export const Quantity = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-family: ${theme.font.family.sourceSans};
    font-size: ${theme.font.sizes.small};
    line-height: 2.4rem;
    margin: 0 0.8rem;
  `}
`;

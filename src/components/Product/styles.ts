import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.2rem;
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.lightPink};
    border-radius: ${theme.border.radius.other};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

    img {
      width: 12.5rem;
      height: 12.5rem;
      border-radius: ${theme.border.radius.other};
    }
  `}
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  /* margin: 3.8rem 18rem 3.7rem 4rem; */

  ${media.lessThan("medium")`
    flex-direction: column;
    margin: 1.6rem;
  `}
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
gap: 10px;

${media.lessThan("medium")`
flex-direction: row;
width: 100%;
justify-content: space-between;
margin-bottom: 0.8rem;
`}
`;

export const Text = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  ${({ theme }) => css`
    font-family: ${theme.font.family.roboto};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    font-weight: ${theme.font.weight.light};
    margin-top: 0.4rem;
    
    ${media.lessThan("medium")`
    font-size: ${theme.font.sizes.xsmall};
    gap: 10px;
    margin-top: 0;
    `}
    `}
    
  svg {
    width: 1.6rem;
    height: 1.6rem;
    /* margin-right: 0.4rem; */
    ${({ theme }) => css`
      color: ${theme.colors.primary};
    `}
  }
`;

export const WrapperIncrementor = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  ${media.lessThan("medium")`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    gap: 10px;
    margin-top: 1.4rem;
  `}
`;

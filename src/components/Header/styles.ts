import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 2rem;
  margin-bottom: 1.6rem;
  background-color: ${({ theme }) => theme.colors.primary};

  > svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
    width: 3rem;
  }
`;

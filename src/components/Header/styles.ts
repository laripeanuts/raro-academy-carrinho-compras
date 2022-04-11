import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  position: fixed;
  z-index: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin-bottom: 1.6rem;
  background-color: ${({ theme }) => theme.colors.primary};

  > h1 {
    color: ${({ theme }) => theme.colors.white};
  }
  > svg {
    padding: 2px;
    cursor: pointer;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.white};
    width: 4rem;
    :hover {
      color: ${({ theme }) => theme.colors.secondary};
      background: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const IconWrapper = styled.div`
  padding: 2px;
  margin: 2px;
  cursor: pointer;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  :hover {
    color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.white};
  }
`;

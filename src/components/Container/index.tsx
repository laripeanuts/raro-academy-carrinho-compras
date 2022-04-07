import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.main`
  padding: 2.4rem 1.5rem 3.2rem;
  ${media.greaterThan("medium")`
    padding: 7rem 6rem;
  `}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  min-height: 100vh;
`;

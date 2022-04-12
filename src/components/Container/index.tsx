import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.main`
  padding: 2.4rem 1.5rem 3.2rem;
  height: 100%;
  padding-top: 90px;
  ${media.greaterThan("medium")`
    padding: 7rem 6rem;
  `}
`;

export const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 2.5fr 1fr;
  min-height: 100vh;
`;

export const ContainerProducts = styled.section`
  padding-top: 1.2rem;
  height: 100%;
  ${media.greaterThan("medium")`
    padding: 5rem 2rem;
        height:100%;
  `}
`;

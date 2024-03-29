import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 800px) {
    display: grid;
    justify-content: center;
  }
`;
export const H2 = styled.h2`
  margin: 10px 0;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: grid;
    row-gap: 10px;
    justify-content: center;
  }
`;

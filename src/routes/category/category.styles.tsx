import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 50px;
  justify-items: center;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 25px;
    }
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-row-gap: 25px;
    }
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 28px;
  }
`;
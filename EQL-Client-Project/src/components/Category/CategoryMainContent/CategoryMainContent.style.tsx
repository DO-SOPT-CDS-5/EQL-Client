import styled from 'styled-components';

export const CategoryMainContent=styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 6rem;

  border: 1px solid red;
`
export const ProductListHeader=styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.7rem;

  &> p{
    font: ${({ theme }) => theme.fonts.body6};
  }

  & > button {
    display: flex;
    align-items: center;
    font: ${({ theme }) => theme.fonts.body8};
  }
`
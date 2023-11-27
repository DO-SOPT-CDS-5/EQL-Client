import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//상단 브레드크럼바
export const CategoryBar = styled.div`
  display: flex;
  gap: 2.2rem;
  height: 2.9rem;
  margin: 2.4rem 0 2.2rem;
`;

export const Category = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.fonts.body5};

  color: ${({ theme }) => theme.colors.grey1};

  &.selected {
    color: ${({ theme }) => theme.colors.black};
  }
`;

//하단 영역
export const MainContainer = styled.div`
  display: flex;
  gap: 4rem;
  align-items: flex-start;
  justify-content: center;

  margin-top: 2.2rem;
`;

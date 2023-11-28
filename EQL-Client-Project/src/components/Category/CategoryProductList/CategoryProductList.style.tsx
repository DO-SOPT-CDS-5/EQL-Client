import styled from 'styled-components';

export const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`

//00개 상품 있습니다 아래 , 리스트 부분감싸는 가장 외부 컴포넌트
export const ItemsWrapper=styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  row-gap: 8.5rem;

`;

//item감싸는 contaienr
export const ItemContainer=styled.div`
  display: flex;
  flex-direction: column;
  width: 19%;
  min-width: 17.8rem;

  &:hover{
    cursor: pointer;
  }
`;

// 이미지 부분
export const ItemImg=styled.div`
  width: 100%;

  &>img{
    width: 100%;
    object-fit: fill;
  }
`

//브랜드 명
export const ItemBrandTitle=styled.p`
  margin-top: 1.6rem;
  ${({ theme }) => theme.fonts.body7};

  color: ${({ theme }) => theme.colors.black};
`;
//상품 명
export const ItemProductTitle = styled.p`
  overflow: wrap;
  width: 100%;
  margin-bottom: 0.6rem;

  ${({ theme }) => theme.fonts.body9};

  color: ${({ theme }) => theme.colors.grey1};
`;

//가격
export const ItemPrice = styled.p`
  margin-top: 0.6rem;
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.black};
`;

//하단에 북마크, 댓글 개수 부분 container
export const FavoriteContainer=styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 0.4rem;
`;

//북마크 , 댓그 안에 아이콘이랑 숫자 들어 있는 컴포넌트
export const ItemFavorite=styled.div`
  display: flex;
  gap: 0.3rem ;
  align-items: center;

  font: ${({ theme }) => theme.fonts.body8};
  color: ${({ theme }) => theme.colors.grey2};
`

export const PagenationNav=styled.nav`
  display: flex;
  align-items: center;
  margin-top: 14.9rem;
  
`

export const PagenationBtn=styled.button<{$isSeleted:boolean}>`
  margin-left: 2.5rem;
  ${({ $isSeleted,theme }) => $isSeleted? theme.fonts.body4:theme.fonts.body5};

  color: ${({ $isSeleted,theme }) => $isSeleted? theme.colors.black:theme.colors.grey2};
  
  &:nth-child(3){
    margin-right: 1.7rem;
  }
`
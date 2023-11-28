import * as S from './CategoryProductList.style';
import { PRODUCTIMGS } from '../../../constants/ProductImgs'
import { IcArrowRight, IcBookmarkDefault, IcChat, IcNew } from '../../../assets/svgs/0_icons';
import { useState } from 'react';

const CategoryproductList = () => {
  const [page,setPage]=useState(1);

  const handlePageChange=(num:number)=>{
    setPage(num);
  }
  return (
    <S.Container>
      <S.ItemsWrapper>
        {PRODUCTIMGS.slice(1).map((productImgs,idx)=>(
          <S.ItemContainer key={idx}>
            <S.ItemImg>
              <img src={PRODUCTIMGS[idx+1]} alt={`img${idx}`}/>
            </S.ItemImg>
            <S.ItemBrandTitle>PLAC WOMEN</S.ItemBrandTitle>
            <S.ItemProductTitle>Sojeanne X PLAC 레더 자켓</S.ItemProductTitle>
            <IcNew/>
            <S.ItemPrice>699,000</S.ItemPrice>
            <S.FavoriteContainer>
              <S.ItemFavorite>
                <IcBookmarkDefault/>
                <span>5</span>
              </S.ItemFavorite>
              <S.ItemFavorite>
                <IcChat/>
                <span>1</span>
              </S.ItemFavorite>
            </S.FavoriteContainer>
          </S.ItemContainer>
        ))}
      </S.ItemsWrapper>
      <S.PagenationNav>
        <S.PagenationBtn type='button' $isSeleted={page===1} onClick={()=>handlePageChange(1)}>1</S.PagenationBtn>
        <S.PagenationBtn type='button' $isSeleted={page===2} onClick={()=>handlePageChange(2)}>2</S.PagenationBtn>
        <S.PagenationBtn type='button' $isSeleted={page===3} onClick={()=>handlePageChange(3)}>3</S.PagenationBtn>
        <IcArrowRight/>
      </S.PagenationNav>
    </S.Container>
  )
}

export default CategoryproductList
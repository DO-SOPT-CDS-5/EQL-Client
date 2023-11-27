import * as S from './CategoryProductList.style';
import { PRODUCTIMGS } from '../../../constants/ProductImgs'
import { IcArrowRight, IcBookmarkDefault, IcChat, IcNew } from '../../../assets/svgs/0_icons';
import { useState } from 'react';

const CategoryproductList = () => {
  const [page,setPage]=useState(1);

  const handlePage=(num:number)=>{
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
        <S.PagenationBtn $isSeleted={page===1} onClick={()=>handlePage(1)}>1</S.PagenationBtn>
        <S.PagenationBtn $isSeleted={page===2} onClick={()=>handlePage(2)}>2</S.PagenationBtn>
        <S.PagenationBtn $isSeleted={page===3} onClick={()=>handlePage(3)}>3</S.PagenationBtn>
        <IcArrowRight/>
      </S.PagenationNav>
    </S.Container>
  )
}

export default CategoryproductList
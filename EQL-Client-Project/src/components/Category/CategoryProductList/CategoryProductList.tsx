import * as S from './CategoryProductList.style';
import { PRODUCTIMGS } from '../../../constants/ProductImgs'
import { IcBookmarkDefault, IcChat, IcNew } from '../../../assets/svgs/0_icons';

const CategoryproductList = () => {
  return (
    <S.Container>
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
    </S.Container>
  )
}

export default CategoryproductList
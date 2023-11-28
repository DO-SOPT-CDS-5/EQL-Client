import * as S from './CategoryFilter.style';
import CategoryFilterBtn from '../CategoryFilterBtn/CategoryFilterBtn';
import { IcUndo } from '../../../assets/svgs/0_icons';

const CategoryFilter = () => {
  return (
    <S.Container>
      <CategoryFilterBtn content="상품 정보"/>
      <CategoryFilterBtn content="브랜드"/>
      <CategoryFilterBtn content="가격"/>
      <CategoryFilterBtn content="색상"/>
      <S.Btn>
        <IcUndo/>
      </S.Btn>
      
    </S.Container>
  )
}

export default CategoryFilter
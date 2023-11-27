import * as S from './CategoryMainContent.style';
import CategoryFilter from '../CategoryFilter/CategoryFilter.tsx';
import CategoryProductList from '../CategoryProductList/CategoryProductList.tsx';
import { IcArrowDown } from '../../../assets/svgs/0_icons.ts';

const CategoryMainContent = () => {
  return (
    <S.CategoryMainContent>
      <CategoryFilter/>
      <S.ProductListHeader>
        <p>27,232개의 상품이 있습니다.</p>
        <button>
          <p>신상품순</p>
          <IcArrowDown/>
        </button>
      </S.ProductListHeader>
      <CategoryProductList/>
    </S.CategoryMainContent>
  )
}

export default CategoryMainContent
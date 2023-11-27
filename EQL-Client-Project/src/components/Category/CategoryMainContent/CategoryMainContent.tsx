import * as S from './CategoryMainContent.style';
import {PRODUCTIMGS} from '../../../constants/ProductImgs';

const CategoryMainContent = () => {
  const id=3;
  return (
    <S.CategoryMainContent><img src={PRODUCTIMGS[id]}/></S.CategoryMainContent>
  )
}

export default CategoryMainContent
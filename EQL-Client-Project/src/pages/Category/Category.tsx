import * as S from './Category.style';
import CategoryNav from '../../components/category/CategoryNav/CategoryNav';
import CategoryMainContent from '../../components/category/CategoryMainContent/CategoryMainContent';

const Category = () => {
  return (<S.CategoryContainer>
    <S.CategoryWrapper>
      <CategoryNav></CategoryNav>
      <CategoryMainContent></CategoryMainContent>
    </S.CategoryWrapper>

  </S.CategoryContainer>);
};



export default Category;

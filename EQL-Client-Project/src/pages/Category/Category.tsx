import React from 'react';
import * as S from './Category.style';
import CategoryNav from '../../components/Category/CategoryNav/CategoryNav';
import CategoryMainContent from '../../components/Category/CategoryMainContent/CategoryMainContent';

const Category = () => {
  return (<S.CategoryContainer>
    <S.CategoryWrapper>
      <CategoryNav></CategoryNav>
      <CategoryMainContent></CategoryMainContent>
    </S.CategoryWrapper>

  </S.CategoryContainer>);
};



export default Category;

import React from 'react'
import * as S from './CategoryNav.style';

const CategoryNav = () => {
  return (
    <S.CategoryNavContainer>
      <S.CategoryNavTitle>
        <div>우먼</div>
        <div>CATEGORY</div>
      </S.CategoryNavTitle>
      <S.CategoryNavList>
        {/* 네비게이션 바 부분 */}
        <S.CategoryNavItem>
          <span>ALL</span>
          <span>전체</span>
        </S.CategoryNavItem>
        <S.CategoryNavItem $active={true}>
        <span>CLOTHING</span>
          <span>의류</span>
        </S.CategoryNavItem>
        <S.CategoryNavItem>
        <span>BAG & ACC</span>
          <span>가방&악세사리</span>
        </S.CategoryNavItem>
        <S.CategoryNavItem>
        <span>SHOES</span>
          <span>슈즈</span>
        </S.CategoryNavItem>
      </S.CategoryNavList>
    </S.CategoryNavContainer>
  )
}

export default CategoryNav
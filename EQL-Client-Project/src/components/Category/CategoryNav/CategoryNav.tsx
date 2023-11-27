import * as S from './CategoryNav.style.tsx';
import CategoryItemDetail from '../CategoryItemDetail/CategoryItemDetail.tsx';
import { useState } from 'react';
import CategoryNavLink from '../CategoryNavLink/CategoryNavLink.tsx';


/**카테고리 왼쪽 네비게이션 바 컴포넌트 입니다 */
const CategoryNav = () => {
  const [isDetail,setIsDetail]=useState(false);

  const handleClick=()=>{
    setIsDetail(!isDetail);  
  };
  return (
    <S.CategoryNavContainer>
      <S.CategoryNavTitle>
        <div>우먼</div>
        <div>CATEGORY</div>
      </S.CategoryNavTitle>
      <S.CategoryNavList>
        {/* 네비게이션 바 부분 */}
        <S.CategoryNavItem >
          <CategoryNavLink categoryEg="ALL" categoryKo="전체" />
        </S.CategoryNavItem>
        <S.CategoryNavItem>
          <CategoryNavLink categoryEg="CLOTHING" categoryKo="의류" active={true} onClick={handleClick}/>
          <CategoryItemDetail isOpen={isDetail}/>
        </S.CategoryNavItem>
        <S.CategoryNavItem>
          <CategoryNavLink categoryEg="BAG & ACC" categoryKo="가방&액세서리"/>
        </S.CategoryNavItem>
        <S.CategoryNavItem>
          <CategoryNavLink categoryEg="SHOES" categoryKo="슈즈"/>
        </S.CategoryNavItem>
        <S.CategoryNavItem>
          <CategoryNavLink categoryEg="SEASON KEYWORD" categoryKo="시즌 키워드"/>
        </S.CategoryNavItem>
      </S.CategoryNavList>
    </S.CategoryNavContainer>
  )
}

export default CategoryNav
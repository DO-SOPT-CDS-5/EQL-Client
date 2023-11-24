import * as S from './CategoryNav.style.tsx';
import CategoryNavItem from '../CategoryNavItem/CategoryNavItem.tsx';
import CategoryItemDetail from '../CategoryItemDetail/CategoryItemDetail.tsx';
import { useState } from 'react';


/**카테고리 왼쪽 네비게이션 바 컴포넌트 입니다 */
const CategoryNav = () => {
  const [isActive,setisActive]=useState(true);
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
        <CategoryNavItem categoryEg="ALL" categoryKo="전체"/>
        <CategoryNavItem categoryEg="CLOTHING" categoryKo="의류" active={isActive} onClick={handleClick}/>
        {isDetail&&<CategoryItemDetail/>}
        <CategoryNavItem categoryEg="BAG & ACC" categoryKo="가방&액세서리"/>
        <CategoryNavItem categoryEg="SHOES" categoryKo="슈즈"/>
        <CategoryNavItem categoryEg="SEASON KEYWORD" categoryKo="시즌 키워드"/>
      </S.CategoryNavList>
    </S.CategoryNavContainer>
  )
}

export default CategoryNav
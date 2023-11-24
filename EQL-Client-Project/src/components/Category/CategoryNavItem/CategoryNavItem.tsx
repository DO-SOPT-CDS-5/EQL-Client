import React from 'react'
import * as S from "./CategoryNavItem.style.tsx";

type CategoryNavItemProps = {
  categoryEg:String,
  categoryKo:String,
  active?:boolean
};

const CategoryNavItem = ({categoryEg,categoryKo,active}:CategoryNavItemProps) => {
  return (
      <S.Wrapper $active={active}>
          <span>{categoryEg}</span>
          <span>{categoryKo}</span>
        </S.Wrapper>
  )
}

export default CategoryNavItem
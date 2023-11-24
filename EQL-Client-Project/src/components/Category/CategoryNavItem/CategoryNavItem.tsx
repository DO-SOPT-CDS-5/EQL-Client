import React from 'react'
import * as S from "./CategoryNavItem.style.tsx";

type CategoryNavItemProps = {
  categoryEg:string,
  categoryKo:string,
  active?:boolean,
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;

};

const CategoryNavItem = ({categoryEg,categoryKo,active,onClick}:CategoryNavItemProps) => {
  return (
      <S.Wrapper $active={active} onClick={onClick}>
          <span>{categoryEg}</span>
          <span>{categoryKo}</span>
        </S.Wrapper>
  )
}

export default CategoryNavItem
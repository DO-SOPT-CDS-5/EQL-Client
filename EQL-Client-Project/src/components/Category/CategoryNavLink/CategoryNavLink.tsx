import React from 'react'
import * as S from './CategoryNavLink.style';

type CategoryNavLinkProps = {
  categoryEg:string,
  categoryKo:string,
  active?:boolean,
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const CategoryNavLink = ({categoryEg,categoryKo,active,onClick}:CategoryNavLinkProps) => {
  return (
    <S.Wrapper $active={active} onClick={onClick} >
    <span>{categoryEg}</span>
    <span>{categoryKo}</span>
  </S.Wrapper>
  )
}

export default CategoryNavLink
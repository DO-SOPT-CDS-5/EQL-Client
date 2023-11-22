import styled from 'styled-components'

export const CategoryNavContainer=styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;

  width: 34.8rem;
  max-width: 348px;

  border: 1px solid red;
  
  
`
export const CategoryNavTitle=styled.div`
  display: flex;
  flex-direction: column;
  font: ${({ theme }) => theme.fonts.title3};
  line-height: 130%;

`

export const CategoryNavList=styled.ul`
  display: flex;
  flex-direction: column;

  
`

//acive가 true이면 borderbottom 두껍게
export const CategoryNavItem=styled.li<{$active?:boolean}>`
display: flex;
align-items:center;
height: 6rem;
border-bottom: ${({ $active, theme }) => 
  $active ? `3px solid ${theme.colors.black}` : `1px solid ${theme.colors.grey6}`
};

  & > span:nth-child(1){
    padding-right:0.8rem;
    font: ${({ theme }) => theme.fonts.body4};
  }
  & > span:nth-child(2){
    font: ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.grey3};
  }
`
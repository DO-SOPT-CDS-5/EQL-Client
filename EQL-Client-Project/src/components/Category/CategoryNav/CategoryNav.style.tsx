import styled from 'styled-components'

export const CategoryNavContainer=styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;

  width: 32.1rem;
  min-width: 32.1rem;
  max-width: 348px;
  
`
export const CategoryNavTitle=styled.div`
  display: flex;
  flex-direction: column;
  font: ${({ theme }) => theme.fonts.title3};
`

export const CategoryNavList=styled.ul`
  display: flex;
  flex-direction: column;
`


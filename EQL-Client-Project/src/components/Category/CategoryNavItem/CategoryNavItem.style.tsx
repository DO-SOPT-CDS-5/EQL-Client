import styled from "styled-components";

//acive가 true이면 borderbottom 두껍게
export const Wrapper=styled.li<{$active?:boolean}>`
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
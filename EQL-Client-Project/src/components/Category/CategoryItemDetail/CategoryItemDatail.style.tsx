import styled from 'styled-components';

export const HiddenContainer =styled.div<{$isOpen:boolean}>`
  max-height: ${({ $isOpen }) => ($isOpen ? '100rem' : '0')};
  transition: max-height 0.7s ease-in-out;
`;

export const Container=styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;

  padding: 1.8rem 2.3rem 1.9rem 2.5rem;

  text-justify: center;

  background-color: ${({ theme }) => theme.colors.grey7};
;

`

type WrapperProps = {
  $isSelected:boolean;
}

export const Wrapper = styled.li<WrapperProps>`
  display: flex;
  justify-content: space-between;
  

  & > .titleContainer{
    min-width: 25rem;
  }

  & .engTitle{
    padding-right: 0.8rem;
    font: ${({ theme }) => theme.fonts.body5};
    color: ${({ $isSelected,theme }) => 
    ($isSelected)? theme.colors.black:theme.colors.grey2};
  }

  & .koTitle{
    font: ${({ $isSelected,theme }) => 
    ($isSelected)?  theme.fonts.body7:theme.fonts.body9};
    color: ${({ $isSelected,theme }) => 
    ($isSelected)?  theme.colors.black:theme.colors.grey3};
  }

  &:hover{
    cursor: pointer;
  }
`;
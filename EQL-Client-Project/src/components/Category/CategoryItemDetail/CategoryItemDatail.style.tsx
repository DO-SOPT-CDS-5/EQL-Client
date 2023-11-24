import styled from 'styled-components';

export const Container=styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;

  padding: 1.8rem 4.7rem 1.9rem 2.5rem;

  text-justify: center;

  background-color: ${({ theme }) => theme.colors.grey7};

`

type WrapperProps = {
  $keyValue:string;
  $activeTitle:string;
}

export const Wrapper = styled.li<WrapperProps>`
  min-width: 25rem;

  & > .engTitle{
    padding-right: 0.8rem;
    font: ${({ theme }) => theme.fonts.body5};
    color: ${({ $keyValue,$activeTitle,theme }) => 
    ($activeTitle!==$keyValue)? theme.colors.grey2: theme.colors.black};
  }

  & > .koTitle{
    font: ${({ $keyValue,$activeTitle,theme }) => 
    ($activeTitle!==$keyValue)? theme.fonts.body9: theme.fonts.body7};
    color: ${({ $keyValue,$activeTitle,theme }) => 
    ($activeTitle!==$keyValue)? theme.colors.grey3: theme.colors.black};
  }
`;
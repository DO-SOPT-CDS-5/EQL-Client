import styled from 'styled-components';

export const Container=styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 2.5rem;
  align-items: center;
  justify-content: space-between;

  padding: 1.3rem 1.4rem;

  white-space: nowrap;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  border-radius: 3px;

  & > p{
    font: ${({ theme }) => theme.fonts.body7};
  }
`

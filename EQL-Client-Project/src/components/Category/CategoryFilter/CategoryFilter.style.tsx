import styled from 'styled-components';

export const Container=styled.div`
  display: flex;
  gap: 0.9rem;
`
export const Btn=styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.1rem 1.1rem 1.2rem 1.2rem;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  border-radius: 3px;;
`
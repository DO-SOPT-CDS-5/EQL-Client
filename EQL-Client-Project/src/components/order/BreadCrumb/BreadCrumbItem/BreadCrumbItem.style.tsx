import styled from 'styled-components';

export const BreadCrumContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  margin-right: 0.4rem;
`;

export const BreadCrumFont = styled.span<{ $type: boolean }>`
  color: ${({ $type, theme }) => ($type ? theme.colors.black : theme.colors.grey3)};
  ${({ theme }) => theme.fonts.body2};
`;

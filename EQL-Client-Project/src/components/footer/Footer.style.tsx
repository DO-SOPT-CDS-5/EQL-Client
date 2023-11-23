import styled from 'styled-components';
export const FooterContainer = styled.div`
  display: flex;

  width: 100%;
  min-width: 129rem;
  height: 40rem;

  border-top: 1px solid ${({ theme }) => theme.colors.grey4};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 45%;
  padding: 4.4rem 0rem 3.9rem 3.6rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const InfoMainText = styled.h2`
  ${({ theme }) => theme.fonts.body9};

  color: ${({ theme }) => theme.colors.black};
`;

export const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: center;

  margin-top: 2.4rem;
`;

export const InfoText = styled.p`
  ${({ theme }) => theme.fonts.body9};

  color: ${({ theme }) => theme.colors.grey3};
`;

export const InfoLinkText = styled.span`
  ${({ theme }) => theme.fonts.body_underlined8};

  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey3};
`;

export const InfoCopyText = styled.p`
  ${({ theme }) => theme.fonts.body10};

  color: ${({ theme }) => theme.colors.grey3};
`;

export const MenuContainer = styled.div<{ $sequence: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: ${({ $sequence }) => ($sequence === 'middle' ? '32%' : '23%')};
  padding: 4.2rem 0rem 3.1rem 3.1rem;
`;

export const FooterHr = styled.hr`
  color: ${({ theme }) => theme.colors.grey4};
`;

export const HelpContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  justify-content: center;

  margin-top: 1.7rem;
`;

export const FooterMenuTitle = styled.p`
  ${({ theme }) => theme.fonts.body9};

  color: ${({ theme }) => theme.colors.black};
`;
export const FooterMenuText = styled.p`
  ${({ theme }) => theme.fonts.body9};

  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
`;
export const MenuLinkText = styled.p`
  ${({ theme }) => theme.fonts.body_underlined8};

  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
`;

export const SNSContainer = styled.div`
  display: flex;
  gap: 2.8rem;
  justify-content: start;
`;

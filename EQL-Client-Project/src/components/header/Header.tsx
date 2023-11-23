import styled from 'styled-components';

///test
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderText></HeaderText>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 10rem;

  background-color: #a6c960;
`;

const HeaderContainer = styled.div`
  width: 50rem;
  background-color: yellow;
`;

const HeaderText = styled.h1`
  ${({ theme }) => theme.fonts.title2};
`;

export default Header;

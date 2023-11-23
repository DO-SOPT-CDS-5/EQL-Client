import * as S from './Footer.style';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.InfoContainer>
        <S.InfoWrapper>
          <S.InfoMainText>WE ARE ALL EQL</S.InfoMainText>
          <S.InfoTextContainer>
            <S.InfoText>
              (주) 한섬 / 대표이사 김민덕 / 서울시 강남구 도산대로 523 한섬빌딩
            </S.InfoText>
            <S.InfoText>문의전화 1661-8858(유료) / 팩스 02-476-8169</S.InfoText>
            <S.InfoText>
              사업자등록번호 120-81-26337 <S.InfoLinkText>사업자 정보 확인</S.InfoLinkText>
            </S.InfoText>
            <S.InfoText>
              통신판매업신고번호 제 2009-서울강남-00826호 /
              <S.InfoLinkText>하나 은행 구매안전 서비스</S.InfoLinkText>
            </S.InfoText>
            <S.InfoText>개인정보보호 책임자 윤인수 / 호스팅 서비스 (주)한섬</S.InfoText>
          </S.InfoTextContainer>
        </S.InfoWrapper>
        <S.InfoCopyText>COPYRIGHT© 2023 HANDSOME. ALL RIGHTS RESERVED</S.InfoCopyText>
      </S.InfoContainer>
      <S.FooterHr />
      <S.MenuContainer $sequence={'middle'}>
        <S.HelpContainer>
          <S.FooterMenuTitle>고객센터</S.FooterMenuTitle>
          <S.MenuWrapper>
            <S.FooterMenuText>FAQ</S.FooterMenuText>
            <S.FooterMenuText>공지사항</S.FooterMenuText>
            <S.FooterMenuText>제휴문의</S.FooterMenuText>
            <S.FooterMenuText>입점상담</S.FooterMenuText>
            <S.FooterMenuText>멤버십 안내</S.FooterMenuText>
          </S.MenuWrapper>
        </S.HelpContainer>
        <S.SNSContainer>
          <S.FooterMenuText>YOUTUBE</S.FooterMenuText>
          <S.FooterMenuText>FACEBOOK</S.FooterMenuText>
          <S.FooterMenuText>INSTAGRAM</S.FooterMenuText>
        </S.SNSContainer>
      </S.MenuContainer>
      <S.FooterHr />
      <S.MenuContainer $sequence={'last'}>
        <S.HelpContainer>
          <S.FooterMenuTitle>회사소개</S.FooterMenuTitle>
          <S.MenuWrapper>
            <S.FooterMenuText>ABOUT EQL</S.FooterMenuText>
            <S.FooterMenuText>회사소개</S.FooterMenuText>
            <S.MenuLinkText>개인정보처리방침</S.MenuLinkText>
            <S.FooterMenuText>입점상담</S.FooterMenuText>
            <S.FooterMenuText>ESG</S.FooterMenuText>
          </S.MenuWrapper>
        </S.HelpContainer>
        <S.SNSContainer>
          <S.FooterMenuText>FAMILY SITE +</S.FooterMenuText>
        </S.SNSContainer>
      </S.MenuContainer>
    </S.FooterContainer>
  );
};

export default Footer;

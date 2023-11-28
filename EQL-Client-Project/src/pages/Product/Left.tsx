import * as S from './Left.style';
import { IcArrow, IcBrandImg, IcPlus } from '../../assets/svgs/0_icons';
import { RecommendFirstImg, RecommendSecondImg } from '../../assets/images';

const Left = () => {
  return (
    <S.LeftContainer>
      <S.ProductPreviewImg
        src="https://cdn.eqlstore.com/goods/EQBR/23/10/12/GPGS23101250541_0_ORGINL_1697087357024.jpg?RS=389"
        alt="상품 이미지"
      />
      <S.ProductImgWrapper>
        <S.ProductImg
          src="https://cdn.eqlstore.com/goods/EQBR/23/10/12/GPGS23101250541_0_ORGINL_1697087357024.jpg?RS=389"
          alt="상품 미리보기 이미지"
        />
        <S.ImgText>연관 추천 상품</S.ImgText>
      </S.ProductImgWrapper>

      <S.ButtonWrapper>
        <S.Button>
          <S.ButtonText>네이버페이로 결제 시 5,000P 추가 적립</S.ButtonText>
          <IcArrow />
        </S.Button>
        <S.Button>
          <S.ButtonText>카톡 플친에게 드리는 15% 쿠폰</S.ButtonText>
          <IcArrow />
        </S.Button>
      </S.ButtonWrapper>

      <S.BrandInfoWrapper>
        <S.BrandInfo>
          <IcBrandImg />
          <S.BrandNameWrapper>
            <S.BrandName>MSCHF</S.BrandName>
            <S.BrandName className="korean">미스치프</S.BrandName>
          </S.BrandNameWrapper>
        </S.BrandInfo>
        <S.BookmarkLogo />
        <S.BrandInfoLine />
        <S.BrandDetail>
          미스치프는 한국의 서브컬처에 기반한 스트릿 캐주얼브랜드이다. 다양한 브랜드 및 아티스트와의
          협업을 통해 패션 필드에 국한되지 않은 폭넓은 범위의 문화활동을 지향하며 로컬컬쳐신을
          서포트한다. 2010년 핸드메이드 가방 ...
        </S.BrandDetail>
      </S.BrandInfoWrapper>

      <S.InfoContainer>
        <S.MenuTab>
          <S.EachMenu className="selected">상품 설명</S.EachMenu>
          <S.EachMenu>리뷰 [87]</S.EachMenu>
          <S.EachMenu>문의 [68]</S.EachMenu>
        </S.MenuTab>

        <S.ItemInfoContainer>
          <S.ItemInfo className="grey">상품정보</S.ItemInfo>
          <S.ItemInfo>상품코드 :E12D7WTO361WMIBK</S.ItemInfo>
          <S.ItemInfo className="grey">상품공지</S.ItemInfo>
          <S.ItemInfo>
            명절 연휴 기간 택배 마감, 이후 주문량 증가로 안내드리는 예약 출고일입니다. 작업 상황에
            따라 조기 출고될 수 있습니다.
          </S.ItemInfo>
          <S.SizeBox>
            <div>
              <S.ItemInfo>SIZE:</S.ItemInfo>
              <S.ItemInfo>M</S.ItemInfo>
              <S.ItemInfo>
                어깨 470
                <br />
                가슴 520
                <br />
                기장 720
                <br />
                소매 680
              </S.ItemInfo>
            </div>
            <div>
              <S.ItemInfo>L</S.ItemInfo>
              <S.ItemInfo>
                어깨 520
                <br />
                가슴 570
                <br />
                기장 725
                <br />
                소매 690
                <br />
              </S.ItemInfo>
            </div>
          </S.SizeBox>
          <S.ItemInfo className="cotton">COTTON 100%</S.ItemInfo>
          <S.ItemInfo>
            본 제품 첫 세탁시 뒤집어서 찬물에 단독으로 세탁하십시오.
            <br />
            비벼 빨지 마시고 이염의 우려가 있으니 다른 소재와 분리하여 세탁하시고 세제는 물에타서
            사용하십시오.
            <br />
            산소, 염소계 표백제품을 사용할 경우 탈염되오니 사용하지 마십시오.
            <br />본 제품을 물에 오랫동안 담가 두지 마십시오.
            <br />
            섬유 특성상 세탁 후 수축현상 (3~5% 이내)이 일어날 수 있으니 세탁법에 유의하십시오.
            <br />
            탈수는 약하게 하며 직사광선에 의한 탈색이 있을 수 있으니 통풍이 잘 되는 그늘에서
            건조하십시오.
            <br />
            필요시에 낮은 온도로 다리미질 하십시오.
            <br />
            <br />
            MACHINE WASH COLD WITH LIKE COLORS
            <br />
            DO NOT USE CHLORINE BLEACH
            <br />
            TUMBLE DRY LOW
            <br />
            COOL IRON IF NEEDED
          </S.ItemInfo>
        </S.ItemInfoContainer>
        <S.ProductInfoImg
          src="https://cdn.eqlstore.com/goods/EQBR/23/10/12/GPGS23101250541_0_ORGINL_1697087357024.jpg?RS=389"
          alt="product detail image"
        />

        <S.SeeMoreBtn>
          <S.SeeMoreBtnText>상품 정보 더보기</S.SeeMoreBtnText>
        </S.SeeMoreBtn>

        <S.TabBox>
          <S.Tab>
            <S.TabTitle>상품 사이즈 정보</S.TabTitle>
            <S.TabTitle className="sizeGuide">SIZE GUIDE</S.TabTitle>
          </S.Tab>
          <S.TabLine />
          <S.Tab>
            <S.TabTitle>교환/환불 배송 정보</S.TabTitle>
            <IcPlus />
          </S.Tab>
          <S.TabLine />
          <S.Tab>
            <S.TabTitle>상품 필수 정보</S.TabTitle>
            <IcPlus />
          </S.Tab>
        </S.TabBox>

        <S.RecommendBox>
          <S.RecommendTitle>함께 본 상품</S.RecommendTitle>

          <S.RecommendItemWrapper>
            <S.RecommendItem>
              <S.ItemImgWrapper>
                <S.ItemImg src={RecommendFirstImg} alt="함께 본 상품 1" />
                <S.ItemBookmarkIcon />
              </S.ItemImgWrapper>

              <S.RecommendItemInfoContainer>
                <S.RecommendItemName>MSCHF</S.RecommendItemName>
                <S.RecommendItemText>[11/08(수) 예약배송] RHOMBUS LONG...</S.RecommendItemText>
                <S.RecommendItemText className="price">58,000</S.RecommendItemText>
              </S.RecommendItemInfoContainer>
            </S.RecommendItem>

            <S.RecommendItem>
              <S.ItemImgWrapper>
                <S.ItemImg src={RecommendSecondImg} alt="함께 본 상품 2" />
                <S.ItemBookmarkIcon />
              </S.ItemImgWrapper>

              <S.RecommendItemInfoContainer>
                <S.RecommendItemName>REST&RECREATION</S.RecommendItemName>
                <S.RecommendItemText>RR ARROW POINT LONG SLEEVE T-...</S.RecommendItemText>
                <S.RecommendItemText className="price">73,000</S.RecommendItemText>
              </S.RecommendItemInfoContainer>
            </S.RecommendItem>
          </S.RecommendItemWrapper>
        </S.RecommendBox>
      </S.InfoContainer>
    </S.LeftContainer>
  );
};

export default Left;

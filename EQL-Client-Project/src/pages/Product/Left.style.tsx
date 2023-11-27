import styled from 'styled-components';
import { IcBookmarkDefault } from '../../assets/svgs/0_icons';

export const LeftContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 67.9rem;
`;

//상품 이미지 영역
export const ProductImgWrapper = styled.div`
  position: relative;
`;

export const ProductPreviewImg = styled.img`
  position: absolute;
  top: 2.6rem;
  left: -7rem;

  width: 5rem;
  height: 6.7rem;

  object-fit: cover;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 90.2rem;
  object-fit: cover;
`;

export const ImgText = styled.div`
  cursor: pointer;

  position: absolute;
  right: 3.2rem;
  bottom: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 4rem;
  padding: 0.6rem 1.3rem;

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.grey2};
  border-radius: 0.4rem;

  ${({ theme }) => theme.fonts.body8};
`;

//버튼 영역
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;
  margin: 8.7rem 0 12.8rem;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6rem;
  padding: 1.7rem 1.6rem 1.7rem 1.9rem;

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.black};
`;

export const ButtonText = styled.p`
  ${({ theme }) => theme.fonts.body6};
`;

//브랜드 설명 박스
export const BrandInfoWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 67.6rem;

  border: 1px solid ${({ theme }) => theme.colors.grey6};
`;

export const BrandInfo = styled.div`
  display: flex;
  gap: 1.8rem;
  align-items: center;
  justify-content: flex-start;

  padding: 1.7rem 0 1.8rem 2.5rem;
`;

export const BrandNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: flex-start;
`;

export const BrandName = styled.p`
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.fonts.body7};

  &.korean {
    color: ${({ theme }) => theme.colors.grey2};

    ${({ theme }) => theme.fonts.body9};
  }
`;

export const BookmarkLogo = styled(IcBookmarkDefault)`
  position: absolute;
  top: 2rem;
  right: 3.1rem;
`;

export const BrandInfoLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grey6};
`;

export const BrandDetail = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1.8rem 3.1rem 1.6rem 3rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body9};
`;

//상품 설명 영역
export const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-top: 9.7rem;
`;

export const MenuTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EachMenu = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 22.6rem;
  height: 4.3rem;

  color: ${({ theme }) => theme.colors.grey1};
  ${({ theme }) => theme.fonts.body5};

  &.selected {
    gap: 1.4rem;
    color: ${({ theme }) => theme.colors.black};
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body4};
  }
`;

//상품설명 박스
export const ItemInfoContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0.2rem 0 0.9rem;
`;

export const SizeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin: 1.3rem 0 0.6rem;
`;
export const ItemInfo = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body9};

  &.grey {
    margin-top: 3.8rem;
    margin-bottom: 1.7rem;
    color: ${({ theme }) => theme.colors.grey2};
  }

  &.cotton {
    margin-bottom: 1.6rem;
  }
`;

//상품 이미지
export const ProductInfoImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

//상품 정보 더보기 버튼
export const SeeMoreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 5.2rem;

  border: 0.7px solid ${({ theme }) => theme.colors.black};
  border-radius: 0.4rem;
`;

export const SeeMoreBtnText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body7};
`;

//하단 탭 영역
export const TabBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  margin: 12.8rem 0 8.9rem;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TabTitle = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body4};

  &.sizeGuide {
    ${({ theme }) => theme.fonts.body9};
  }
`;

export const TabLine = styled.div`
  width: 100%;
  height: 0.7px;
  margin: 2.6rem 0 2.8rem;
  background-color: ${({ theme }) => theme.colors.grey6};
`;

//함께 본 상품 영역
export const RecommendBox = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 12.9rem;
`;

export const RecommendTitle = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body2};
`;

export const RecommendItemWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
`;

export const RecommendItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.2rem;
`;

export const ItemImgWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 21.7rem;
  object-fit: cover;
`;

export const ItemBookmarkIcon = styled(IcBookmarkDefault)`
  position: absolute;
  top: 1.1rem;
  right: 1.3rem;
`;

export const RecommendItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const RecommendItemName = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body7};
`;

export const RecommendItemText = styled.p`
  color: ${({ theme }) => theme.colors.grey1};
  ${({ theme }) => theme.fonts.body9};

  &.price {
    margin-top: 0.2rem;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body6};
  }
`;

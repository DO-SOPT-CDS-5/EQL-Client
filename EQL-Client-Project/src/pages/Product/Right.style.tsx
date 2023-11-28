import styled from 'styled-components';

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 43rem;
  margin-top: 4.3rem;
`;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0 1.2rem 0 0.3rem;
`;

export const BrandName = styled.p`
  ${({ theme }) => theme.fonts.body6};
`;

export const BookmarkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BookmarkCount = styled.p`
  ${({ theme }) => theme.fonts.body10};

  color: ${({ theme }) => theme.colors.black};
`;

export const ItemTitle = styled.p`
  width: 100%;
  margin-top: 0.6rem;
  padding: 0 1.2rem 0 0.3rem;

  color: ${({ theme }) => theme.colors.black};
  text-overflow: ellipsis;
  word-break: keep-all;
  white-space: wrap;

  ${({ theme }) => theme.fonts.body1};
`;

//가격 영역
export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 1.3rem;
  padding-right: 1.1rem;
  padding-left: 0.1rem;
`;

export const Price = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.fonts.title4};
`;

export const CouponBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.2rem 1rem;

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.red_transparent};
  border-radius: 0.2rem;
  ${({ theme }) => theme.fonts.body10};
`;

//평점 영역
export const RatingWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;

  margin: 2.8rem 0 5.4rem;
`;

export const StarsWrapper = styled.div`
  display: flex;
  gap: 0.1rem;
  align-items: center;
  justify-content: center;
`;

export const RatingScoreWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const RatingScore = styled.p`
  color: ${({ theme }) => theme.colors.grey3};
  ${({ theme }) => theme.fonts.body10};
`;

//추가 정보 영역
export const Option = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &.delivery {
    margin-top: 2.4rem;
  }
`;

export const OptionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 3.5rem;
  padding-left: 0.3rem;
`;

export const OptionTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body4};
`;

export const OptionDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &.benefit {
    gap: 0.3rem;
    margin-bottom: 7.1rem;
  }
  &.delivery {
    gap: 0.8rem;
    margin-bottom: 3.9rem;
  }
`;
export const OptionDetail = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body9};
`;

export const DeliveryText = styled.p`
  margin-bottom: 1.6rem;
  padding-left: 0.3rem;
  color: ${({ theme }) => theme.colors.grey2};
  ${({ theme }) => theme.fonts.body9};
`;

//경계선
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grey6};
`;

//드롭다운 옵션 영역
export const DropBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 1.2rem 0.8rem 1.2rem 1.6rem;

  border: 0.7px solid ${({ theme }) => theme.colors.grey4};
  border-radius: 0.2rem;
`;

export const DropBoxText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body9};
`;

export const DropBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-bottom: 5rem;
`;

//총 가격 영역
export const TotalPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin: 1.5rem 0 2.6rem;
`;

export const TotalPriceText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body9};
`;

export const TotalPrice = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body1};
`;

//버튼 영역
export const ButtonWrapper = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.3rem 5.6rem;

  border-radius: 0.4rem;

  ${({ theme }) => theme.fonts.body7};

  &.cart {
    background-color: ${({ theme }) => theme.colors.white};
    border: 0.7px solid ${({ theme }) => theme.colors.black};
  }
  &.order {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

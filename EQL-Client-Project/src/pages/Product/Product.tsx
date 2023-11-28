import * as S from './Product.style';
import { IcArrowBreadCrumb } from '../../assets/svgs/0_icons';
import Right from './Right';
import Left from './Left';
const Product = () => {
  return (
    <S.ProductContainer>
      <S.CategoryBar>
        <S.Category>우먼</S.Category>
        <IcArrowBreadCrumb />
        <S.Category>의류</S.Category>
        <IcArrowBreadCrumb />
        <S.Category className="selected">스웨트 셔츠 / 후디</S.Category>
      </S.CategoryBar>
      <S.MainContainer>
        <Left />
        <Right />
      </S.MainContainer>
    </S.ProductContainer>
  );
};

export default Product;

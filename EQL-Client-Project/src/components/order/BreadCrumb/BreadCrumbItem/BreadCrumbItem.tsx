import * as S from './BreadCrumbItem.style';

import { IcOrderArrowRight } from '../../../../assets/svgs/0_icons';
import { ReactNode } from 'react';

type BreadCrumItemTypes = {
  type: boolean;
  children: ReactNode;
  isLast: boolean;
};
const BreadCrumbItem = ({ type, children, isLast }: BreadCrumItemTypes) => {
  return (
    <S.BreadCrumContainer>
      <S.BreadCrumFont $type={type}>{children}</S.BreadCrumFont>
      {!isLast && <IcOrderArrowRight />}
    </S.BreadCrumContainer>
  );
};

export default BreadCrumbItem;

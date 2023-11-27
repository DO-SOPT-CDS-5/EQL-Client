import * as S from './BreadCrumb.style';

import { BREADCRUMBS } from '../../../constants/BreadCrumbs';
import BreadCrumItem from './BreadCrumbItem/BreadCrumbItem';
import comparePath from '../../../utils/comparePath';
import { useLocation } from 'react-router-dom';

const BreadCrumb = () => {
  const { pathname } = useLocation();

  return (
    <S.BreadCrumContainer>
      {BREADCRUMBS.map((item, index) => (
        <BreadCrumItem
          key={item.number}
          type={comparePath({ pathname, itemName: item.name })}
          isLast={index === BREADCRUMBS.length - 1}
        >
          {item.number}
          {item.name}
        </BreadCrumItem>
      ))}
    </S.BreadCrumContainer>
  );
};

export default BreadCrumb;

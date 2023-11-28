import { IcPlus } from '../../../assets/svgs/0_icons';
import * as S from './CategoryFilterBtn.style';

type FilterPros = {
  content:string
}

const CategoryFilterBtn = ({content}:FilterPros) => {
  return (
    <S.Container type='button'>
      <p>{content}</p>
      <IcPlus/>
  </S.Container>
  )
}

export default CategoryFilterBtn
import * as S from './CategoryItemDatail.style.tsx';
import {CATEGORYDETAILS} from '../../../constants/categoryDetails.ts';
import { useState } from 'react';
import { IcCheck } from '../../../assets/svgs/0_icons.ts';



/** 카테고리를 눌렀을 때 아래로 내려오는 카테고리 내부 목록 컴포넌트입니다 */
const CategoryItemDetail = () => {

  const [activeTitle,setActiveTitle]=useState("ALL");

  return (
    <S.Container>
      {CATEGORYDETAILS.map(({english,korean})=>(
        <S.Wrapper 
          key={english} 
          $keyValue={english} 
          $activeTitle={activeTitle}>
            <div className='titleContainer'>
              <span className='engTitle'>{english}</span>
              <span className='koTitle'>{korean}</span>
            </div>
            {(activeTitle===english) && <IcCheck/>}
        </S.Wrapper>
      ))}
    </S.Container>
  )
}

export default CategoryItemDetail
import React, {memo} from 'react';

import * as S from './style'

const Item = ({number}) => {
  return (
    <>
      <S.ItemWrap>
        <S.ItemWrapTop>{number}</S.ItemWrapTop>
        <S.ItemWrapBody>
          <S.ItemWrapBodyTitle></S.ItemWrapBodyTitle>
          <S.ItemWrapBodyTitle></S.ItemWrapBodyTitle>
          <S.ItemWrapBodyTitle></S.ItemWrapBodyTitle>
        </S.ItemWrapBody>
      </S.ItemWrap>
    </>
  );
};

export default memo(Item);
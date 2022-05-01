import React from 'react';

import * as S from './style'

const Bg = ({children}) => {
  return (
    <S.Back.Container>
      <S.Back.Blur>
      <S.Hei>
        <S.DIV>
          {children}
        </S.DIV>
      </S.Hei>
      </S.Back.Blur>
    </S.Back.Container>
  );
};

export default Bg;
import React from 'react';

import * as S from './style'
import Box from '../../Components/Box';

const Bg = ({children}) => {
  const [상태, 상태변경] = React.useState('초기값');
  const [숫자, 숫자변경] = React.useState(1);
  const [토글, 토글값변경] = React.useState(false);
  
  const clickPlus = () => {
    숫자변경(숫자 + 1)
  }

  React.useEffect(() => {
    console.log('렌더링됨 키키')
  })
  return (
    <S.Back.Container>
      <S.Back.Blur>
      <S.Hei>
        <S.DIV>
          <S.Flex>
            <Box percent={100} />
            <Box percent={50} />
            <Box percent={0} />
          </S.Flex>
        </S.DIV>
      </S.Hei>
      </S.Back.Blur>
    </S.Back.Container>
  );
};

export default Bg;
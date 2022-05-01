import React from 'react';
import styled from 'styled-components';

const Box = ({percent}) => {
  return (
    <Border percent={percent * 0.01}>
      <DIV>{percent}%</DIV>
    </Border>
  );
};

export default Box;


const Border = styled.div`
  width: 500px; height: 500px;
  background: ${({percent}) => percent === 0 ? `#666666` : `linear-gradient(135deg, rgba(93, 255, 206, ${percent}), rgba(0, 194, 255, ${percent}))`};
  display: flex; justify-content: center; align-items: center;
  font-size: 25px; font-weight: 600; color: #ffffff;
  margin: 20px;
  
`;

const DIV = styled.div`
width: 498px; height: 498px;
background: #171717;
display: flex; justify-content: center; align-items: center;
font-size: 25px; font-weight: 600; color: #ffffff;
`;
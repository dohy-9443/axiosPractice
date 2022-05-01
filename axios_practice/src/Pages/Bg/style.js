import styled from "styled-components";

export const Back = {
  Container: styled.div`
    width: 100%;
    overflow: hidden;
    background: linear-gradient(185.89deg, #000000 0.29%, #111111 100%);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 580px;
      height: 580px;
      border-radius: 50%;
      background: linear-gradient(135.97deg, #98FFF3 14.52%, #0057FF 50.35%, #BD00FF 87.24%);
      left: -270px;
      bottom: 332px;
      opacity: 0.6;
      z-index: 1;
    }

    &::after {
      content: '';
      position: absolute;
      width: 310px;
      height: 310px;
      border-radius: 50%;
      background: linear-gradient(135.97deg, #98FFA9 14.52%, #00FFB2 50.35%, #00E0FF 87.24%);
      right: -65px;
      bottom: -159px;
      opacity: 0.3;
      z-index: 1;
    }
  `,

  Blur: styled.div`
    position: relative;
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(340px);
    z-index: 2;
  `,
}

export const Hei = styled.div`
  width: 100%;
  height: 10000px;
`;

export const DIV = styled.div`
  /* margin: 50px auto; */
  width: 100%;
  padding: 100px 0;
  height: 10000px;
  /* background-color: green; */
  font-size: 20px;
  color: #fff;
`;

export const Flex = styled.div`
display: flex; justify-content: center;
flex-wrap: wrap;
`;

export const Border = styled.div`
width: 500px; height: 500px;
background: linear-gradient(135deg, #5DFFCE, #00C2FF);
display: flex; justify-content: center; align-items: center;
font-size: 25px; font-weight: 600; color: #ffffff;
margin-right: 20px;
&:nth-child(2) {
  background: linear-gradient(135deg, rgba(93, 255, 206, 0.5), rgba(0, 194, 255, 0.5));
}

&:last-child {
  background: #666666;
} 
`;

export const Box = styled.div`
width: 498px; height: 498px;
background: #171717;
display: flex; justify-content: center; align-items: center;
font-size: 25px; font-weight: 600; color: #ffffff;
`;
import styled from "styled-components";

export const ItemWrap = styled.div`
  width: 350px; height: 370px;
  display: flex; flex-direction: column;
  margin: 10px;
  background: #fff; box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  border-radius: 6px;
`;

export const ItemWrapTop = styled.div`
  width: 350px; height: 170px;
  display: flex; justify-content: center; align-items: center;
  border-top-left-radius: 6px; border-top-right-radius: 6px;
  color: #566270; font-size: 20px; text-align: center;
`;

export const ItemWrapBody = styled.div`
  height: 200px;
  padding: 10px;
  border-bottom-left-radius: 6px; border-bottom-right-radius: 6px;
`;

export const ItemWrapBodyTitle = styled.div`
  width: 300px; height: 36px;
  margin: 16px;
  border-radius: 4px;
  background: #e2e5e7;
`;
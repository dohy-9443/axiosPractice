import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`;

export const Wrap = styled.div`
  padding: 25px 20px;
`;

export const Inner = styled.div`
  width: 100%;
`;
export const InputBox = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid #fca400;
  padding: 0 14px;
  font-size: 18px;
  outline: none;
  font-weight: bold;
  color: #fca400;
  box-sizing: border-box;

  &::placeholder {
    color: #999999;
  }
`;

export const ListCover = styled.div`
  width: 100%;
`;

export const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Li = styled.li`
  width: 48%;
  margin: 1%;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  & img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const TitleDIV = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;

export const Title = styled.div`
  padding: 10px 5px;
  font-size: 11px;
  font-weight: 600;
  color: #fff;
`;

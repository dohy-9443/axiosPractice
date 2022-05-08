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
`;

export const Li = styled.li`
  width: 100%;

  & img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

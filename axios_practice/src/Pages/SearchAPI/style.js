import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Wrap = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 25px 20px;
`;

export const Inner = styled.div`
  width: 100%;
`;
export const InputBox = styled.div`
  width: 100%;
  height: 40px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid #fca400;
  padding: 14px;
  font-size: 18px;
  outline: none;
  font-weight: bold;
  color: #fca400;

  &::placeholder {
    color: #999999;
  }
`;

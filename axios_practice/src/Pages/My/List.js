import React from "react";
import styled from "styled-components";
const List = ({ title, text }) => {
  const [isShow, setIsShow] = React.useState(false);
  return (
    <Li onClick={() => setIsShow(!isShow)}>
      <Show>{title}</Show>
      {isShow && <Hide>{text}</Hide>}
    </Li>
  );
};

export default List;

const Li = styled.li`
  width: 100%;
  margin-bottom: 10px;
`;

const Show = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid #333;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Hide = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid #333;
  background-color: tan;
  border-top: none;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

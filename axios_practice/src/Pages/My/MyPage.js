import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import List from "./List";

const MyPage = () => {
  const { state } = useLocation();

  const [list, setList] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);

  const data = [
    { id: 1, title: "제목1", text: "설명1" },
    { id: 2, title: "제목2", text: "설명2" },
    { id: 3, title: "제목3", text: "설명3" },
    { id: 4, title: "제목4", text: "설명4" },
  ];

  useEffect(() => {
    let copy = [];

    data.forEach((item) => {
      copy.push({ ...item, isCheck: false });
    });

    setList(copy);

    return () => {
      setList([]);
    };
  }, []);

  return (
    <div>
      내 username은 {state.userName} 이고 <br />내 name은 {state.Name} 입니다.
      <Ul>
        {list.map((item, index) => (
          // <Li key={item.id} onClick={() => setActiveIdx(index + 1)}>
          // <Li
          //   key={item.id}
          //   onClick={() => {
          //     let copy = [...list];
          //     copy[index].isCheck = !copy[index].isCheck;
          //     setList(copy);
          //   }}
          // >
          //   <Show>{item.title}</Show>
          //   {/* {item.id === activeIdx && <Hide>{item.text}</Hide>} */}
          //   {item.isCheck && <Hide>{item.text}</Hide>}
          // </Li>
          <React.Fragment key={item.id}>
            <List title={item.title} text={item.text} />
          </React.Fragment>
        ))}
      </Ul>
    </div>
  );
};

export default MyPage;

const Ul = styled.ul`
  width: 700px;
  margin: 100px auto;
`;

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

import React, { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import List from "./List";

const MyPage = () => {
  const { state } = useLocation();

  const [list, setList] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);

  const data = [
    { id: 1, title: "제목1", text: "설명1", isCheck: false },
    { id: 2, title: "제목2", text: "설명2", isCheck: false },
    { id: 3, title: "제목3", text: "설명3", isCheck: false },
    { id: 4, title: "제목4", text: "설명4", isCheck: false },
  ];

  useEffect(() => {
    setList(data);
  }, []);

  return (
    <div>
      내 username은 {state.userName} 이고 <br />내 name은 {state.Name} 입니다.
      <Ul>
        {list.map((item, index) => {
          return (
            <Fragment key={index}>
              <List title={item.title} text={item.text} />
            </Fragment>
          );
        })}
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

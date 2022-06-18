import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import * as S from "./style";
import List from "../../Components/List";

export const ListMap = ({ list, component }) => {
  return (
    <S.Ul>
      {list?.length > 0
        ? list?.map((item, index) => {
            return React.cloneElement(component, {
              key: index,
              data: item,
            });
          })
        : null}
    </S.Ul>
  );
};

const MainPage = () => {
  const [users, setUsers] = useState([]);

  const getUsersApi = async () => {
    const ip = "https://jsonplaceholder.typicode.com";

    try {
      const response = await axios.get(`${ip}/users`);
      if (response.data.length > 0) {
        setUsers(response.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getUsersApi();
  }, []);

  const navigate = useNavigate();
  return (
    <S.Container>
      <div>하이하이</div>
      <ListMap list={users} component={<List />} />
    </S.Container>
  );
};

export default MainPage;

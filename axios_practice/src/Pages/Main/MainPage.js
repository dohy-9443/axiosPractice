import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
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

const queryClient = new QueryClient()

const MainPage = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  
  useEffect(() => {
    getUsersApi();
  }, []);

  const getUsersApi = async () => {
    const ip = "https://jsonplaceholder.typicode.com";

    try {
      // const response = await axios.get(`${ip}/users`);
      fetch(`${ip}/users`)
        .then((res) => res.json())
        .then((data) => { setUsers(data) })
      
    } catch (e) {
      console.error(e);
    }
  };


  const Example = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query')
        .then(res => res.json()
      )
    )

    if ( isLoading ) return <p>Loading..</p>

    if ( error ) return <p>'error: ' + error.message</p>

    console.log("data: ", data)

    return (
      <div>
        <h1>{data.name}</h1>
        <br/>
        <p>{data.description}</p>
        <br/>
        <strong>{data.subscribers_count}</strong>
        <br/>
        <strong>{data.stargazers_count}</strong>
        <br/>
        <strong>{data.forks_count}</strong>
      </div>
    )
  }


  
  return (
    <S.Container>
      <div>하이하이</div>
      <ListMap list={users} component={<List />} />
      <br/>
      <br/>
      <hr/>
      <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider>
    </S.Container>
  );
};

export default MainPage;

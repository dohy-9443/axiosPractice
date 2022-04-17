import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const List = ({data}) => {
  const {username, name, id} = data || {}
  const navigate = useNavigate()
  const [user, setUser] = useState({});

  const getUserApi = async () => {
    const ip = 'https://jsonplaceholder.typicode.com'

    try {
      const response = await axios.get(`${ip}/users/${id}`);
      if (response.data.length > 0) {
        console.log(response.data)
        setUser(response.data);
        
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getUserApi()
  }, [])

  return (
    <li style={{marginBottom: '10px'}} onClick={
      () => {
        
        navigate('/my', {state: user})
      }
    }>
      <p>username : {username}</p>
      <p>name : {name}</p>
    </li>
  );
};

export default List;
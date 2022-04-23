import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const List = ({data}) => {
  const {username, name, id} = data || {}
  const navigate = useNavigate()

  useEffect(() => {
  }, [])

  return (
    <li style={{marginBottom: '10px'}} onClick={
      () => {
        
        navigate('/my', {state: {userName: username, Name: name}})
      }
    }>
      <p>username : {username}</p>
      <p>name : {name}</p>
    </li>
  );
};

export default List;
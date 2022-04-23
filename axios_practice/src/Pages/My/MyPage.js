import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
const MyPage = () => {

  const {state} = useLocation()

  useEffect(() => {
    console.log(state)
  }, [])


  return (
    <div>
      내 username은 {state.userName} 이고 <br />
      내 name은 {state.Name} 입니다.
    </div>
  );
};

export default MyPage;
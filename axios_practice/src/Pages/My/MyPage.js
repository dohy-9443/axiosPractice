import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
const MyPage = () => {

  const {state} = useLocation()

  useEffect(() => {
    console.log(state)
  }, [])


  return (
    <div>
      나는 mypage임
    </div>
  );
};

export default MyPage;
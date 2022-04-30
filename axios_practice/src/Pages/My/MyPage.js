import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
const MyPage = () => {

  const {state} = useLocation()

  const [상태, 상태변경] = useState('초기값');

  useEffect(() => {
    
  }, [])


  return (
    <div>
      내 username은 {state.userName} 이고 <br />
      내 name은 {state.Name} 입니다.
    </div>
  );
};

export default MyPage;
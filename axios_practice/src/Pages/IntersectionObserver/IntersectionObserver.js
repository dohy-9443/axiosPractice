import React, {useState, memo, useEffect, useCallback, useRef} from 'react';
import ReactLoading from 'react-loading';
import Axios from 'axios';
import styled from 'styled-components';

import Item from '../../Components/Item';

export const Loader = () => {
  return (
    <LoaderWrap>
      <ReactLoading type="spin" color='#a593e0' />
    </LoaderWrap>
  )
}

const InfinitiScroll = () => {

  const target = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([1,2,3,4,5,6,7,8,9,0]);

  useEffect(() => {
    console.log(itemLists)
  }, [itemLists])

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    setItemLists((itemLists) => itemLists.concat(Items));
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target  ]);

  return (
    <Wrap>
      {
        itemLists?.map((item, index) => <Item number={index + 1} key={index} />)
      }
      <div className='Target-Element' ref={target}>
        {isLoaded && <Loader />}
      </div>
    </Wrap>
  );
};

export default memo(InfinitiScroll);

const LoaderWrap = styled.div`
  width: 100%; height: 80%;
  display: flex; justify-content: center; align-items: center;
  text-align: center;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  .Target-Element {
    width: 100vw;
    height: 140px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;

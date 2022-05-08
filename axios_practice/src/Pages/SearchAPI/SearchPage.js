import React, { useState, useEffect } from "react";
import Axios from "axios";
import * as S from "./style";

const SearchPage = () => {
  const [textVal, setTextVal] = useState("");
  // const [sendText, setSendText] = useState('');
  const [list, setList] = useState([]);

  // api 세팅
  const KaKaoVideo = Axios.create({
    baseURL: "https://dapi.kakao.com/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `KakaoAK 0770814cfaea442c014e5e1349393f89`,
    },
  });

  // api s
  const GetVideoAPI = async () => {
    try {
      const res = await KaKaoVideo.get(
        `v2/search/vclip?sort=accuracy&size=10&query=${textVal}`
      );
      console.log(res);
      if (res.documents.length > 0) {
        console.log(res.documents);
        setList(res.documents);
      }
    } catch (e) {
      console.error(e);
    }
  };
  // api e

  useEffect(() => {
    GetVideoAPI();
  }, [textVal]);

  return (
    <S.Container>
      <S.Wrap>
        <S.Inner>
          <S.InputBox>
            <S.Input
              type="text"
              placeholder="검색어를 입력 하세요..."
              value={textVal}
              onChange={(e) => setTextVal(e.target.value)}
            />
          </S.InputBox>
        </S.Inner>
      </S.Wrap>
    </S.Container>
  );
};

export default SearchPage;

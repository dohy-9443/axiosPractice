import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import * as S from "./style";

const SearchPage = () => {
  const [textVal, setTextVal] = useState("");
  const [list, setList] = useState([]);

  const apiReq = useRef(false);
  const navigate = useNavigate();

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
        // `v2/search/vclip?sort=accuracy&size=10&query=${textVal}`
        `v2/search/vclip?sort=accuracy&size=10&query=${textVal}`,
        {},
        {}
      );
      if (res?.data.documents.length > 0) {
        setList(res?.data.documents);
      }
    } catch (e) {
      console.error(e);
    }
  };
  // api e

  useEffect(() => {
    apiReq.current = true;
    if (apiReq) {
      GetVideoAPI();
      console.log(list);
      apiReq.current = false;
    }
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
          <S.ListCover>
            <S.Ul>
              {list && list?.length > 0
                ? list?.map((item, index) => {
                    console.log(item);
                    return (
                      <S.Li
                        key={index}
                        onClick={() => window.open(item.url, "_blank")}
                      >
                        <img src={item.thumbnail} alt="" />
                        <S.TitleDIV>
                          <S.Title>{item.title}</S.Title>
                        </S.TitleDIV>
                      </S.Li>
                    );
                  })
                : null}
            </S.Ul>
          </S.ListCover>
        </S.Inner>
      </S.Wrap>
    </S.Container>
  );
};

export default SearchPage;

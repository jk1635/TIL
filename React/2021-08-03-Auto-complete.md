## 자동완성기능 구현

1. 하드 코딩 locationList 만들기 (개발자 도구 sort를 이용해 자동 정렬)
2. SearchList(ul태그), SearchItem(li태그) ,StartPointResult 컴포넌트 만들기
    1. startPoint, setStartPoint로 useState 생성
    2. locationList를 map돌려서 SearchItem으로 띄우기 - StartPointResult에도 값 주기
    - locationList, map사용

        ```jsx
        import React, { useState } from "react";

        function Option04(props) {
          const [startPoint, setStartPoint] = useState("");

          return (
            <>
              <Header page="main" />

              <Container>
              
      (...)
                  
                  <SearchList>
                    {locationList.map((location, idx) => {
                      return (
                        <SearchItem
                          key={idx}
                          onClick={() => {
                            setStartPoint(location);
                          }}
                        >
                          {location}
                        </SearchItem>
                      );
                    })}
                  </SearchList>
                </QuestionBox>
              </Container>
            </>
          );
        }

        const locationList = [
          "서울특별시 강남구",
          "서울특별시 강동구",
          "서울특별시 강북구",
          "서울특별시 강서구",
          "서울특별시 관악구",
          "서울특별시 광진구",
          "서울특별시 금천구",
          "서울특별시 동대문구",
          "서울특별시 동작구",
          "서울특별시 서대문구",
          "서울특별시 서초구",
          "서울특별시 송파구",
          "서울특별시 영등포구",
          "서울특별시 은평구",
          "서울특별시 중구",
        ];

        ```

3. DeleteButton 생성
    1. 버튼 클릭시 삭제(" ") 실행
    2. setStartPoint에 " "를 준다
    - DeleteButton 기능 추가

        ```jsx
        import deleteImg from "../../images/deleteImg.png";

        (...)
                    <StartPointResult>
                      {startPoint}
                      <DeleteButton
                        onClick={() => {
                          setStartPoint("");
                        }}
                      >
                        <img src={deleteImg} alt="deleteImg" />
                      </DeleteButton>
                    </StartPointResult>

        (...)
        ```

4. but, SearchList와 DeleteButton이 남아있다
    1. SearchList
        1. input에 value가 없으면 List 사라져야 한다
        2. input에 value가 있으면 List 나타나야 한다
        3. item 클릭하면 input에서 value가 사라져야 한다

            →  input에  value가 있으면 SearchList, 없으면 null
            → 그리고 item 클릭 시 setSearchvalue(" ")로 input의 value 연동

            - searchValue, setSearchValue로 useState 생성

                ```jsx
                const [searchValue, setSearchValue] = useState("");

                (...)

                        <QuestionBox>
                          <div>
                            <Number>4 / 7</Number>
                            <Question>어디서 출발하시나요?</Question>
                          </div>
                          <SearchBox>
                            <SearchInput
                              placeholder="시/구까지 입력하세요"
                              onChange={(e) => {
                                setSearchValue(e.target.value);
                              }}
                              value={searchValue}
                            ></SearchInput>
                (...)
                          </SearchBox>
                          {searchValue !== "" ? (
                            <SearchList>
                              {locationList.map((location, idx) => {
                                return (
                                  <SearchItem
                                    key={idx}
                                    onClick={() => {
                                      setStartPoint(location);
                                      setSearchValue("");
                                    }}
                                  >
                                    {location}
                                  </SearchItem>
                                );
                              })}
                            </SearchList>
                          ) : null}
                        </QuestionBox>

                ```

    2. DeleteButton은 평상시에 없어야 한다, SearchItem 클릭 시 생성, DeleteButton 누르면 사라져야 한다
        1. startPoint에 값이 있으면 startPoint에 location 저장, input의 searchValue는 " " 로 삭제
        2. startPoint에 값이 없으면 null
        - startPoint, delete

            ```jsx
            import React, { useState } from "react";

            function Option04(props) {
              const [startPoint, setStartPoint] = useState("");
              const [searchValue, setSearchValue] = useState("");

              return (
                <>
                  <Header page="main" />

                  <Container>
                    <QuestionBox>
                (...)
                        <SearchButton>
                          <img src={search} alt="" width="25px" />
                        </SearchButton>
                        {startPoint !== "" ? (
                          <StartPointResult>
                            {startPoint}
                            <DeleteButton
                              onClick={() => {
                                setStartPoint("");
                              }}
                            >
                              <img src={deleteImg} alt="deleteImg" />
                            </DeleteButton>
                          </StartPointResult>
                        ) : null}
                      </SearchBox>
                (...)
                    </QuestionBox>
                  </Container>
                </>
              );
            }
            ```

5. 자동 완성 기능
    1. 문자 input 입력 음절 일치하면 거르기
        1. String 내장함수 includes와 Array 내장함수 filter를 사용
        2. locationList안에 포함된 음절이면 filter 후 배열을 생성한다
        3. 새로운 배열 생성 (locationList는 string, filter는 배열)
        - 자동 완성 기능

            ```jsx
            const [filteredList, setFilteredList] = useState([]);

            (...)

            						<SearchInput
                          placeholder="시/구까지 입력하세요"
                          onChange={(e) => {
                            setSearchValue(e.target.value);
                            const filtered = locationList.filter((location) => {
                              return location.includes(e.target.value);
                            });
                            setFilteredList(filtered);
                          }}
                          value={searchValue}
                        ></SearchInput>

            (...)

            				{searchValue !== "" ? (
                        <SearchList>
                          {filteredList.map((location, idx) => {
                            return (
                              <SearchItem
                                key={idx}
                                onClick={() => {
                                  setStartPoint(location);
                                  setSearchValue("");
                                }}
                              >
                                {location}
                              </SearchItem>
                            );
                          })}
                        </SearchList>
                      ) : null}
            (...)
            ```

     
6. 기능 완성본
- Option04.js

    ```jsx
    import React, { useState } from "react";
    import styled from "styled-components";

    import left_arrow from "../../images/left_arrow.png";
    import right_arrow from "../../images/right_arrow.png";
    import search from "../../images/search.png";
    import deleteImg from "../../images/deleteImg.png";

    // shared
    import Header from "../../shared/Header";

    function Option04(props) {
      const [startPoint, setStartPoint] = useState("");
      const [searchValue, setSearchValue] = useState("");
      const [filteredList, setFilteredList] = useState([]);

      return (
        <>
          <Header page="main" />
          <Container>
            <QuestionBox>
              <div>
                <Number>4 / 7</Number>
                <Question>어디서 출발하시나요?</Question>
              </div>
              <SearchBox>
                <SearchInput
                  placeholder="시/구까지 입력하세요"
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    const filtered = locationList.filter((location) => {
                      return location.includes(e.target.value);
                    });
                    setFilteredList(filtered);
                  }}
                  value={searchValue}
                ></SearchInput>
                <SearchButton>
                  <img src={search} alt="" width="25px" />
                </SearchButton>
                {startPoint !== "" ? (
                  <StartPointResult>
                    {startPoint}
                    <DeleteButton
                      onClick={() => {
                        setStartPoint("");
                      }}
                    >
                      <img src={deleteImg} alt="deleteImg" />
                    </DeleteButton>
                  </StartPointResult>
                ) : null}
              </SearchBox>
              {searchValue !== "" ? (
                <SearchList>
                  {filteredList.map((location, idx) => {
                    return (
                      <SearchItem
                        key={idx}
                        onClick={() => {
                          setStartPoint(location);
                          setSearchValue("");
                        }}
                      >
                        {location}
                      </SearchItem>
                    );
                  })}
                </SearchList>
              ) : null}
            </QuestionBox>

            <PageMoveBox>
              <ButtonWrap>
                <PastButton
                  onClick={() => {
                    props.history.push("/Option03");
                  }}
                >
                  <img src={left_arrow} alt="" width="25px" />
                </PastButton>
                <NextButton
                  onClick={() => {
                    props.history.push("/Option05");
                  }}
                >
                  <Text>
                    다음으로
                    <img
                      src={right_arrow}
                      alt=""
                      width="25px"
                      style={{ margin: "0 0 -4px 13px" }}
                    />
                  </Text>
                </NextButton>
              </ButtonWrap>
            </PageMoveBox>
          </Container>
        </>
      );
    }

    const locationList = [
      "서울특별시 강남구",
      "서울특별시 강동구",
      "서울특별시 강북구",
      "서울특별시 강서구",
      "서울특별시 관악구",
      "서울특별시 광진구",
      "서울특별시 금천구",
      "서울특별시 동대문구",
      "서울특별시 동작구",
      "서울특별시 서대문구",
      "서울특별시 서초구",
      "서울특별시 송파구",
      "서울특별시 영등포구",
      "서울특별시 은평구",
      "서울특별시 중구",
    ];

    ```

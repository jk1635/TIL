# Convert A List of Strings to Ints (LocationCode)

## 지역 이름 묶어서 숫자코드로 변환

1. 데이터 저장
    - LocationList sort

        ```jsx
        //LocationList.js

        const LocationList = [
          "서울특별시 금천구",
          "부산광역시 수영구",
          "울산광역시 울주군",
          "전라남도 순천시",
          "충청북도 단양군",
          "제주특별자치도 한경면",
          "세종특별자치시",
          "경상남도 의령군",
          "경기도 오산시",
          "강원도 강릉시",
        ];

        // 오름차순 정렬 과정

        const SortList = [
          "서울특별시 금천구",
          "부산광역시 수영구",
          "울산광역시 울주군",
          "전라남도 순천시",
          "충청북도 단양군",
          "제주특별자치도 한경면",
          "세종특별자치시",
          "경상남도 의령군",
          "경기도 오산시",
          "강원도 강릉시",
        ];

        //undefined

        SortList.sort()

        // [
        //   "강원도 강릉시",
        //   "경기도 오산시",
        //   "경상남도 의령군",
        //   "부산광역시 수영구",
        //   "서울특별시 금천구",
        //   "세종특별자치시",
        //   "울산광역시 울주군",
        //   "전라남도 순천시",
        //   "제주특별자치도 한경면",
        //   "충청북도 단양군",
        // ];
        ```

2. 지역을 번호로 바꾸기
    1. key, value 설정 (key는 숫자가 올 수 없기 때문에 지역을 key로, 코드를 value로 지정)
        - LocationList.js

            ```jsx
            //LocationList.js
            // 현재 LoactionList에 있는 데이터는 객체이다.

            const LocationList = [
              "강원도 강릉시",
              "경기도 오산시",
              "경상남도 의령군",
              "부산광역시 수영구",
              "서울특별시 금천구",
              "세종특별자치시",
              "울산광역시 울주군",
              "전라남도 순천시",
              "제주특별자치도 한경면",
              "충청북도 단양군",
            ];

            // export는 { }해서 가져와야한다
            export const LocationCodeData = {
              서울: 1,
              인천: 2,
              대전: 3,
              대구: 4,
              광주: 5,
              부산: 6,
              울산: 7,
              세종: 8,
              경기: 31,
              강원: 32,
              충청북도: 33,
              충청남도: 34,
              경상북도: 35,
              경상남도: 36,
              전라북도: 37,
              전라남도: 38,
              제주자치도: 39,
            };

            // export default는 그냥 가져와도 된다
            export default LocationList;
            ```

    2. 반복문 (for A in B), if문, includes 사용 
        1. for A in B 사용한다 ([링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in))
            - 객체 반복은 for X
            - A에 지역 이름
            - B는 반복되는 대상 (즉, 더 큰 범위)
            - 삼항 연산자는 true일 경우 false일 경우가 꼭 들어가야 한다
        2. 따라서 여기에선 if문을 사용
            - if문이 true일 경우 반복 break
            - for (const locationcode in LocationCodeData)의 결과물은 True or False이다.

            ```jsx
            onClick = {() => {
            	for (const locationcode in LocationCodeData) {
            		if (location.includes(locationcode)) {
            			dispatch(setAreaCode(LocationCodeData[locationcode]));
            				break;
            			};
            		};
            	};
            };
            ```

        3. String.includes
            - String.includes를 사용하여 지역 이름 포함되어 있는 부분 확인
                - includes 예시 ([링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/includes))

                    ```jsx
                    var str = 'To be, or not to be, that is the question.';

                    console.log(str.includes('To be'));       // true
                    console.log(str.includes('question'));    // true
                    console.log(str.includes('nonexistent')); // false
                    console.log(str.includes('To be', 1));    // false
                    console.log(str.includes('TO BE'));       // false
                    ```

            - console.log(LocationCodeData[locationcode])가 반환하는 값은 지역코드
            - console.log(LocationCodeData.locationcode) 다음과 같이 하면 에러 발생(한글은 받지 않는 게 아닌가 싶다)
            - Option04.js

                ```jsx
                // Option04.js
                import React, { useState } from "react";
                import { useDispatch } from "react-redux";

                (...)
                          <SearchList>
                            {searchValue !== ""
                              ? filteredList.map((location, idx) => {
                                  return (
                                    <SearchItem
                                      key={idx}
                                      onClick={() => {
                                        setStartPoint(location);
                                        for (const locationcode in LocationCodeData) {
                                          if (location.includes(locationcode)) {
                                            // console.log(LocationCodeData[locationcode]);
                                            dispatch(
                                              setAreaCode(LocationCodeData[locationcode])
                                            );
                                            break;
                                          }
                                        }
                                        setSearchValue("");
                                      }}
                                    >
                                      {location}
                                    </SearchItem>
                                  );
                                })
                              : null}
                          </SearchList>

                (...)
                ```

3. 번호를 리덕스 State에 추가
    1. redux-persist를 사용하여 리덕스, localStroage에 저장
    - modules/option.js, configureStore.js

        ```jsx
        // ../redux/modules/option.js

        import { createAction, handleActions } from "redux-actions";

        const AREA_CODE = "option/AREA_CODE";

        const setAreaCode = createAction(AREA_CODE, (areaCode) => ({ areaCode }));

        const optionState = {
          areaCode: "",
        };

        const option = handleActions(
          {
            [AREA_CODE]: (state, action) => {
              return { ...state, areaCode: action.payload.areaCode };
            },
          },
          optionState
        );

        export {
          setAreaCode,
        };

        export default option;
        ```

        ```jsx
        // ../redux/configureStore.js

        import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
        import { combineReducers } from "redux";
        import { connectRouter } from "connected-react-router";

        import { createBrowserHistory } from "history";

        import { persistReducer } from "redux-persist";
        import storage from "redux-persist/lib/storage";

        // reducer
        import detailSlice from "./modules/detailSlice";
        import option from "./modules/option";

        export const history = createBrowserHistory();

        const rootReducer = combineReducers({
          detail: detailSlice.reducer,
          option: option,
          router: connectRouter(history),
        });

        const persistConfig = {
          key: "root",
          storage,
        };

        const persistedReducer = persistReducer(persistConfig, rootReducer);

        const middlewares = [];

        const env = process.env.NODE_ENV;

        if (env === "development") {
          const { logger } = require("redux-logger");
          middlewares.push(logger);
        }

        export const store = configureStore({
          reducer: persistedReducer,
          middleware: [...middlewares, ...getDefaultMiddleware()],
          devTools: env !== "production",
        });
        ```

# Handling Input Events with Higher Order Function

## Issue

- 기본 검색과 상세 검색을 위해 두 개의 input을 사용하는 경우, 두 input 이벤트를 하나로 처리하는 방법을 찾아본다.

```tsx
const handleKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
    setDetailKeyword('');
    setSelectedOption('title');
};

const handleDetailKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setDetailKeyword(event.target.value);
    setKeyword('');
};

<BasicSearchInput
    placeholder="검색어를 입력하세요"
    value={keyword}
    onChange={handleKeyword}
    onKeyDown={onKeyDown}
/>

<DetailSearchInput
    placeholder="상세 검색어를 입력하세요"
    value={detailKeyword}
    onChange={handleDetailKeyword}
    onKeyDown={onKeyDown}
/>
```

- 검색 유형 입력 처리 로직을 각각 분리하면, 명확성은 높아지지만, 유사한 작업을 중복해서 수행하게 된다.

## Solution

- 고차 함수란 함수를 매개변수로 사용하거나 함수를 반환하는 함수를 말한다. 이를 사용하면 반복되는 로직을 쉽게 재사용할 수 있다.
- 고차 함수를 활용하면, 다음과 같이 기본 검색과 상세 검색을 하나의 함수로 통합할 수 있다.

```tsx
const handleInputChange = (isDetail = false) => (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParams(prevParams => ({
        ...prevParams,
        keyword: isDetail ? '' : event.target.value,
        detailKeyword: isDetail ? event.target.value : '',
        selectedOption: isDetail ? prevParams.selectedOption : 'title',
    }));
};

<BasicSearch 
    handleKeyword={handleInputChange(false)}
    handleKeyDown={handleKeyDown}
/>

<DetailSearch
    handleDetailKeyword={handleInputChange(true)}
    handleKeyDown={handleKeyDown}
/>
```

- handleInputChange는 고차 함수로서, 첫 번째 호출에서 기본 검색과 상세 검색을 구분하기 위해 isDetail 매개 변수를 사용한다.
- 반환된 함수는 입력 이벤트(ChangeEvent<HTMLInputElement>)를 처리하여, 하나의 함수로 두 가지 케이스를 유연하게 관리할 수 있다.
- 결과적으로, 로직을 변경하거나 확장할 필요가 있을 때 수정해야 할 코드의 양이 줄어들며, 유지보수성과 확장성을 높일 수 있다.


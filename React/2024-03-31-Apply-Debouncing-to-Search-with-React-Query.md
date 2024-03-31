# Apply Debouncing to Search with React Query

## Issue

- 검색어가 변경될 때마다 검색 요청을 보내면, 429 Too Many Requests 에러가 발생할 수 있다.
- 이는 사용자 경험을 저하시키고, 서버에 부하를 주게 된다.

## Solution

> 디바운싱: 연이어 호출되는 함수들 중 마지막 함수(또는 제일 처음)만 호출하도록 하는 것

- 위의 문제를 해결하기 위해 검색어 입력이 완료된 후 일정 시간이 지난 다음에 검색 요청을 보내는 디바운싱을 적용하고자 한다.
- 검색어 입력이 완료된 후에 검색어를 업데이트하는 useDebounce 커스텀 훅을 작성하였다.
- 검색 요청은 React-Query를 사용하여 처리하였고, 검색 결과는 화면에 렌더링되도록 구현하였다.

```tsx
import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import apiClient from '@libs/apiClient'
import { SearchList } from '@types'

// 디바운싱
const useDebounce = (value: string, delay: number): string => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value])

    return debounceValue
}

// React-Query를 사용한 검색 요청
const useSearch = (searchKeyword: string) => {
    const query = useQuery({
        queryKey: ['search', searchKeyword],
        queryFn: () => apiClient.get<SearchList[]>(`search`, { placeName: searchKeyword }),
        enabled: !!searchKeyword,
    })

    return { ...query }
}

// 검색 및 결과 화면
const SearchPage = () => {
    const [keyword, setKeyword] = useState('')
    const debounceKeyword = useDebounce(keyword, 500)
    const { data: searchResult } = useSearch(debounceKeyword)

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value)
    }

    return (
        <div>
            <div>
                <span className='material-symbols-outlined'>search</span>
                <input placeholder='검색어를 입력하세요.' value={keyword} onChange={handleSearch} />
            </div>
            <table>
                <tbody>
                {searchResult &&
                    searchResult.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>{row.name}</td>
                            <td>{row.phone}</td>
                            <td>{row.address}</td>
                            <td>{row.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SearchPage
```

참고 : [cagatayunal](https://dev.to/cagatayunal/usedebounce-hook-gaf), [zero](https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa)


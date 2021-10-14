## export default vs export

### export default

해당 모듈에 개체가 하나만 있다

```jsx
// export default는 import 함수명 from './Article'로 사용

// App.js
import Article from './components/Article';

// components/Article.js
export default function Article()
  return (
    <article>
      <h2>Hello</h2>
    </article>
  );
}
```

### export

```jsx
// export는 import { 함수명 } from './Article'로 사용

// App.js
import { Article } from './components/Article';

// components/Article.js
export function Article()
  return (
    <article>
      <h2>Hello</h2>
    </article>
  );
}
```
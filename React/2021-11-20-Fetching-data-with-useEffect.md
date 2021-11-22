# Fetching data with useEffect

## Data 가져오기

```jsx
// App.js
import React from "react";
import DataFetchting from "./DataFetchting";

function App() {
  return (
    <div>
      <DataFetchting />
    </div>
  );
}

export default App;
```

```jsx
// DataFetching.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetchting = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log(res); // console.log에 나타난다.
        setPosts(res.data); // 화면에 나타난다.
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchting;
```

## Input에 id 입력시 화면에 Data 출력

```jsx
// DataFetching.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetchting = () => {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log(res); // console.log에 나타난다.
        setPosts(res.data); // 화면에 나타난다.
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <div>{posts.title}</div>
      {/* <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default DataFetchting;
```

## Button click시 화면에 Data 출력

```jsx
// DataFetching.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetchting = () => {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then(res => {
        console.log(res); // console.log에 나타난다.
        setPosts(res.data); // 화면에 나타난다.
      })
      .catch(err => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{posts.title}</div>
      {/* <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default DataFetchting;
```

참고 : useEffect Fetching Data [I](https://youtu.be/bYFYF2GnMy8),[II](https://youtu.be/1tfd6ANaNRY),[III](https://youtu.be/zm_09NER-R0)

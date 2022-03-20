# Create copy url button

### CopyURL.js

```jsx
import React from "react";

const LinkCopy = text => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard.");
      })
      .catch(() => {
        alert("Copy to clipboard failed.");
      });
  }
};

const CopyURL = () => {
  return (
    <>
      <button onClick={() => LinkCopy(window.location.href)}>
        Copy URL Button
      </button>
    </>
  );
};

export default CopyURL;
```

### App.js

```jsx
import React from "react";
import CopyURL from "./CopyURL";

function App() {
  return (
    <div>
      <CopyURL />
    </div>
  );
}

export default App;
```

참고: [CopyURL](https://kyounghwan01.github.io/blog/React/clipboard-copy/#%E1%84%8B%E1%85%A8%E1%84%89%E1%85%B5-%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3)

# Progress Bar component using React and Styled-Components

## ProgressBar

1. It should show the progress
2. Show the percentage of completion in text
3. Color, width

```jsx
// App.js

import React, { useState, useEffect } from "react";
import ProgressBar from "./Progress";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(oldValue => {
        const newValue = oldValue + 10;

        if (newValue === 100) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 1000);
  }, []);
  return <ProgressBar color={"red"} width={"300px"} value={40} max={100} />;
}

export default App;
```

```jsx
// Progress.js

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProgressBar = ({ value, max, color, width }) => {
  return (
    <Container color={color} width={width}>
      <progress value={value} max={max} />
      <span>{(value / max) * 100}%</span>
    </Container>
  );
};

const Container = styled.div`
  progress {
    margin-right: 8px;
  }
  progress[value] {
    width: ${props => props.width};
    -webkit-appearance: none;
    appearance: none;
  }
  progress[value]::-webkit-progress-bar {
    height: 10px;
    border-radius: 20px;
    background-color: #eee;
  }

  progress[value]::-webkit-progress-value {
    height: 10px;
    border-radius: 20px;
    background-color: ${props => props.color};
  }
`;

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
};

ProgressBar.defaultProps = {
  max: 100,
  color: "lightBlue",
  width: "250px",
};

export default ProgressBar;
```

See [here](https://youtu.be/3sH_Kq9e5hQ) for more details.

# Change button color onClick

## 버튼 클릭시 색상 변경

### 1. CSS

```jsx
import React, { useState } from "react";
import styled, { css } from "styled-components";

function App() {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div className='App'>
      <h2>What's your mood today?</h2>
      <div>
        {["Happy", "Sad", "Hungry", "Bored"].map(item => (
          <Button
            selected={selectedValue === item}
            key={item}
            onClick={() => setSelectedValue(item)}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
}

const Button = styled.button`
  width: 56px;
  height: 56px;
  position: relative;
  border: 2px solid #000000;
  border-radius: 50%;
  margin-right: 4px;
  color: #000000;
  background-color: #ffffff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      background-color: #000000;
      color: #ffffff;
    `}
`;

Button.defaultProps = {
  type: "button",
};

export default App;
```

### 2. Radio

```jsx
import React from "react";
import styled from "styled-components";

function App() {
  return (
    <div className='App'>
      <h2>What's your mood today?</h2>
      <div>
        {["Happy", "Sad", "Hungry", "Bored"].map(item => (
          <Radio key={item}>
            <input type='radio' name='feeling' value={item} />
            <span>{item}</span>
          </Radio>
        ))}
      </div>
    </div>
  );
}

const Radio = styled.label`
  width: auto;
  height: auto;
  position: relative;
  display: inline-block;

  & > span {
    display: inline-block;
    width: 56px;
    height: 56px;
    line-height: 56px;
    text-align: center;
    position: relative;
    border: 2px solid #000000;
    border-radius: 50%;
    margin-right: 4px;
    color: #000000;
    background-color: #ffffff;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  & > input {
    width: 0%;
    height: 0%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }

  & > input:checked + span {
    background-color: #000000;
    color: #ffffff;
  }
`;

export default App;
```

## Fade-in / Fade-out

```javascript
// MainTitle.js
import React from "react";
import styled from "styled-components";
import "../components/MainTitle.css";
import Fader from "../components/Fader";

const MainTitle = (props) => {
  return (
    <div>
      <Container>
        <Title>
          <Fader text="안녕"></Fader>
        </Title>
      </Container>
    </div>
  );
};

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const Title = styled.div`
  color: ${(props) => props.theme.white};
  font-size: 3.4rem;
  font-weight: 700;
  text-align: center;
`;

export default MainTitle;
```

```css
/* MainTitle.css */

.fade-in {
  transition: opacity 1s ease;
}

.fade-out {
  opacity: 0;
  transition: opacity 1s ease;
}
```

```javascript
// Fader.js

import React, { useState, useEffect } from "react";
// import React from "react";
import PropTypes from "prop-types";
import "../components/MainTitle.css";

const Fader = ({ text }) => {
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-in",
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "fade-in") {
        setFadeProp({
          fade: "fade-out",
        });
      } else {
        setFadeProp({
          fade: "fade-in",
        });
      }
    }, 1000);
    return () => {};
    // return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <>
      <p className={fadeProp.fade}>{text}</p>
    </>
  );
};

Fader.defaultProps = {
  text: "Hi",
};

Fader.propTypes = {
  text: PropTypes.string,
};

export default Fader;
```

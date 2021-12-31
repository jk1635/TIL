# Simple scroll bar

```css
const Scroll = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    /* vertical scroll */
    width: 8px;
    /* horizontal scroll */
    height: 8px;
    border-radius: 6px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.3)
    border-radius: 6px;
  }
```

See [here](https://codesandbox.io/s/jacob-always-scroll-section-0cyel?file=/src/components/scroll/AlwaysScrollSection/AlwaysScrollSection.tsx:240-579) for more details.

# How to use the position property in CSS

내가 만든 영역을 2차원으로 할지 3차원으로 할지 결정짓는 CSS 속성 <br>
속성값으로는 `static` `relative` `fixed` `absolute`가 있다 <br>

### 각 속성값을 기준으로 2차원과 3차원을 구분짓는 요소

- 부모 자식 지간에 발생하는 마진 병합 현상 유무 - 2차원
- top, left, right, bottom - 3차원
- 자식의 높이값이 부모의 높이값에 영향을 주는지 유무 - 2차원
  - 부모가 높이값을 갖고 있지 않았을 때, 자식의 높이값이 부모에게 영향을 미친다.

## static (2차원)

- 부모 자식 지간에 발생하는 마진 병합 현상 유무 (O)
- top, left, right, bottom (X)
- 자식의 높이값이 부모의 높이값에 영향을 주는지 유무 (O)

## relative (2차원 & 3차원)

- 부모 자식 지간에 발생하는 마진 병합 현상 유무 (O)
- top, left, right, bottom (O)
- 자식의 높이값이 부모의 높이값에 영향을 주는지 유무 (O)

## fixed (3차원)

- 부모 자식 지간에 발생하는 마진 병합 현상 유무 (X)
- top, left, right, bottom (O)
- 자식의 높이값이 부모의 높이값에 영향을 주는지 유무 (X)

## absolute (3차원)

- 부모 자식 지간에 발생하는 마진 병합 현상 유무 (X)
- top, left, right, bottom (O)
- 자식의 높이값이 부모의 높이값에 영향을 주는지 유무 (X)

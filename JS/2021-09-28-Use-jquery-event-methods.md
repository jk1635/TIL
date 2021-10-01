# jQuery Event Methods

## 1. jQuery Selectors

-   타입, 아이디, 클래스 등으로 HTML 엘리먼트를 찾거나(선택하기 위해) 사용
-   CSS Selector와 동일

```javascript
// The element Selector
$("p");
// The #id Selector
$("#test");
// The .class Selector
$(".test");
```

-   선택자 예시

```javascript
$(function () {
    $("h1").css("background-color", "blue");
    $("#background-blue").css("background-color", "yellow");
    $(".background-red").css("background-color", "green");
});
```

## 2. jQuery Actions

```html
<body>
    <h1 id="mouse-event" style="background-color: blue">Apple</h1>
</body>
```

### mouse hover

```javascript
// mouse 올리면 red, 떼면 blue
// jQuery의 this

$("#mouse-event").hover(
    function () {
        $(this).css("background-color", "red");
    },
    function () {
        $(this).css("background-color", "blue");
    }
);
```

### mouse enter, leave, click

```javascript
// mouse 올리면 yellow, 떼면 pink, 클릭하면 gray

$("h1").mouseenter(function () {
    $("h1").css("background-color", "yellow");
});
$("h1").mouseleave(function () {
    $("h1").css("background-color", "pink");
});
$("h1").click(function () {
    $("h1").css("background-color", "gray");
});
```

## 3. jQuery Effects

### hide, show, toggle

```html
<body>
    <h1>Banana</h1>

    <button id="hide">hide</button>
    <button id="show">show</button>
    <button id="toggle">toggle</button>
</body>
```

```javascript
// 1.
$("#hide").click(function () {
    $("h1").hide();
});

$("#show").click(function () {
    $("h1").show();
});

// hide와 show 두 기능을 전부 가지고 있는 형태
$("#toggle").click(function () {
    $("h1").toggle();
});
```

```javascript
// 2.
function disappear() {
    $("h1").css("display", "none");
}

function appear() {
    $("h1").css("display", "block");
}

$("#hide").click(disappear);
$("#show").click(appear);
```

### addEventListener 사용

```javascript
const text = document.querySelectorAll("h1");
const hideBtn = document.getElementById("hide");
const showBtn = document.getElementById("show");

function disappear() {
    text[0].style.display = "none";
}

function appear() {
    text[0].style.display = "block";
}

hideBtn.addEventListener("click", disappear);
showBtn.addEventListener("click", appear);
```

## 4. jQuery Classes

```html
<body>
    <h1>blue Heading</h1>
    <h2>This is some important text!</h2>
    <br />

    <div id="div1">This is some important blue text.</div>

    <button>Add classes to elements</button>
    <button id="btn2">remove</button>
    <button id="btn3">toggle</button>
</body>
```

```css
.important {
    font-weight: bold;
    font-size: xx-large;
}

.blue {
    color: blue;
}

.red {
    color: red;
}
```

```javascript
$("button").click(function () {
    $("h1").addClass("blue");
    $("h2").addClass("important");
});

$("#btn2").click(function () {
    $("h1").removeClass("blue");
    $("h2").removeClass("important");
});

$("#btn3").click(function () {
    $("h1").removeClass("blue");
    $("h1").toggleClass("red");
    $("h2").toggleClass("important");
});
```

```html
<body>
    <i class="icon"></i>
    <i class="icon"></i>
    <i class="icon"></i>
</body>
```

```css
.icon {
    display: block;
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
}

.on {
    background-color: yellow;
}
```

```javascript
// 1.
let $icon = $(".icon");

$icon.click(function () {
    if ($icon.hasClass("on")) {
        $icon.removeClass("on");
    }
    $(this).addClass("on");
});
```

```javascript
// 2.
let $icon = $(".icon");

$icon.click(function () {
    $(this).addClass("on");
    $(this).siblings().removeClass("on");
});
```

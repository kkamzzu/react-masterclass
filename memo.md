# Start styled component
```js
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;
const Text = styled.h1`
color: white;
`;

// 구현

function App() {
  return (
    <Father>
      <BoxOne>
        <Text>hello!</Text>
      </BoxOne>
      <BoxTwo />
    </Father>
  ) 
}

export default App;
```

# Using props 
- props 사용하여 불필요한 코드 줄이기
- props를 통해 컴포넌트를 설정하는 법, prop이름을 전달해서 함수 내에서 해당 prop 이름을 받기

```js
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// Box에 있는 속성을 다 가져온 후 'border-radius'를 추가 -> 코드 깔끔
const Circle = styled(Box)`
  border-radius: 50px;
`

// 구현

function App() {
  return (
    <Father>
          {/* props */}
      <Box bgColor="teal" ></Box>
      <Circle bgColor="tomato" ></Circle>
    </Father>
  ) 
}

export default App;
```

# AS
```js
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
// html tag 사용하기 시러 -> as
const Btn = styled.button`
  color: #fff;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`

function App() {
  return (
    <Father as="header">
          {/* props */}
          <Btn>Log in</Btn>
          <Btn as="a" href="/">Log in</Btn>

    </Father>
  ) 
}

export default App;
```

# Attrs

```js
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
// styled components를 이용한 트릭
                            //input으로 전달될 모든 속성을 가진 오브젝트를 담을 수 있음
                            //하나씩 다 적지 않아도 돼서 편리함.
const Input = styled.input.attrs({require:true, minLength:10})`
  background-color:tomato`;


function App() {
  return (
    <Father as="header">
          {/* props */}
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
    </Father>
  ) 
}

export default App;
```

# animaion 

```js
import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
`
const roattionAnimation = keyframes`
 from {
    transform: rotate(0deg);
    border-radius: 0px;
 }
 to {
    transform: rotate(360deg);
    border-radius: 100px;
 }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${roattionAnimation} 3s linear infinite;
`

function App() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  ) 
}

export default App;
```

# Animations and Pseudo Selectors 

```js
import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
`
const roattionAnimation = keyframes`
 0% {
    transform: rotate(0deg);
    border-radius: 0px;
 }
 50% {
    transform: rotate(360deg);
    border-radius: 100px;
 }
 100% {
    transform: rotate(0deg);
    border-radius: 0px;
 }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${roattionAnimation} 3s linear infinite;
  /* 다른 것들도 component styles안에 넣을 수 있음. */
  /* 꼭 모든 component에 styled component를 처리 할 필요는 없음 */
  span {
    font-size: 36px;
    /* span안에 hover */
    &:hover {
      font-size: 80px;
    }
    &:active {
      opacity: 0;
    }
  }
`

function App() {
  return (
    <Wrapper>
      <Box>
        <span>🥑</span>
      </Box>
    </Wrapper>
  ) 
}

export default App;
```

# Pseudo Selectors part Two
```js
import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw ;
  justify-content: center;
  align-items: center;
`
const roattionAnimation = keyframes`
 0% {
    transform: rotate(0deg);
    border-radius: 0px;
 }
 50% {
    transform: rotate(360deg);
    border-radius: 100px;
 }
 100% {
    transform: rotate(0deg);
    border-radius: 0px;
 }
`;
const Emoji = styled.span`
  font-size: 36px;
  `
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${roattionAnimation} 3s linear infinite;
  ${Emoji} :hover {
      font-size: 98px;
    }
`;

function App() {
  return  (
    <Wrapper>
      <Box>
        <Emoji as="p">🥑</Emoji>
      </Box>
      {/* 박스 바깥이라 아무일도 일어나지 않음 */}
      <Emoji as="p">❤️</Emoji>
    </Wrapper>
  ) 
}

export default App;
```

# Themes

<!-- dark/ light mode를 가지고 싶다면 property 들의 이름이 똑같아야함. -->

<!-- App.js -->
```js
import styled from "styled-components";
// Theme: 모든 색깔을 하나의 object 안에 넣어놓음

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw ;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`


function App() {
  return  (
    <Wrapper>
        <Title>Hello</Title>
    </Wrapper>
  ) 
}

export default App;
```

<!-- index.js -->
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';

const darkTheme = {
  textColor:"whitesmoke",
  backgroundColor:"#111"
}

const lightTheme = {
  textColor:"#111",
  backgroundColor:"#whitesomke"
}

ReactDOM.render (
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

# TypeScript

- javascript를 기반으로 한 프로그래밍 언어.
- stongly-typed 언어 : 프로그래밍 언어가 작동하기 전에 `type` 을 확인한다는 것.
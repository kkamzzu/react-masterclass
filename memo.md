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
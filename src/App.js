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
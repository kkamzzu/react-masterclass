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
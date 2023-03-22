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
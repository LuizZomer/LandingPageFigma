import styled from "styled-components"
import Header from "./components/Header"
import Sobre from "./components/Sobre"
import Info from "./components/Info"
import Pricing from "./components/Pricing"

function App() {

  return (
    <AppStyled>
      <Header />
      <Sobre />
      <InfoCenter>
        <Info />
      </InfoCenter>
      <Pricing />
    </AppStyled>
  )
}

const AppStyled = styled.div`
  width: 85%;
  margin: 0 auto;
`

const InfoCenter = styled.div`
  display: flex;
  justify-content: center;
`

export default App

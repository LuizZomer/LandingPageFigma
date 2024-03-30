import styled from "styled-components"
import Header from "./components/Header"
import Sobre from "./components/Sobre"
import Info from "./components/Info"
import Pricing from "./components/Pricing"
import Plan from "./components/Plan"
import Map from "./components/Map"
import Footer from "./components/Footer"
import Subscribe from "./components/Subscribe"

function App() {

  return (
    <AppStyled>
      <Header />
      <Sobre />
      <InfoCenter>
        <Info />
      </InfoCenter>
      <Pricing />
      <Plan />
      <Map />
      <Subscribe />
      <Footer />
    </AppStyled>
  )
}

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InfoCenter = styled.div`
  display: flex;
  justify-content: center;
`

export default App

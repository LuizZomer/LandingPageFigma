import { MapImg, MapStyled, SponsorsImg } from "./style"
import globalImg from './assets/global.svg'
import sponsor from './assets/patrocinadores.svg'

const Map = () => {
  return (
    <MapStyled>
        <h2>Huge Global Network of Fast VPN</h2>
        <p>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
        <MapImg src={globalImg} alt="Global map" />
        <SponsorsImg src={sponsor} alt="Patrocinadores" />
    </MapStyled>
  )
}

export default Map
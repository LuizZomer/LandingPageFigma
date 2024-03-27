import { InfoStyled, SingleStyled } from "./style"
import UserImg from './assets/user.svg'
import ServerImg from './assets/Server.svg'
import Location from './assets/location.svg'

const Info = () => {
  return (
    <InfoStyled>
        <SingleStyled>
            <img src={UserImg} alt="Foto usuario" />
            <div>
                <span className="numInfo">90+</span>
                <span>Users</span>
            </div>
        </SingleStyled>
        <SingleStyled>
            <img src={Location} alt="Foto localização" />
            <div>
                <span className="numInfo">30+</span>
                <span>Localização</span>
            </div>
        </SingleStyled>
        <SingleStyled>
            <img src={ServerImg} alt="Foto servidor         " />
            <div>
                <span className="numInfo">50+</span>
                <span>Servers</span>
            </div>
        </SingleStyled>
    </InfoStyled>
  )
}

export default Info
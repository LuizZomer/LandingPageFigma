import { BtnGetStarted } from "../Buttons/Buttons.styles"
import { SubscribeStyled } from "./style"

const Subscribe = () => {
  return (
    <SubscribeStyled>
        <div id="content">
          <span className="title">Subscribe Now for</span>
          <span className="title"> Get Special Features! </span>
          <p>Let's subscribe with us and find the fun.</p>
        </div>
        <div id="bottom">
            <BtnGetStarted>Subscrive Now</BtnGetStarted>
        </div>
    </SubscribeStyled>
  )
}

export default Subscribe
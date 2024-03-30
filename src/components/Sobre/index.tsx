import { BtnGetStarted } from "../Buttons/Buttons.styles"
import { ContentContainer, ImageContainer, SobreStyled } from "./style"
import SobreImg from '/sobre.svg'

const Sobre = () => {
    return (
        <SobreStyled>
            <ContentContainer>
                <span>Want anything to be</span> <span>easy with <span style={{fontWeight:"bold"}}>LaslesVPN.</span></span>
                <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                <div style={{marginTop:50}}>
                    <BtnGetStarted>Get Started</BtnGetStarted>

                </div>
            </ContentContainer>
            <ImageContainer>
                <img src={SobreImg} alt="" />
            </ImageContainer>
        </SobreStyled>
    )
}

export default Sobre
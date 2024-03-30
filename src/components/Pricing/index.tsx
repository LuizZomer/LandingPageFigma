import { ContentStyled, ImageContainer, ListStyled, PricingStyled } from "./style"
import LogoPricing from '/pricing.svg'

const Pricing = () => {
  return (
    <PricingStyled>
      <ImageContainer>
        <img src={LogoPricing} alt="Ilustração" />
      </ImageContainer>
      <ContentStyled>
        <span>We Provide Many </span>
        <span>Features You Can Use</span>
        <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
        <ListStyled>
          <li>Powerfull online protection.</li>
          <li>Internet without borders.</li>
          <li>Supercharged VPN</li>
          <li>No specific time limits.</li>
        </ListStyled>
      </ContentStyled>
    </PricingStyled>
  )
}

export default Pricing
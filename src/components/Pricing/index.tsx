import { ContentStyled, ImageContainer, PricingStyled } from "./style"
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
      </ContentStyled>
    </PricingStyled>
  )
}

export default Pricing
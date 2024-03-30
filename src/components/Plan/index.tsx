import { ButtonPlan } from "../Buttons/Buttons.styles"
import PlanCard from "../PlanCard"
import { CardsContainer, JustPrice, PlanStyled, PriceContainer } from "./style"

const Plan = () => {
  return (
    <PlanStyled>
        <h2>Choose your plan</h2>
        <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
        <CardsContainer>
          <PlanCard>
            <h2>Free plan</h2>
            <ul>
              <li>Unlimited Bandwitch</li>
              <li>Encrypted Connection</li>
              <li>No Traffic Logs</li>
              <li>Works on All Devices</li>
            </ul>
            <PriceContainer>
              <span className="bold">Free</span>
              <ButtonPlan>Selecionar</ButtonPlan>
            </PriceContainer>
          </PlanCard>
          <PlanCard>
            <h2>Standard plan</h2>
            <ul>
              <li>Unlimited Bandwitch</li>
              <li>Encrypted Connection</li>
              <li>Yes Traffic Logs</li>
              <li>Works on All Devices</li>
              <li>Connect Anyware</li>
            </ul>
            <PriceContainer>
              <JustPrice>
                <span className="bold">$9</span>
                <span className="grey">/ mo</span>
              </JustPrice>
              <ButtonPlan>Selecionar</ButtonPlan>
            </PriceContainer>
          </PlanCard>
          <PlanCard>
            <h2>Premiun plan</h2>
            <ul>
              <li>Unlimited Bandwitch</li>
              <li>Encrypted Connection</li>
              <li>Yes Traffic Logs</li>
              <li>Works on All Devices</li>
              <li>Connect Anyware</li>
              <li>Get New Features</li>
            </ul>
            <PriceContainer>
            <JustPrice>
                <span className="bold">$12</span>
                <span className="grey"> / mo</span>
              </JustPrice>
              <ButtonPlan>Selecionar</ButtonPlan>
            </PriceContainer>
            
          </PlanCard> 
        </CardsContainer>
    </PlanStyled>
  )
}

export default Plan
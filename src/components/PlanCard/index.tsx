import { CardPlanStyled } from "./style"
import box from './assets/box.svg'
import { IPlanCard } from "./types"
import { ButtonPlan } from "../Buttons/Buttons.styles"

const PlanCard = ({children}: IPlanCard) => {
  return (
    <CardPlanStyled>
        <img src={box} alt="Caixa" />
        {children}
    </CardPlanStyled>
  )
}

export default PlanCard
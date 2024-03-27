import { ButtonSignIn, ButtonSignUp } from "../Buttons/Buttons.styles"
import { ButtonContainer, HeaderStyled, Navbar } from "./style"
import Logo from '/Logo.svg'

const Header = () => {
  return (
    <HeaderStyled>
        <div>
            <img src={Logo} alt="Logo da empresa" />
        </div>
        <Navbar>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </Navbar>
        <ButtonContainer>
          <ButtonSignIn>Sign In</ButtonSignIn>
          <ButtonSignUp>Sign Up</ButtonSignUp>
        </ButtonContainer>
    </HeaderStyled>
  )
}

export default Header
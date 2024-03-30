import { FooterContent, FooterNav, FooterStyled, IconRede, LogoImg, TitleList } from "./style"
import logo from '/Logo.svg'
import insta from './assets/Instagram.svg'
import face from './assets/Facebook.svg'
import twitter from './assets/Twitter.svg'

const Footer = () => {
  return (
    <FooterStyled>
        <FooterContent>
            <LogoImg src={logo} alt="Logo site" />
            <p>LaslesVPN is a private virtual network that has unique features and has high security.</p>
            <div id="social-icons">
                <IconRede src={face} alt="Facebook" />
                <IconRede src={twitter} alt="Twitter" />
                <IconRede src={insta} alt="Instagram" />
            </div>
            <span id="copyright">©2020LaslesVPN</span>
        </FooterContent>
        <FooterNav>
            <div>
                <TitleList>Product</TitleList>
                <ul>
                    <li>Download </li>
                    <li>Pricing</li>
                    <li>Locations</li>
                    <li>Server</li>
                    <li>Countries</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
                <TitleList>Engage</TitleList>
                <ul>
                    <li>LaslesVPN?</li>
                    <li>FAQ</li>
                    <li>Tutorials</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <div>
                <TitleList>Earn Money</TitleList >
                <ul>
                    <li>Affiliate</li>
                    <li>Become Partner</li>
                </ul>
            </div>
        </FooterNav>
    </FooterStyled>
  )
}

export default Footer
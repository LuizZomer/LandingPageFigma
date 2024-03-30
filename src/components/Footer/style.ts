import styled from "styled-components";

export const FooterStyled = styled.footer`
    background-color: #F8F8F8;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 230px;
    padding-bottom: 141px;
    padding-top: 200px;
`

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;

    p{
        width: 340px;
        margin-top: 20px;
        line-height: 30px;
        color: #4F5665;
    }

    #social-icons{
        display: flex;
        margin-top: 30px;
        gap: 20px;
    }

    #copyright{
        color: #AFB5C0;
    }
`

export const FooterNav = styled.div`
    display: flex;
    gap: 126px;

    ul{
        list-style: none;
        margin-top: 20px;
    }

    ul li{
        margin-bottom: 10px;
        color: #4F5665;
    }
`

export const LogoImg = styled.img`
    width: 149px;
    height: 36px;
`

export const TitleList = styled.span`
    font-weight: bold;
    font-size: 18px;
    color: #0B132A;
`

export const IconRede = styled.img`
    width: 70px;
    height: 70px;
`
import styled from "styled-components";

export const ButtonSignIn = styled.button`
    border: none;
    width: 53px;
    height: 19px;
    background-color: transparent;

    &:hover{
        cursor: pointer;
    }
`

export const ButtonSignUp = styled(ButtonSignIn)`
    width: 150px;
    height: 45px;
    border: 1px solid #F53855;
    border-radius: 20px;
    color: #F53855;
    transition: 1s;

    &:hover{
        background-color: #F53855;
        color: white;
    }
`

export const BtnGetStarted = styled.button`
    width: 250px;
    height: 60px;
    background-color: #F53838;
    color: #fff;
    border-radius: 10px;
    border: none;
    margin-top: 50px;
    box-shadow: 2px 3px 10px rgba(1, 1, 1, 0.4);
    transition: .5s;

    &:hover{
        border: 1px solid #F53838;
        transform: scale(1.1);
        box-shadow: 3px 5px 5px rgba(1,1,1,0.4);
        font-size: 16px;
        cursor: pointer;
    }
`
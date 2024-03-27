import styled from "styled-components";

export const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
`

export const Navbar = styled.nav`
    ul{
        display: flex;
        gap: 40px;
        list-style-type: none;
    }

    ul li a{
        color: #4F5665;
        text-decoration: none;
        transition: 1s;
    }

    ul li a:hover{
        color: #3F4659;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

`
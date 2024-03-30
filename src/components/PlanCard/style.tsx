import styled from "styled-components";
import check from './assets/check.svg'

export const CardPlanStyled = styled.div`
    width: 300px;
    height: 760px;
    border: 2px solid #DDDDDD;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover{
        border-color: #F53838;
    }

    img{
        margin-top: 79px;
    }

    h2{
        margin-top: 30px;
        font-size: 18px;
    }

    ul{
        margin-top: 30px;
        list-style: none;
    }

    ul li{
        background: url(${check}) no-repeat center left;
        padding-left: 45px;
        margin-top: 10px;
    }
`
import styled from "styled-components";
import correct from './assets/correct.svg'

export const PricingStyled = styled.section`
    margin-top: 95px;
    display: flex;
    align-items: center;
    gap: 169px;
`

export const ImageContainer = styled.div`
    img{
        width: 508px;
        height: 414px;
    }
`

export const ContentStyled = styled.div`
    display: flex;
    flex-direction: column;


    span{
        font-size: 35px;
        color: #0B132A;
        font-weight: 500;
        line-height: 50px;
    }

    p{
        width: 427px;
        line-height: 30px;
        margin-top: 20px;
        color: #4F5665;
    }
`

export const ListStyled = styled.ul`
    list-style: none;
    margin-top: 20px;

    li{
        padding-left: 35px;
        background: url(${correct}) no-repeat left center;
        margin-top: 15px;
        font-size: 14px;
        color: #4F5665;
    }
`
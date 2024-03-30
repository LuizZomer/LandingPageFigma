import styled from "styled-components";

export const PlanStyled = styled.article`
    margin-top: 211px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
       font-size: 35px;
       color: #0B132A;
    }

    p{
        line-height: 30px;
        color: #4F5665;
        margin-top: 20px;
        margin-bottom: 60px;
    }
`

export const CardsContainer = styled.div`
    display: flex;
    gap: 50px;
`

export const PriceContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    margin-bottom: 50px;
    gap: 20px;
    font-size: 25px;

    .bold{
        font-weight: bold;
    }

    .grey{
        color: #4F5665;
    }
`

export const JustPrice = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 5px;
` 
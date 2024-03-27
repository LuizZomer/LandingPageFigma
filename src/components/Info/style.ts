import styled from "styled-components";

export const InfoStyled = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1140px;
    height: 200px;
    margin-top: 103px;
    border-radius: 27px;
    box-shadow: 1px 4px 10px rgba(1,1,1,0.2);
    margin-bottom: 20px;
`

export const SingleStyled = styled.div`
    display: flex;  
    padding: 0 90px;
    border-right: 1px solid #EEEFF2;
    width: 365px;
    gap: 34px;

    img{
        width: 55px;
        height: 55px;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    span{
        font-size: 20px;
        color: #4F5665;
    }

    .numInfo{
        font-weight: bold;
        font-size: 25px;
        color: black;
    }
` 
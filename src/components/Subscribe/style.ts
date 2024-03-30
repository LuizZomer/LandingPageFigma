import styled from "styled-components";

export const SubscribeStyled = styled.div`
    width: 1140px;
    height: 233px;
    margin-bottom: -120px;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 70px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(1,1,1, 0.3); 

    #content{
        display: flex;
        flex-direction: column;
    }

    #content .title{
        font-size: 35px;
        line-height: 45px; 
        font-weight: 600;
        width: 410px;
        color: #0B132A;
    }

    #content p{
        color: #4F5665;
        margin-top: 20px;
    }
`
import styled from 'styled-components';

export const Card: any = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);
    
`
export const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 260px;
    margin: 20px;
`
export const Image = styled.img`
    margin: 10px 10px 20px 10px;
    width: 100%;
    max-width: 280px;
    height: 170px;
    background-image: url("mainImage.png");
    `
export const Title = styled.h1 `
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;

`
export const Text = styled.p `
    color: #ABB3BA;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 166.667% */
    width: 260px;
    text-align: left;

    
`
export const Button = styled.button `
    width: 86px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #4E71FE;
    text-align: center;
    color: #fff;
    
`
export const WrapButton = styled.div `
    display: flex;
    gap: 20px;
    margin-left: 20px;
`
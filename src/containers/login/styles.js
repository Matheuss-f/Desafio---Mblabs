import styled from "styled-components";

export const Container = styled.div `
    background-color: #59046E ;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;
`

export const Image = styled.img `
    height: 300px;
    width: 300px;
    margin-top: 30px ;
`
export const ContainerItens = styled.div `
    padding: 50px 36px;
    display: flex;
    flex-direction: column;   
`

export const H2 = styled.h2 `
    margin-bottom: 5px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
`

export const InputLabel = styled.p `
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 22px;
    color: #fff;

`

export const Input = styled.input `
    width: 100%;
    height: 44px;
    border: 1px solid #E3DB1C;
    outline: none;
    border-radius: 10px;
    background-color: #3E074F ;
    padding: 15px;
    color: #fff;
    margin-bottom: 34px;
`



export const Link = styled.a `
    text-align: right;
    margin-top: 20px;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
`

export const Button = styled.button `
    margin-top: 100px;
    width: 340px;
    height: 44px;
    background:linear-gradient(180deg, #FAFF0D 0%, rgba(244, 88, 200, 0.81) 100%);
    border-radius: 16px;
    border: none;
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:active{
        opacity: 0.8;
    }
`
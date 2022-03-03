import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div `
    background: #DCC9E2;
    height: 105vh;
    width: 425px;
    position: absolute;  
`

export const ContainerHeader = styled.div `
    margin-top: 40px;
    width: 350px;
    height: 70px;
    margin-left: 23px;
    padding-left: 24px;
    border-radius: 20px 0 0 20px;
    background: linear-gradient(90deg, #530A6B 32.31%, rgba(83, 10, 107, 0) 100%);  
` 
export const TitleHeader = styled.h3 `
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: #FFFFFF;
    padding-top: 15px; 
` 

export const ParagraphHeader = styled.p `
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #FFFFFF;   
` 

export const ContainerItens = styled.div `
     background: #49056A;
     margin: 48px 23px 15px 23px;
     border-radius: 20px;
     display: flex;
     flex-direction: column;
` 

export const ContainerPay = styled.div `
    border-bottom: 1px solid #FAFF0D; 
    height: 90px;
    padding-left: 30px;
    
` 

export const Select = styled.select`
    width: 80px;
    height: 36px;
    border: 1px solid #FAFF0D;
    border-radius: 7px;
    outline: none;
    background: #450B58;
    color: #fff;
`

export const Option = styled.option`      

`

export const Input = styled.input `
    width: 200px;
    height: 36px;
    border: 1px solid #FAFF0D;
    border-radius: 7px;
    outline: none;
    background: #450B58;
    color: #fff;
    padding-left: 20px;
` 

export const Paragraph = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #FFFFFF;
    margin-bottom: 8px;
    margin-top: 10px;
    
` 
    


export const ParagraphTotal = styled.p `
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    color: #50046A;
    
` 

export const ContainerButton = styled.div `
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    margin-top: 15px ;
    gap: 24px;
    
` 

export const BtnBuy = styled(Link) `
    background: #F49507;
    width: 360px;
    height: 56px;
    border: none;
    border-radius: 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    color: #FFFFFF;
    padding-top: 15px;
    
` 

export const BtnFeed = styled(Link) `
    background: linear-gradient(180deg, #BF07FF 0%, rgba(254, 11, 186, 0.77) 100%);
    width: 360px;
    height: 56px;
    border: none;
    border-radius: 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    color: #FFFFFF;
    padding-top: 15px;
` 



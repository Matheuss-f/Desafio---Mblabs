import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    background:#530A6B;
    position: absolute;
    height: 100%;
`

export const ContainerAproved = styled.div`
    background: #2BB508;
    margin-top: 60px;
    margin-left: 30px;
    text-align: center;
    width: 350px;
    height: 40px;
    padding-top: 10px;
    border-radius: 10px;
`

export const Text = styled.h2`
    font-style: normal;
    font-size: 20px;
    color: #FFFFFF;
`

export const ContainerThanks = styled.div`
    padding-left: 30px ;
    padding-top: 50px;

`
export const Paragraph = styled.p`
    color: #B094BA;
`

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px ;
    gap: 25px;
    margin-left: 30px;
`

export const Button = styled(Link)`
    width: 342px;
    height: 48px;
    background: linear-gradient(180deg, #BF07FF 0%, rgba(254, 11, 186, 0.77) 100%);
    border-radius: 10px;
    border: 1px solid #FAFF0D;
    outline: none;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    color: #FFFFFF;
    padding-top: 10px;

`

export const Image = styled.img `
    margin-top: 50px;
    margin-left: 130px;
`


import React from 'react';
import Logo from '../../assets/logo.jpeg'
import Arrow from '../../assets/arrow.png'
import {
    Container,
    Image,
    ContainerItens,
    H2,
    InputLabel,
    Input,
    Paragraph,
    Button
} from "./styles";


export default function Login() {
    return (
        <Container>
            <Image src={Logo} alt="Logo" />

            <H2>Seja Bem-Vindo(a)</H2>

            <ContainerItens>

                <InputLabel>Usuário</InputLabel>
                <Input placeholder="Usuário" />

                <InputLabel>Senha</InputLabel>
                <Input placeholder="Senha" type="password" />

                <Paragraph>Esqueceu a senha?</Paragraph>

                <Button to="/feed">Entrar <img alt='Seta' src={Arrow}></img></Button>

            </ContainerItens>
        </Container>
    )
}


import React from 'react';
import Aproved from '../../assets/aprovado.png'
import {
    Container,
    ContainerAproved,
    Text,
    ContainerThanks,
    Paragraph,
    ContainerButtons,
    Button,
    Image
} from './styles'

export default function Agradecimento() {

    return (
        <Container>

            <Image src={Aproved} />

            <ContainerAproved>
                <Text>Sua compra foi aprovada!</Text>
            </ContainerAproved>

            <ContainerThanks>
                <Text>Nós da Ingressos Aqui agradecemos pela preferência!</Text>
                <Paragraph>Em alguns instantes a confirmação da compra chegará em seu email.</Paragraph>
            </ContainerThanks>

            <ContainerButtons>
                <Button to="/feed">Voltar para o feed</Button>
                <Button to="/">Sair</Button>
            </ContainerButtons>
        </Container>
    )

}
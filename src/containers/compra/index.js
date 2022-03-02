import React from 'react';
import {
    Container,
    ContainerHeader,
    TitleHeader,
    ParagraphHeader,
    ContainerItens,
    ContainerPay,
    Input,
    Paragraph,
    Select,
    Option,
    ParagraphTotal,
    ContainerButton,
    BtnBuy,
    BtnFeed
} from './styles';

export default function Compra() {

    return (
        <Container>
            <ContainerHeader>
                <TitleHeader>Vamos finalizar seu pedido!</TitleHeader>
                <ParagraphHeader>Por favor, preencha os requisitos abaixo.</ParagraphHeader>
            </ContainerHeader>

            <ContainerItens>

                <ContainerPay>
                    <Paragraph>Selecione a quantidade de ingressos:</Paragraph>
                    <Select>
                        <Option>1</Option>
                        <Option>2</Option>
                        <Option>3</Option>
                        <Option>4</Option>
                        <Option>5</Option>
                    </Select>
                </ContainerPay>

                <ContainerPay>
                    <Paragraph>Turno desejado:</Paragraph>
                    <Select>
                        <Option>Manhã</Option>
                        <Option>Tarde</Option>
                        <Option>Noite</Option>
                    </Select>
                </ContainerPay>

                <ContainerPay>
                    <Paragraph>Forma de pagamento:</Paragraph>
                    <Select>
                        <Option>Pix</Option>
                        <Option>Crédito</Option>
                        <Option>Boleto</Option>
                    </Select>
                </ContainerPay>

                <ContainerPay>
                    <Paragraph>Seu email:</Paragraph>
                    <Input type="email" placeholder='Email' />
                </ContainerPay>

                <ContainerPay>
                    <Paragraph>Cupom de desconto (Opcional)</Paragraph>
                    <Input type="text" placeholder='Cupom de desconto'/>
                </ContainerPay>

            </ContainerItens>

        <ParagraphTotal>Total: R$20,00</ParagraphTotal>

        <ContainerButton>
            <BtnBuy>Finalizar compra</BtnBuy>
            <BtnFeed>Voltar para o feed</BtnFeed>       
        </ContainerButton>    







        </Container>
    )

}
import React from 'react';
import ImgSeminary from '../../assets/seminario.png'
import ImgWorkshop from '../../assets/workshop.png'
import {
    InputSearch,
    ParagraphNav,
    Select,
    Option,
    ParagraphCity,
    ContainerSeminary,
    Image,
    EventName,
    ParagraphDescrition,
    ParagraphValue,
    Button,
    ContainerWorkshop,
    BtnLoadnMore
} from "./styles";

export default function Feed() {

    return (
        <div>
            <div>
                <InputSearch placeholder='Pesquisar por eventos ...'></InputSearch>

                <ParagraphNav>Onde você deseja buscar por eventos?</ParagraphNav>

                <Select>
                    <Option>
                        Cidade
                    </Option>
                    <Option>
                        Campinas
                    </Option>
                    <Option>
                        Cosmópolis
                    </Option>
                    <Option>
                        Paulínia
                    </Option>
                    <Option>
                        ...
                    </Option>
                </Select>

                <Select>
                    <Option>
                        Estado
                    </Option>
                    <Option>
                        SP
                    </Option>
                    <Option>
                        BA
                    </Option>
                    <Option>
                        RJ
                    </Option>
                    <Option>
                        ...
                    </Option>
                </Select>

                <ParagraphNav>Qual tipo de evento você está procurando?</ParagraphNav>
                <Select>
                    <Option>
                        Eventos
                    </Option>
                    <Option>
                        Universitários
                    </Option>
                    <Option>
                        Empresariais
                    </Option>
                </Select>
            </div>

            <ContainerSeminary>
                <Image alt="Imagem-Seminário" src={ImgSeminary}></Image>
                <EventName><p>Seminário Universitário</p></EventName>
                <ParagraphDescrition>Novas tecnologias de hadware da Apple</ParagraphDescrition>
                <ParagraphCity>Campinas(SP)</ParagraphCity>
                <ParagraphValue>R$20,00</ParagraphValue>
                <Button to="/compra">Garantir ingresso</Button>
            </ContainerSeminary>

            <ContainerWorkshop>
                <Image alt="Imagem-Workshop" src={ ImgWorkshop} />
                <EventName><p>Workshop Empresarial</p></EventName>
                <ParagraphDescrition>Planejamento Estratégico</ParagraphDescrition>
                <ParagraphCity>Campinas(SP)</ParagraphCity>
                <ParagraphValue>R$20,00</ParagraphValue>
                <Button to="/compra">Garantir ingresso</Button>
            </ContainerWorkshop>

            < BtnLoadnMore>Carregar mais</BtnLoadnMore>

            
        </div>
    )

}
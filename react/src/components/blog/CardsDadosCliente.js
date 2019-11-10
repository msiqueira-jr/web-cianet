import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,

  } from "shards-react";
import PageTitle from "../common/PageTitle";




export class CardsDadosCliente extends Component {
    render() {
        return (
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle title="Cliente" subtitle="Dados do" className="text-sm-left mb-3" />
                </Row>
                <Col>
                <Row>
                    <Card>
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Quantidade Dispositivos Conectados</h6>
                    </CardHeader>
                        <h1><center>8</center></h1>
                    </Card>
                </Row>
                </Col>
                <Col>
                <Row>
                    <Card>
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Quantidade Dispositivos Conectados</h6>
                    </CardHeader>
                        <h1><center>8</center></h1>
                    </Card>
                </Row>
                </Col>
            </Container>

        )
    }
}

export default CardsDadosCliente

import React, { Component } from 'react'



import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormInput,
    Button
  } from "shards-react";



export class WifiSSIDPass extends Component {
    render() {
        return (
            this.newMethod()
        )
    }

    newMethod() {
        return <div>
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                    <h6 className="m-0">Alterar configurações do Wifi</h6>
                    </CardHeader>
                    <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                        <Col>
                            <Form>
                            <Row form>
                                {/* First Name */}
                                <Col md="6" className="form-group">
                                <label htmlFor="feFirstName">SSID</label>
                                <FormInput
                                    id="feFirstName"
                                    placeholder="First Name"
                                    value="Nome da Rede"
                                    onChange={() => {}}
                                />
                                </Col>
                                {/* Last Name */}
                                <Col md="6" className="form-group">
                                <label htmlFor="feLastName">SSID</label>
                                <FormInput
                                    id="feLastName"
                                    placeholder="Last Name"
                                    value="Repita o Nome da Rede"
                                    onChange={() => {}}
                                />
                                </Col>
                            </Row>
                            </Form>
                            <Button theme="accent">Atualizar</Button>
                            <Form>
                            <Row form>
                                {/* Email */}
                                <Col md="6" className="form-group">
                                <label htmlFor="feEmail">Password</label>
                                <FormInput
                                    type="password"
                                    id="feEmail"
                                    placeholder="Email Address"
                                    value="targeryen@example.com"
                                    onChange={() => {}}
                                    autoComplete="email"
                                />
                                </Col>
                                {/* Password */}
                                <Col md="6" className="form-group">
                                <label htmlFor="fePassword">Password</label>
                                <FormInput
                                    type="password"
                                    id="fePassword"
                                    placeholder="Password"
                                    value="EX@MPL#P@$$w0RD"
                                    onChange={() => {}}
                                    autoComplete="current-password"
                                />
                                </Col>
                            </Row>
                            </Form>
                            <Button theme="accent">Atualizar</Button>
                        </Col>
                        </Row>
                    </ListGroupItem>
                    </ListGroup>
                </Card>
        </div>;
    }
}

export default WifiSSIDPass

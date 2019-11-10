import React, { Component } from 'react'
import {
    Row,

    Card,
    CardHeader,

  } from "shards-react";
export class QtdDevices extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Card>
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Quantidade de Dispositivos Conectados</h6>
                    </CardHeader>
                        <h4><center>6</center></h4>
                    </Card>
                </Row>
            </div>
        )
    }
}

export default QtdDevices

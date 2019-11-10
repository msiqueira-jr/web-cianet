import React, { Component } from 'react'
import {
    Row,

    Card,
    CardHeader,
    CardBody,
    CardFooter

  } from "shards-react";
export class Problema extends Component {
    render() {
        return (
            <Row>
            <Card>
            <CardHeader className="border-bottom">
                <h6 className="m-0">Problema</h6>
            </CardHeader>
            <CardBody>
                <h1><center>BANDA LARGA</center></h1>
            </CardBody>
            <CardFooter className="border-top">
            <h5>Recomendação: XXXXXX</h5>
            </CardFooter>
            </Card>
        </Row>
        )
    }
}

export default Problema

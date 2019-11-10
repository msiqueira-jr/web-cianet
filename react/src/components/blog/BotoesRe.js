import React, { Component } from 'react'

import {
    Card,
    CardHeader,
    CardFooter
  } from "shards-react";

  import { Button, Modal, ModalBody, ModalHeader } from "shards-react";


export class BotoesRe extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);

      }
    
      toggle() {
        this.setState({
          open: !this.state.open
        });
      }
      toggle1() {
        this.setState({
          open: !this.state.open
        });
      }
    render() {
        const { open } = this.state;
        return (
            <div>
                <Card>
                <CardHeader className="border-bottom">
                        <h6 className="m-0">Configurações do Modem</h6>
                </CardHeader>
                <CardFooter className="border-top">

                <Button theme="danger" onClick={this.toggle}>Reiniciar</Button><br></br>
                <Modal open={open} toggle={this.toggle}>
                    <ModalHeader>Reiniciando modem.</ModalHeader>
                    <ModalBody>Demora em torno de 20 segundos!</ModalBody>
                </Modal>
                <br></br>

                <Button theme="warning" onClick={this.toggle}>Restaurar configurações</Button>
                <Modal open={open} toggle={this.toggle}>
                    <ModalHeader>Restaurando para configurações inicias.</ModalHeader>
                    <ModalBody>Demora em torno de 20 segundos!</ModalBody>
                </Modal>
                <br></br>
                <br></br>
                </CardFooter>

                </Card>
            </div>
        )
    }
}

export default BotoesRe

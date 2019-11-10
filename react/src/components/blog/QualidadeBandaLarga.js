import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer";

// and just use it
import {
    Card,
    CardHeader,
    CardFooter
  } from "shards-react";


import { Button, Modal, ModalBody, ModalHeader } from "shards-react";

export class QualidadeBandaLarga extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
            open: !this.state.open });
    }

    render() {
        const { open } = this.state;
        return (
            <div>
                <Card>
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Qualidade da Banda Larga</h6>
                    </CardHeader>
                        <p></p><p></p>
                        <center>
                        <ReactSpeedometer 
                        currentValueText="Qualidade: 20 >> Ruim" 
                        maxValue={100}                       
                        minValue={0}
                        value={20}
                        height={200}
                        needleColor="black"
                        segmentColors={['red','yellow','green']}
                        segments={3}
                        />
                        </center>
                    <CardFooter className="border-top">
                    <h5>Recomendação: XXXXXXXXXXXXX</h5>
                    <Button theme="danger" onClick={this.toggle}>Reiniciar</Button><br></br>
                    <Modal open={open} toggle={this.toggle}>
                        <ModalHeader>Reiniciando o modem...</ModalHeader>
                        <ModalBody>Demora em torno de 20 segundos!</ModalBody>
                    </Modal>


                    </CardFooter>       
                </Card>
            </div>
        )
    }
}

export default QualidadeBandaLarga

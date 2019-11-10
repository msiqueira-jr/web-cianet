import React, { Component } from 'react'

import ReactSpeedometer from "react-d3-speedometer"

import {
    Card,
    CardHeader,
    CardFooter
  } from "shards-react";

import { Button } from "shards-react";

import axios from 'axios';


export class QualidadeCanalWifi5G extends Component {

    
    state = {
    }

    url = 'http://localhost:9999/wifiqoe'
    componentDidMount() {
    axios.get(this.url)
        .then(res => {
        this.setState( res.data );
        })
        .catch((err) => {
            console.log('BDUse erro')
        })
    }
    

    onClickButton1 = () => {
        this.setState({
            canal2g: '1'
        });
    }

    render() {

        return (
            <div>
                <Card>
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Qualidade do Wifi 5G</h6>
                    </CardHeader>
                        <p></p><p></p>
                        <center>
                        <ReactSpeedometer 
                            maxValue={100}
                            minValue={0}
                            value={100}
                            currentValueText="Qualidade: Boa" 
                            height={200}
                            needleColor="black"
                            segmentColors={['red','yellow','green',]}
                            segments={3}
                        />
                        </center>
                    <CardFooter className="border-top">
                        <h3>Canal Atual: 36</h3>
                        <h4>Canal Recomendado: 36</h4>
                        <Button onClick={this.onClickButton1}>Alterar Canal</Button>
                        <br></br>
                        <br></br>
                        <Button theme="accent">Atualizar Medição</Button>
                    </CardFooter>
                </Card>
            </div>
        )
    }
}

export default QualidadeCanalWifi5G

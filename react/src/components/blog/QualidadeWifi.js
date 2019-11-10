import React, { Component } from 'react'

import ReactSpeedometer from "react-d3-speedometer"
// and just use it
import {
    Card,
    CardHeader,
    CardFooter
  } from "shards-react";

export class QualidadeWifi extends Component {
    render() {
        return (
            <Card>
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Qualidade do Wifi</h6>
                </CardHeader>
                <p></p><p></p>
                <center>
                    <ReactSpeedometer
                        maxValue={100}
                        minValue={0}
                        value={70}
                        currentValueText="Qualidade: 70 >> Boa" 
                        height={200}
                        needleColor="black"
                        segmentColors={['red', 'yellow', 'green']}
                        segments={3}
                    />
                </center>
                <CardFooter className="border-top">
                    <h5>Recomendação: XXXXXXXXXXXXX</h5>
                </CardFooter>
            </Card>
        )
    }
}



export default QualidadeWifi

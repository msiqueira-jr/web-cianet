import React, { Component } from 'react'
import ReactSpeedometer from "react-d3-speedometer"
// and just use it
import {
    Card,
    CardHeader,
    CardFooter
  } from "shards-react";

import axios from 'axios';


export class SpeedMeter extends Component {

    
    state = {
      }

    url = 'http://localhost:9999/qoe'
    componentDidMount() {
    axios.get(this.url)
        .then(res => {
        this.setState( res.data );
        })
        .catch((err) => {
            console.log('QoE erro')
          })
    }
    

    render() {
        
        return (
            <div>
                
                <Card>
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">QoE - Qualidade de experiência</h6>
                    </CardHeader>
                        <p></p><p></p>
                        <center>
                        <ReactSpeedometer 
                        maxValue={100}
                        minValue={0}
                        value={this.state.qoe}
                        height={200}
                        needleColor="black"
                        segmentColors={['red','yellow','green']}
                        segments={3}
                        />
                        </center>
                    <CardFooter className="border-top">
                        <h3>O Usuário está com alguns problemas leves</h3>
                    </CardFooter>       

                </Card>
            </div>
        )
    }
}

export default SpeedMeter

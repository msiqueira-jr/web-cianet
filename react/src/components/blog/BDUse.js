import React, { Component } from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import axios from 'axios';

// and just use it
import {
    Card,
    CardHeader,
    CardFooter
  } from "shards-react";


export class BDUse extends Component {
    
    state = {
    }

    url = 'http://localhost:9999/bduse'
    componentDidMount() {
    axios.get(this.url)
        .then(res => {
        this.setState( res.data );
        })
        .catch((err) => {
            console.log('BDUse erro')
        })
    }
    
    render() {
        return (
            <div>
                <Card>
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Utilização da Banda Larga</h6>
                    </CardHeader>
                        <p></p><p></p>
                        <center>
                        <ReactSpeedometer 
                        maxValue={100}
                        minValue={0}
                        value={this.state.bduse}
                        currentValueText="Utilização: Alta" 
                        height={200}
                        needleColor="black"
                        segmentColors={['red','yellow','green']}
                        segments={3}
                        />
                        </center>
                    <CardFooter className="border-top">
                        <h5>Recomendação: Ofertar plano melhor</h5>
                    </CardFooter>       
                </Card>
            </div>
        )
    }
}



export default BDUse

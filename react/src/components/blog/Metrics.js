import React, { Component } from 'react'

import {
    Row,
    Card,
    CardHeader,
    CardBody,
  } from "shards-react";
  
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';


export class Metrics extends Component {
    data = [
        {  name: 'Latência', nota: 5, },
        { name: 'Jitter', nota: 6, },
        {  name: 'Perda de Pacote', nota: 3, },
      ];
    
      state = {
      }

    render() {
        return (
            <div>
                <Row>
                    <Card>
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Indicadores de Qualidade</h6>
                        </CardHeader>
                        <CardBody className="p-0 pb-3">
                            <BarChart
                                width={500}
                                height={300}
                                data={this.data}
                                margin={{
                                    top: 5, right: 30, left: 20, bottom: 5,
                                }}
                                >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis dataKey="nota"/>
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="nota" fill="blue" />
                            </BarChart>
                        </CardBody>
                
                    </Card>
                </Row>
                
            </div>
        )
    }
}

export default Metrics

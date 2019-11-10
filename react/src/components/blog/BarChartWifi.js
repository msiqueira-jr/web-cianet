import React, { Component } from 'react'
import {

    Card,
    CardHeader,
    CardBody,
  } from "shards-react";

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
   
const data = [
    {
      name: 'Canal 1', quantidade: 10,
    },
    {
      name: 'Canal 2', quantidade: 0,
    },
    {
      name: 'Canal 2', quantidade: 2,
    },
    {
      name: 'Canal 3', quantidade: 0,
    },
    {
      name: 'Canal 4', quantidade: 0,
    },
    {
      name: 'Canal 5', quantidade: 0,
    },
    {
      name: 'Canal 6', quantidade: 20,
    },
    {
      name: 'Canal 7', quantidade: 1,
    },
    {
      name: 'Canal 8', quantidade: 5,
    },
    {
      name: 'Canal 9', quantidade: 0,
    },
    {
      name: 'Canal 10', quantidade: 1,
    },
    {
      name: 'Canal 11', quantidade: 2,
    },
    {
      name: 'Canal 12', quantidade: 6,
    },
    {
      name: 'Canal 13', quantidade: 0,
    },
  ];
  

export class BarChartWifi extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Redes Vizinhas (2.4G) por Canal</h6>
                    </CardHeader>
                    <CardBody className="p-0 pb-3">
                    <BarChart
                      width={500}
                      height={300}
                      data={data}
                      margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis dataKey="quantidade"/>
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="quantidade" fill="#82ca9d" />
                    </BarChart>
                    </CardBody>
                    
                </Card>
            </div>
        )
    }
}


export default BarChartWifi

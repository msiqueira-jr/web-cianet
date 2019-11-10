import React, { Component } from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter
  } from "shards-react";

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

//import axios from 'axios';


export class DevicesSNR extends Component {

  data = [
    {
      name: 'Bom', quantidade:3,
    },
    {
      name: 'Medio', quantidade: 2,
    },
    {
      name: 'Ruim', quantidade: 1,
    },
  ];

  state = {
  }

  /*
  url = 'http://localhost:9999/snrdevices'
  componentDidMount() {
  axios.get(this.url)
      .then(res => {
      this.setState( res.data );
      console.log(res.data)
      this.data[0].quantidade = 4
      })
      .catch((err) => {
          console.log('SNRDevices erro')
      })
  }
  */
    render() {
        return (
            <div>
                <Card>
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Qualidade dos Dispositivos Conectados a Rede</h6>
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
                      <YAxis dataKey="quantidade"/>
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="quantidade" fill="blue" />
                    </BarChart>
                    </CardBody>
                    
                    <CardFooter className="border-top">
                        <h5>Recomendação: XXXXXXXXXXXXX</h5>                        
                    </CardFooter>

                </Card>
            </div>
        )
    }
}

export default DevicesSNR

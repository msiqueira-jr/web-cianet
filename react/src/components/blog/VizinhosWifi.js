import React, { Component } from 'react'
import PieChart from 'react-minimal-pie-chart';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter
  } from "shards-react";
export class VizinhosWifi extends Component {
    render() {
        return (
                <Card small className="h-100">
                <CardHeader className="border-bottom">Vizinhos</CardHeader>
                <CardBody>
                <PieChart
                data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                ]}
                style={{height: '300px'}}
                label
                labelStyle={{
                  fontSize: '5px',
                  fontFamily: 'sans-serif'
                }}
                radius={42}
                labelPosition={112}
                />
                </CardBody>
                <CardFooter className="border-top">
                    Fim
                </CardFooter>
                </Card>
        )
    }
}

export default VizinhosWifi

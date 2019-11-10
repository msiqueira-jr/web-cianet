import React, { Component } from 'react'

import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    //CardFooter
  } from "shards-react";

import axios from 'axios';


export class WifiInfo extends Component {

    constructor(props) {
      super(props)
      this.state = {
        wifi2g: [
          { id: '',MAC: '', Frequencia: '',SSID: '', Canal: '',Sinal:'',Ruido:'',SNR:''},
        ]
      }
  }
  state = {
  }

  url = 'http://localhost:9999/wifi_modem_2g'
  componentDidMount() {
  axios.get(this.url)
    .then(res => {
    this.setState( res.data );
    })
    .catch((err) => {
        console.log('Table Devices erro')
      })
  }

  renderTableHeader() {
      let header = ["id", "MAC", "Frequencia", "SSID", "Canal", "Sinal", "Ruido", "SNR"]
      return header.map((key, index) => {
        return <th scope="col" className="border-0" key={index}>{key.toUpperCase()}</th>
      })
  }

  renderTableData() {
      return this.state.wifi2g.map((wifi2g, index) => {
        //{console.log(this.data)}
        const { id, MAC, Frequencia, SSID, Canal, Sinal, Ruido, SNR } = wifi2g //destructuring
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{MAC}</td>
            <td>{Frequencia}</td>
            <td>{SSID}</td>
            <td>{Canal}</td>
            <td>{Sinal}</td>
            <td>{Ruido}</td>
            <td>{SNR}</td>
          </tr>
        )
      })
  }

    render() {
      //{console.log(this.state)}
        return (
          <Row>
          <Col>
             <Card small className="mb-4">
                <CardHeader className="border-bottom">
                   <h5>Informações do Modem</h5 >
                </CardHeader>
                <CardBody className="p-0 pb-3">
                   <table className="table mb-0">
                      <tbody>
                         <tr>{this.renderTableHeader()}</tr>
                         {this.renderTableData()}
                      </tbody>
                   </table>
                </CardBody>
             </Card>
          </Col>
       </Row>
        )
    }
}

export default WifiInfo

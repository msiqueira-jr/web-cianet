import React, { Component } from 'react'

import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
  } from "shards-react";



export class WifiInfo5G extends Component {
    render() {
        return (
            <div>
            <Row>
              <Col>
                <Card small className="mb-4">
                  <CardHeader className="border-bottom">
                    <h6 className="m-0">Informações do Modem</h6>
                  </CardHeader>
                  <CardBody className="p-0 pb-3">
                    <table className="table mb-0">
                      <thead className="bg-light">
                        <tr>
                          <th scope="col" className="border-0">
                            MAC
                  </th>
                          <th scope="col" className="border-0">
                            Frequência
                  </th>
                  <th scope="col" className="border-0">
                            SSID
                  </th>
                          <th scope="col" className="border-0">
                            Canal
                  </th>
                          <th scope="col" className="border-0">
                            Sinal
                  </th>
                          <th scope="col" className="border-0">
                            Ruído
                  </th>
                  <th scope="col" className="border-0">
                            SNR
                  </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>C4:6E:1F:08:84:F6</td>
                          <td>5G</td>
                          <td>Rede 5G</td>
                          <td>36</td>
                          <td>-35</td>
                          <td>-92</td>
                          <td>57</td>
                        </tr>
                      </tbody>
                    </table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            </div>
        )
    }
}

export default WifiInfo5G

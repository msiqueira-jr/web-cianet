import React, { Component } from 'react'

import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
  } from "shards-react";



export class Devices extends Component {
    render() {
        return (
            <div>
            {/* Default Light Table */}
            <Row>
              <Col>
                <Card small className="mb-4">
                  <CardHeader className="border-bottom">
                    <h5> Número de Dispositivos: 6</h5>
                  </CardHeader>
                  <CardBody className="p-0 pb-3">
                    <table className="table mb-0">
                      <thead className="bg-light">
                        <tr>
                          <th scope="col" className="border-0">
                          </th>
                          <th scope="col" className="border-0">
                            MAC
                          </th>
                          <th scope="col" className="border-0">
                            Vendor
                          </th>
                          <th scope="col" className="border-0">
                            RSSI (MBit/s)
                          </th>
                          <th scope="col" className="border-0">
                            Ruído (MBit/s)
                          </th>
                          <th scope="col" className="border-0">
                            SNR (dbs)
                          </th>
                          <th scope="col" className="border-0">
                            Troughput (MBit/s)
                          </th>
                          <th scope="col" className="border-0">
                            Frequência 
                          </th>
                          <th scope="col" className="border-0">
                            Rank
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>1</td>
                          <td>C4:6E:1F:08:81:AC</td>
                          <td>SamsungE</td>
                          <td>-82</td>
                          <td>-92</td>
                          <td>10</td>
                          <td>1.4</td>
                          <td>5</td>
                          <td>Ruim</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>80:00:0B:A4:DC:7E</td>
                          <td>SamsungE</td>
                          <td>-21</td>
                          <td>-92</td>
                          <td>71</td>
                          <td>13.6</td>
                          <td>2.4</td>
                          <td>Médio</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>70:3A:CB:EE:C0:B6</td>
                          <td>Tp-LinkT</td>
                          <td>-64</td>
                          <td>-92</td>
                          <td>28</td>
                          <td>2.2</td>
                          <td>5</td>
                          <td>Médio</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>62:10:97:F9:9D:11</td>
                          <td>Xiaomi</td>
                          <td>-60</td>
                          <td>-92</td>
                          <td>32</td>
                          <td>9.2</td>
                          <td>2.4</td>
                          <td>Médio</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>8A:8A:20:DB:A7:4C</td>
                          <td>Apple</td>
                          <td>-37</td>
                          <td>-92</td>
                          <td>55</td>
                          <td>20.2</td>
                          <td>5</td>
                          <td>Bom</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>80:00:0B:A4:DC:7B</td>
                          <td>Motorola</td>
                          <td>-47</td>
                          <td>-92</td>
                          <td>45</td>
                          <td>13.0</td>
                          <td>2.4</td>
                          <td>Bom</td>
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

export default Devices

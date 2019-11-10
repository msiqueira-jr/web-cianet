import React, { Component } from 'react'

//import './TableDinamic.css'

import axios from 'axios';

// and just use it
import {
   Row,
   Col,
   Card,
   CardHeader,
   CardFooter,
   CardBody
} from "shards-react";


export class TableDinamic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [
         { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
         { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
         { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
         { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
      ]
    }
 }
 state = {
}

url = 'http://localhost:9999/table_devices'
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
    //let header = Object.keys(this.state.students[0])
    let header = ["id", "name", "age", "email"]
    return header.map((key, index) => {
       return <th scope="col" className="border-0" key={index}>{key.toUpperCase()}</th>
    })
 }

 renderTableData() {
    return this.state.students.map((students, index) => {
       const { id, name, age, email } = students //destructuring
       return (
             <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{age}</td>
               <td>{email}</td>
             </tr>
       )
    })
 }

  render() {
    return (
       <Row>
          <Col>
             <Card small className="mb-4">
                <CardHeader className="border-bottom">
                   <h5>Configurações Usuários</h5 >
                </CardHeader>
                <CardBody className="p-0 pb-3">
                   <table className="table mb-0">
                      <tbody>
                         <tr>{this.renderTableHeader()}</tr>
                         {this.renderTableData()}
                      </tbody>
                   </table>
                </CardBody>
                <CardFooter className="border-top">
                </CardFooter>
             </Card>
          </Col>
       </Row>
    )
  }
}

export default TableDinamic

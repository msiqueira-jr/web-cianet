import React, { Component } from 'react'

import { Button } from "shards-react";

// and just use it
import {
    Card,
    CardHeader,
    CardFooter
  } from "shards-react";

export class DownUpTest extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader className="border-bottom">
                        Teste Download e Upload
                    </CardHeader>
                    <CardFooter className="border-top">
                        <Button>Download</Button><br></br>
                        <Button>Upload</Button><br></br>
                        <Button>Download e Upload</Button>
                    </CardFooter>
                </Card>
            </div>
        )
    }
}

export default DownUpTest

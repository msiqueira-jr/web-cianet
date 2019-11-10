import React, { Component } from 'react'

import './Login.css'
import { Button } from "shards-react";



export class Login extends Component {
    render() {
        return (
                <div class="login-page">
                    <div class="form">
                    <img src={require("../images/beegol_logo.png")} alt="Avatar" class="avatar"></img>                    
                        <form class="register-form">
                            <input type="text" placeholder="name" />
                            <input type="password" placeholder="password" />
                            <input type="text" placeholder="email address" />
                            <button>create</button>
                        </form>
                        <form class="login-form">
                            <input type="text" placeholder="username" />
                            <input type="password" placeholder="password" />
                            <Button href='/'>Login</Button>
                        </form>
                    </div>
                </div>
        )
    }
}

export default Login

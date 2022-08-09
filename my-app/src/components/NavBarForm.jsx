import React, { Component } from 'react'

import css from "./css/NavBarForm.module.css"

export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true,
         buttonText: "Log Out",
         message: "Hello, guest!",
      }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn,
            buttonText: prevState.buttonText === "Log Out" ? "Log In" : "Log Out",
            message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
        }))
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                {this.state.isLoggedIn ? 
                    (<form id="login-form" action="">
                        <label htmlFor="username">Username:</label>
                        <input name="username" type="text" />
                        <label htmlFor="password">Password:</label>
                        <input name="password" type="text" />
                        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                    </form>
                    ):(
                    <div>
                        <span>{this.state.message}</span>
                        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                    </div> 
                )}
            </div>
        )}
    }

export default NavBarForm
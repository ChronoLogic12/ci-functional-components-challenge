import React from "react";

import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Hello, guest!",
            accountButtonText: "Log In",
        }
    }

    handleClick = () => {
        this.setState((prevState, prevProps) => {
            return {
                message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                accountButtonText: prevState.accountButtonText === "Log In" ? "Log Out" : "Log In",
            };
        });
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick={() => this.handleClick()}>{this.state.accountButtonText}</button>
                </div>
            </div>
        )
    }

}

export default NavBarSimple;
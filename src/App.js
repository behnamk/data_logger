import React, {Component} from "react";
import './style.login.css';
import {BrowserRouter as Router, NavLink, Switch, Route, Link} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import MainLogin from "./pages/login/mainLogin";

function RouteDashboard(props) {
    if (props){

    }

}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameBtn: "loginBtn"
        }
    }


    render() {
        return (
            <React.Fragment>
                {/*<MainLogin/>*/}
                <RouteDashboard/>
            </React.Fragment>
        )
    }
}

export default App
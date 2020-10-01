import React, {Component} from "react";
import user from '../image/user.svg'
import lock from '../image/padlock.svg'
import {BrowserRouter as Router, NavLink, Switch, Route, Link} from "react-router-dom";
import Dashboard from "../dashboard";
import Register from "./register";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false
        }
    }

    onNavigateHome = () => {
        const valueResult = true
        if (valueResult) {
            alert('go to dashboard')

        } else {
            alert('no register')
        }
    }


    render() {

        return (
            <React.Fragment>
                <form style={{marginTop: 40}} action="/action_page.php" className="was-validated">
                    <div className="form-group " style={{paddingRight: 40, paddingLeft: 40}}>
                        <div className="input-group mb-3">
                            <input className="form-control" dir="rtl" type="text" placeholder="ایمیل"
                                   autoComplete="username"/>
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <img height={20} src={user} alt='user'/>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input className="form-control" dir='rtl' type="text" placeholder="رمز عبور"
                                   autoComplete="username"/>
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <img height={20} src={lock} alt='padlock'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group form-check"
                         style={{paddingRight: 40, paddingLeft: 40, paddingTop: 20, paddingBottom: 20}}>
                    </div>
                    <button type="submit" value={this.state.loggedIn ? <h1>salam</h1> : <h1>welcome</h1>}
                            onClick={this.onNavigateHome} className="btn btn-primary btn-block">ورود
                    </button>
                </form>
                <Router>
                    {/*<Route exact path="/" component={App}/>*/}
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/register" component={Register}/>
                </Router>

            </React.Fragment>
        )
    }
}

export default Login
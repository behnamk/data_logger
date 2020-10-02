import React, {Component} from "react";
import user from '../image/user.svg'
import lock from '../image/padlock.svg'
import {BrowserRouter as Router, NavLink, Switch, Route, Link} from "react-router-dom";
import Dashboard from "../dashboard";
import Register from "./register";

class Login extends Component {
    constructor(props) {
        super(props);
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
                <Router>
                    <Switch>
                        {/*<form style={{marginTop: 40}} action="/action_page.php" className="was-validated">*/}
                        {/*    <div className="form-group " style={{paddingRight: 40, paddingLeft: 40}}>*/}
                        {/*        <div className="input-group mb-3">*/}
                        {/*            <input className="form-control" dir="rtl" type="text" placeholder="ایمیل"*/}
                        {/*                   autoComplete="username"/>*/}
                        {/*            <div className="input-group-prepend">*/}
                        {/*                <div className="input-group-text">*/}
                        {/*                    <img height={20} src={user} alt='user'/>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="input-group mb-3">*/}
                        {/*            <input className="form-control" dir='rtl' type="text" placeholder="رمز عبور"*/}
                        {/*                   autoComplete="username"/>*/}
                        {/*            <div className="input-group-prepend">*/}
                        {/*                <div className="input-group-text">*/}
                        {/*                    <img height={20} src={lock} alt='padlock'/>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="form-group form-check"*/}
                        {/*         style={{paddingRight: 40, paddingLeft: 40, paddingTop: 20, paddingBottom: 20}}>*/}
                        {/*    </div>*/}
                        {/*    <button type="submit"*/}
                        {/*            onClick={'Dashboard'} className="btn btn-primary btn-block">ورود*/}
                        {/*    </button>*/}
                        {/*</form>*/}
                        {/*<Route exact path="/" component={App}/>*/}
                        <Route exact path="/dashboard" component={Dashboard}/>
                        <Route path="/register" component={Register}/>

                        <Route component={Dashboard}/>
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }
}

export default Login
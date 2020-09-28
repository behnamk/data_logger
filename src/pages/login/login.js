import React, {Component} from "react";
import user from '../image/user.svg'
import lock from '../image/padlock.svg'
import Dashboard from "../dashboard";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    onNavigateHome(props) {
        this.props.history.push("/dashboard")
    }

    render() {
        console.log(this.state.loggedIn)
        return (
            <React.Fragment>
                <form style={{marginTop: 40}} action="/action_page.php" className="was-validated">
                    <div className="form-group " style={{paddingRight: 40, paddingLeft: 40}}>
                        <div className="input-group mb-3">
                            <input className="form-control" dir="rtl" type="text" placeholder="username"
                                   autoComplete="username"/>
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <img height={20} src={user} alt='user'/>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input className="form-control" dir='rtl' type="text" placeholder="username"
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
                            onClick={this.onNavigateHome} className="btn btn-primary btn-block">Submit
                    </button>
                </form>
            </React.Fragment>
        )
    }
}

export default Login
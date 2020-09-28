import React, {Component} from "react";
import user from "../image/user.svg";
import lock from "../image/padlock.svg";

class Register extends Component{
    constructor() {
        super();
    }
    render() {
        return(
            <React.Fragment>
                <React.Fragment>
                        <form style={{marginTop: 40}} action="/action_page.php" className="was-validated">
                            <div className="form-group " style={{paddingRight: 40, paddingLeft: 40}}>
                                <div className="input-group mb-3" >
                                    <input className="form-control" dir="rtl" type="text" placeholder="username" autoComplete="username"/>
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <img height={20} src={user} alt='user'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input className="form-control" dir='rtl' type="text" placeholder="username" autoComplete="username"/>
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <img height={20} src={lock} alt='padlock'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input className="form-control" dir='rtl' type="text" placeholder="username" autoComplete="username"/>
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <img height={20} src={lock} alt='padlock'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input className="form-control" dir='rtl' type="text" placeholder="username" autoComplete="username"/>
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <img height={20} src={lock} alt='padlock'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input className="form-control" dir='rtl' type="text" placeholder="username" autoComplete="username"/>
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
                            <button type="submit" className="btn btn-primary btn-block">ایجاد</button>
                        </form>
                </React.Fragment>

            </React.Fragment>
        )
    }
}
export default Register
import React, {Component} from "react";
import Login from "./login";
import Register from "./register";
import user from "../image/user.svg";
import lock from "../image/padlock.svg";
import {Switch} from "react-router-dom";

class MainLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameBtn: "loginBtn"
        }
    }

    handlerClick = (action) => {
        this.setState({
            nameBtn: action
        })
    };

    render() {
        return (
            <div className=" c-app c-dark-theme c-default-layout flex-row align-items-center">
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-md-6">
                            <div className="card-group">
                                <div className="p-3 card" style={{backgroundColor: "#23242d"}}>
                                    <div className="card-body">
                                        <div className="btn-group col-12 " style={{height: 80, padding: 0, margin: 0}}>
                                            <button type="button" className="btn btn-primary col-12"
                                                    onClick={() => this.handlerClick('loginBtn')}>ورود به پنل
                                            </button>

                                            <button type="button" className="btn btn-primary col-12"
                                                    onClick={() => this.handlerClick('registerBtn')}>ثبت نام
                                            </button>
                                        </div>

                                        {/*login btn*/}
                                        {this.state.nameBtn === 'loginBtn' &&
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
                                            <button type="submit"
                                                    onClick={'Dashboard'} className="btn btn-primary btn-block">ورود
                                            </button>
                                        </form>

                                        }
                                        {/*register btn*/}
                                        {this.state.nameBtn === 'registerBtn' &&
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

                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainLogin
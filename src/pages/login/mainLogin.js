import React,{Component} from "react";
import Login from "./login";
import Register from "./register";

class MainLogin extends Component{
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
        return(
            <div className=" c-app c-dark-theme c-default-layout flex-row align-items-center">
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-md-6">
                            <div className="card-group">
                                <div className="p-3 card" style={{backgroundColor: "#23242d"}}>
                                    <div className="card-body">
                                        <div className="btn-group col-12 " style={{height: 80, padding: 0, margin: 0}}>
                                            <button type="button" className="btn btn-primary col-12"
                                                    onClick={() => this.handlerClick('registerBtn')}>Register
                                            </button>

                                            <button type="button" className="btn btn-primary col-12"
                                                    onClick={() => this.handlerClick('loginBtn')}>Login
                                            </button>
                                        </div>

                                        {this.state.nameBtn === 'loginBtn' && <Login/>}
                                        {this.state.nameBtn === 'registerBtn' && <Register/>}

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
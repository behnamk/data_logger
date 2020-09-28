import React, {Component} from "react";
import Register from "./pages/login/register";
import Login from "./pages/login/login";
import './style.login.css';


class App extends Component {
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
                                <div className="p-3 card" style={{backgroundColor:"#23242d"}}>
                                    <div className="card-body">
                                        <div className="btn-group col-12 " style={{height: 80, padding: 0, margin:0}}>
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
            // <React.Fragment>
            //     <div className= "card-body d-block mx-auto col-8 col-sm-8 col-md-5 col-lg-4 col-xl-3 ">
            //         <div className="btn-group col-12 " style={{height: 80, padding: 0}}>
            //
            //             <button type="button" className="btn btn-primary col-12"
            //                     onClick={() => this.handlerClick('loginBtn')}>Login
            //             </button>
            //
            //             <button type="button" className="btn btn-primary col-12"
            //                     onClick={() => this.handlerClick('registerBtn')}>Register
            //             </button>
            //         </div>
            //         {this.state.nameBtn === 'loginBtn' && <Login/>}
            //         {this.state.nameBtn === 'registerBtn' && <Register/>}
            //     </div>
            // </React.Fragment>
        )
    }
}

export default App
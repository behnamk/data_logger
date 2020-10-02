import React, {Component} from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div dir="rtl">
                <div className="jumbotron p-4" style={{margin: 2}}>

                </div>
                <div className="d-flex mb-3 bg-secondary">
                    <div dir="rtl" style={{color: "black", width:200}}>
                        <ul className="list-group" style={{margin: 1, padding: 1}}>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Inbox
                                <span className="badge badge-primary badge-pill">51</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Ads
                                <span className="badge badge-primary badge-pill">50</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Junk
                                <span className="badge badge-primary badge-pill">99</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-5 flex-fill bg-warning" style={{background:"red", height:700}}>

                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard


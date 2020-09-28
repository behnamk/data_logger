import React, {Component} from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div dir="rtl" style={{padding:0, margin:0}}>
                <div>
                    <div>
                        <ul className="nav nav-list">
                            <li className="nav-header">List header</li>
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Library</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard


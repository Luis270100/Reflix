import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../css/Home.css'

export class Home extends Component {


    render() {

        let users = this.props.users
        return (
            <div id="Home">
                <div>WHO'S WATCHING?</div>
                {users.map((u, index) => {
                    return <div id={u.name} className="users" key={index}>
                        <Link to="/catalog"> {u.name}</Link> </div>
                })}
            </div>)
    }
}

// export default Home



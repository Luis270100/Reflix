import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import '../Public/css/Home.css';

export class Home extends Component {


    render() {

        let users = this.props.users
        console.log(users);
        
        return (
            <div id="Home">
                <div className="subtitle">WHO'S WATCHING?</div>
                <div className="users">
                {users.map((u, index) => {
                    return <Link to="/catalog" key={index} style={{ textDecoration: 'none'}}>
                            <div id={u.name}  className="user-container">
                            <div className="user-icon" style={{backgroundColor: u.color}}></div>
                                <p className="user-name">{u.name}</p>
                            </div>
                            </Link>
                })}
                </div>
            </div>)
    }
}

// export default Home



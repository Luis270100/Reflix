import React, { Component } from 'react';
import '../css/Home.css'

export class Home extends Component {

    render() {

        let users = this.props.state.users
        return (
            <div id="Home">
                <div>WHO'S WATCHING?</div>
                {users.map((u, index) => {
                    return <div id={u.name} className="users" key={index}> {u.name} </div>
                })}
            </div>)
    }
}

// export default Home



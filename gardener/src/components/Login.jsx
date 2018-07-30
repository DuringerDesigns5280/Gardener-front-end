import React from 'react'

class Login extends React.Component {

    handleSubmit(e) {
        e.preventDefault()
        const userName = this.refs.userName.value
        this.props.login(userName)
    }

    render() {
        return (
            <div className='loginForm'>
                <form className="ui form" ref="login-form" onSubmit={this.handleSubmit.bind(this)} >
                    <div className="field">
                        <label>Enter username</label>
                        <input ref="userName" placeholder="username" type="text" className="userName" />
                    </div>
                   
                    <button type="submit" className="ui button">Submit</button>
                </form >
                <br /><hr /><br />
                <a href="/signup"><button className="ui button">Sign Up</button></a>
            </div>
        )
    }

}

export default Login
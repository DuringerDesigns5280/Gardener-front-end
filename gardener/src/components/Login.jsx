import React, { Component } from 'react';

 class Login extends Component {
    state = {
        name: '',
        description: '',
        imgUrl: ''
    }
    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className='loginForm'>
                <form className="ui form" ref="login-form" >
                    <div className="field">
                        <label >Plant Name</label>
                        <input type="text" onChange={this.handleChange} value={this.state.name} type="text" name="name" />
                    </div>
                    <div className="field">
                    <label>Description</label>
                        <input onChange={this.handleChange} value={this.state.description}  type="text"  name="description" />
                    </div>
                    <div className="field">
                        <label>Image</label>
                        <input onChange={this.handleChange} value={this.state.imgUrl}  type="text"  name="imgUrl"/>
                    </div>
                    <button type="submit" className="ui button" onClick={(event) => this.props.makeCard(event, this.state)}>Submit</button>
                </form >
                <br /><hr /><br />
    
            </div>
        )
    }

}

export default Login
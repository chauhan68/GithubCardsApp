import React, { Component } from 'react';

export default class AddUserForm extends Component {
    constructor(props) {
        super(props)
        // this.userNameRef = createRef();
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChangeEvent = this.onChangeEvent.bind(this)
        this.state = {
            username: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Value', this.state.username);
        const details = await fetch(`https://api.github.com/users/${this.state.username}`);
        const newUserData = await details.json();
        console.log('Details', newUserData);
        this.props.addUserCallBack(newUserData);
        this.setState({
            username: ''
        })
        
    }

    onChangeEvent = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder='Add Github Username' value={this.state.username} required onChange={this.onChangeEvent}/>
                <button> Add Card </button>
            </form>
        )
    }
}
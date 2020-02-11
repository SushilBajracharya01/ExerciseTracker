import React, { Component } from 'react';
import axios from 'axios';


class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
        }
    }


    onChangeUserName(e) {
        this.setState({
            username: e.target.value
        });
    }
    
    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add',user)
            .then( res => console.log(res.data));

        
        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div className="bg-light container-fluid p-3 p-md-4">
                <h1>Create New User</h1>
                <form onSubmit={this.onSubmit}>
                        
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value= {this.state.username}
                            onChange={this.onChangeUserName}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateUser;
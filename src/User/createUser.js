import React, { Component } from "react";

export default class CreateUserPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: ""
        };
    }
    handleSubmitClick = () => {
        this.state.firstName = document.getElementById('firstName').value
        this.state.lastName = document.getElementById('lastName').value
        this.state.email = document.getElementById('email').value
        const response =  fetch("http://localhost:3000/users", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(this.state) // body data type must match "Content-Type" header
        });
        console.log(response.json())
        console.log(this.state)
        return response.json(); // parses JSON response into native JavaScript objects
    };

    render() {
        return (
            <div className="modal">
                <div className="modal_content">
          <span className="close" onClick={this.props.toggle}>
            &times;
          </span>
                    <form>
                        <h3>Create New User</h3>
                        <label>
                            firstName:
                            <input type="text" id="firstName" />
                            <br/>
                        </label>
                        <label>
                            lastName:
                            <input type="text" id="lastName" />
                            <br/>
                        </label>
                        <label>
                            email:
                            <input type="text" id="email" />
                            <br/>
                        </label>
                        <br />
                        <input type="submit" onClick={this.handleSubmitClick} />
                    </form>
                </div>
            </div>
        );
    }
}

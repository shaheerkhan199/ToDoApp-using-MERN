import React, { Component } from 'react';
import axios from "axios";

class Form extends Component {
    state = {
        taskName:'',
        taskDesc:'',
    };

    // Setting the user inputed values in state
    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]:value,
        });
    }

    // reseting user input after submitting form
    resetUserInputs = () => {
        this.setState({
            taskName:'',
            taskDesc:'',
        });
    }

    // For submiting form when click on submit button (api hit)
    submitData = (e) => {
        e.preventDefault();
        const dataToBeSaved = this.state;
        axios({
            url:'/save',
            method:'POST',
            data:dataToBeSaved
        })
        .then(() => {
            console.log("Data Inserted Successfully");
            this.resetUserInputs();
            console.log(this.state);
        })
        .catch(() => {
            console.log("Internal Server Error");
        });
    }

    render() {
        return (
            <div className="container text-center">
                <h1>Simple ToDo App</h1>
                <div className="col-7 mx-auto">
                <form onSubmit={this.submitData}>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="taskName"
                            placeholder="Task here"
                            value={this.state.taskName}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <textarea 
                            name="taskDesc"
                            placeholder="Task Description"
                            rows="5"
                            cols="30"
                            value={this.state.taskDesc}
                            onChange={this.handleChange}
                            className="form-control"
                        >
                            </textarea>
                    </div>
                    <div>
                        <button className="btn btn-success">Submit</button>
                    </div>
                </form>
                </div>
                
            </div>
        );
    }
}

export default Form;
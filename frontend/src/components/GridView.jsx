import React, { Component } from "react";
import axios from "axios";

class GridView extends Component {

    state = {
        tasks:[],
    }

    componentDidMount = () => {
        this.getAllTasks();
    }
    
    // getting all the data from database to show on frontend
    getAllTasks = () => {
        axios.get('/api')
        .then((response) => {
            const data = response.data;
            this.setState({ tasks:data });
            console.log(data);
        })
        .catch(() => {
            alert("Error Retrieving Data");
        })
    }
    
    deleteTask = (e) => {
        console.log(e.target.name);
        const task_id = e.target.name;
        axios.delete('/delete',{ data:{_id:task_id} } );  
    }

  render() {
    return (
      <div>
        <div className="row clearfix">
          <div className="col-md-12 table-responsive">
            <table
              className="table table-bordered table-hover table-sortable text-center"
              id="tab_logic"
            >
              <thead className="bg-secondary text-light">
                <tr>
                  <th className="text-center">Task ID</th>
                  <th className="text-center">Task Name</th>
                  <th className="text-center">Task Desc</th>
                  <th className="text-center">Edit or Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* Looping for printing values which is fetched from database */}
                {
                    this.state.tasks.map((value, index) => (
                    <tr id="addr0" data-id="0" className="hidden">
                  <td data-name="name">
                    <p key={index}>{value._id}</p>
                  </td>
                  <td data-name="mail">
                    <p key={index}>{value.taskName}</p>
                  </td>
                  <td data-name="desc">
                    <p key={index}>{value.taskDesc}</p>
                  </td>
                  <td data-name="del" className="text-center">
                    <button
                      name="del0"
                      className="btn btn-warning glyphicon glyphicon-remove row-remove"
                    >Edit
                    </button>
                    &nbsp;
                    <button
                      name="del0"
                      onClick={this.deleteTask}
                      name={value._id}
                      className="btn btn-danger glyphicon glyphicon-remove row-remove"
                    >Delete
                    </button>
                  </td>
                </tr>
                    ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default GridView;

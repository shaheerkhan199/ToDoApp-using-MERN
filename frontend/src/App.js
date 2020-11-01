import React from 'react';
import Form from "./components/Form";
import GridView from "./components/GridView";

class App extends React.Component {
  render(){
  return (
    <div className="container">
      <Form/>
      <hr/>
      <GridView/>
    </div>
    );
  }
}

export default App;

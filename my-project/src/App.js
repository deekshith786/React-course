import { render } from '@testing-library/react';
import './App.css';
import React, { Component} from 'react';
import DynamicForm from './Components/DynamicForm';

class  App extends Component {

  state = {
    data:[
      {id:1, name:"a", age:25, qualification:"B.tech", rating:"3"},
      {id:1, name:"a", age:26, qualification:"B.tech", rating:"3"},
      {id:1, name:"a", age:257, qualification:"B.tech", rating:"3"},  
    ]
     
  }

  onSubmit = (model)=>{
    model.id = +new Date();
   alert(JSON.stringify(model));
   this.setState({
     data: [model, ...this.state.data]
   })
  }

  render(){
    return (
      <div className="App">
        <DynamicForm  className="form"
            title = "Registration"
            model= {[
              {key:"name", label:"Name", props:{required: true}},
              {key:"age", label:"Age", type : "number"},
              {key:"rating", label:"Rating", type : "number", props:{min: 0, max:5}},
              {key:"qualification", label:"Qualification"}    
            ]}
             onSubmit ={(model) =>{this.onSubmit(model)}}
          />         
          <pre style={{width:"30px"}}>
            {JSON.stringify(this.state.data)}
          </pre>   
      </div>
    );
  }
}

export default App;

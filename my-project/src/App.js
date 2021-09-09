import './App.css';
import React, { Component} from 'react';
import DynamicForm from './Components/DynamicForm';

class  App extends Component {

  state = {
    data:[
      {id:1, name:"a", age:25, qualification:"B.tech", rating:"3", city: "kerala", 
        gender:"male", skills:["react"]},
      {id:1, name:"a", age:26, qualification:"B.tech", rating:"3", city: "bombay", 
      gender:"female", skills:["angular"]},
      {id:1, name:"a", age:257, qualification:"B.tech", rating:"3", city: "Hyderabad", 
      gender:"female", skills:["react", "angular"]},  
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
              {key:"qualification", label:"Qualification"},   
              {key: "gender", label: "Gender", type: "radio", options:[
                {key: "male", label: "Male", name:"gender", value: "male"},
                {key: "female", label: "Female", name:"gender", value: "female"}
              ]},
              {key: "city", label: "City", type: "select", options:[
                {key: "mumbai", label: "Mumbai", value: "Mumbai"},
                {key: "bangalore", label: "Bangalore", value: "Bangalore"},
                {key: "kerala", label: "Kerala", value: "Kerala"},
              ]}, 
              ,
              {key: "skills", label: "Skills", type: "checkbox", options:[
                {key: "reactjs", label: "Reactjs", value: "Reactjs"},
                {key: "angular", label: "Angular", value: "Angular"},
                {key: "vuejs", label: "Vuejs", value: "Vuejs"},
              ]}, 
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

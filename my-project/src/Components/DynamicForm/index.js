import React from 'react';
import { ReactDOM } from 'react';
import './form.css';

export default class DynamicForm extends React.Component{
    
    state = {

    }

    constructor(props){
        super(props);
    }

    onSubmit = (e)=>{
        e.preventDefault();
        if(this.props.onSubmit) this.props.onSubmit(this.state);
    }
    onChange = (e, key)=>{
        this.setState({
            [key]: this[key].value
        })
    }

    renderForm = () => {
        let model= this.props.model;
        let formUI = model.map((m)=>{

            let key = m.key;
            let type = m.type || "text";
            let props= m.props || {};
            let name =m.name;
            let target = key;
            let value = this.state[target];
            let input = <input {...props}                        
                        className="form-input"
                        type={type}
                        key={m.key}
                        name={name}
                        value={value} 
                        onChange={(e)=>{this.onChange(e, target)}}   
                        />;
            if(type === "radio"){
                input =m.options.map((o) =>{
                    return (<React.Fragment key={'fr'+ o.key}>
                        <input {...props}
                            className= "form-input"
                            type={type}
                            key={o.key}
                            name={o.name}
                            value={o.value}
                            onChange={(e)=>{this.onChange(e, o.name)}}    
                        />       
                        <label key ={"ll" + o.key}>{o.label}</label>             
                    </React.Fragment>)
                });
                input = <div className="form-group-radio">{input}</div>;
            }

            return(
                <div key= {key} className="form-group">
                    <label className="form-label"
                        key={"l" + m.key}
                        htmlFor={m.key}>
                        {m.label}
                    </label> 
                    {input}
                </div>
            );
        });
        return formUI
    }
    
    render(){

        let title = this.props.title || "Dynamic Form";

        return(
            <div className={this.props.className}>
                <h3 className="form-title">{title}</h3>
                <form className ="dynamic-form" onSubmit = {(e)=>{this.onSubmit(e)}}>
                    {this.renderForm()}
                    <div className="form-action">
                        <button type= "submit">submit</button>
                    </div>
                </form>

            </div>
        )
    }
}
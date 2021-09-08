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
            let ptops= m.props || {};
            return(
                <div key= {key} className="formgroup">
                    <label className="formlabel"
                        key={"l" + m.key}
                        htmlFor={m.key}>
                        {m.label}
                    </label> 
                    <input {...this.props}
                        ref={(key)=>{this[m.key]=key}}
                        className="forminput"
                        type={type}
                        key={"i" + m.key} 
                        onChange={(e)=>{this.onChange(e, key)}}   
                    />
                </div>
            );
        });
        return formUI
    }
    
    render(){

        let title = this.props.title || "Dynamic Form";

        return(
            <div className={this.props.className}>
                <form className ="fynamic form" onSubmit = {(e)=>{this.onSubmit(e)}}>
                    {this.renderForm()}
                    <div className="formgroup">
                        <button type= "submit">submit</button>
                    </div>
                </form>

            </div>
        )
    }
}
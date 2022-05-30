import React, { Component } from 'react';

class Form extends Component {

    state = {
        data: {},
        errors: {}
    }

    handleChange = ({ currentTarget:input }) =>{
        const name = input.name;
        const value = input.value;
  
        const error = this.validateInput(name,value);
  
        const data = { ...this.state.data } //updatedUser = { userName: '', password: '' } 
        data[name] = value;
  
        const errors = {...this.state.errors};
        errors[name] = error;
  
        this.setState({ data, errors })   
        // console.log(this.state);
      }

      validateInput = (name,value) =>{
        // console.log(name); return
        if(name === "userName"){
          if(value.trim() === '') return "UserName must not be empty";
        }
  
        if(name === "password"){
          if(value.trim()==='') return "Password must not be empty";
        }
  
        return '';
      }
  
    // render() { 
    //     return (

    //     );
    // }
}
 
export default Form;
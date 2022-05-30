import React, { Component } from "react";
import Input from "./input.component";

class SignUp extends React.Component {
    state = { 
        user: { firstName: '',
                lastName: '' ,
                email: '',
                password: ''
              },
        errors: {
            firstName: '',
            lastName: '' ,
            email: '',
            password: ''
        },
        data: []
      }

      handleSubmit = e =>{
          e.preventDefault();
        //   const firstName = e.target[0].value;
        //   const lastName = e.target[1].value;
        //   const email = e.target[2].value;
        //   const password = e.target[3].value;

          const user = {...this.state.user};
          const value = [...this.state.data];
          value.push(user);
          this.setState({...this.state, data:value})

          
        //   const value = [...this.state.data];
        //   console.log(typeof(value)); return
        //   const data = value.push(user);
        //   this.setState({...this.state,data})
        //   console.log(this.state.data)
          
      }

      validateInput = (name,value) =>{
          if(name === `${name}`){
            if(value.trim() === '') return `${name} can not be empty`;
          }
          return '';
      }
  
    onChange = e =>{
        const name = e.target.name;
        const value = e.target.value;

        const error = this.validateInput(name,value);
        
        const errors = {...this.state.errors};
        errors[name] = error;
        this.setState({ errors });

        const user = { ...this.state.user }
        user[name] = value;

        this.setState({ user });

    }
  render() {
    return (
      <div className="container w-50">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <Input
              label="First Name"
              type="text"
              id="firstName"
              name="firstName"
              onChange={this.onChange}
              errors={this.state.errors}
              />
          </div>

          <div className="mb-3">
            <Input
              label="Last Name"
              type="text"
              id="lastName"
              name="lastName"
              onChange={this.onChange}
              errors={this.state.errors}
              />
          </div>

          <div className="mb-3">
            <Input
              label="Email"
              type="email"
              id="email"
              name="email"
              onChange={this.onChange}
              errors={this.state.errors}
              />
          </div>

          <div className="mb-3">
            <Input
              label="Password"
              type="password"
              id="password"
              name="password"
              onChange={this.onChange}
              errors={this.state.errors}
              />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div>{this.state.data.map(record=>{return record.firstName})}</div>
      </div>
    );
  }
}

export default SignUp;

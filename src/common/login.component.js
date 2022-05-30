// import React, { Component } from "react";
import Input from "./input.component";
import Form from "./form.component";

class Login extends Form {

    state = { 
      data: { userName: '',
              password: '' 
            },
      errors: {
        userName: '',
        password: ''
      }
    }

    handleSubmit = e =>{
      e.preventDefault();
      const userName = e.target[0].value;
      const password = e.target[1].value;

      if(userName === 'admin' && password === '1234'){
        this.props.history.push('/movies');
      }else{
        const errors = {...this.state.errors};

        errors.userName = "UserName is incorrect";
        errors.password = "Password is incorrect";

        this.setState({errors});
      }
      console.log(e)
    }
    
    

    // handleChange = e =>{
    //   const name = e.target.name;
    //   const value = e.target.value;

    //   const error = this.validateInput(name,value);

    //   const user = { ...this.state.user } //updatedUser = { userName: '', password: '' } 
    //   user[name] = value;

    //   const errors = {...this.state.errors};
    //   errors[name] = error;

    //   this.setState({ user, errors })   
    //   // console.log(this.state);
    // }

  render() {
    return (
      <div className="container w-50">
        <form onSubmit={ this.handleSubmit }>
          <div className="mb-3">
            <Input
              label = "User Name"
              type="text"
              id="userName"
              name="userName"
              onChange = { this.handleChange }
              errors = { this.state.errors }
            />
          </div>
          <div className="mb-3">
              <Input
                label = "Password"
                type="password"
                id="password"
                name="password"
                onChange = { this.handleChange }
                errors = { this.state.errors }
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
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

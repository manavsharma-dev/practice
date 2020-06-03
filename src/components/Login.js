import React from 'react';

import Workspace from './Workspace';
import { Link } from 'react-router-dom';

export default class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      isSubmitted:false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleRoute = this.handleRoute.bind(this);
  }

handleChange(){
  
  this.setState({
    email:this.userName.value,
    password:this.userPass.value
  })

}



handleSubmit(event){
  event.preventDefault();
  console.log(this.state);
  console.log(this.state.email);
}


// handleRoute(event){
//   event.preventDefault();
//   const route = <Workspace username={this.state.userName}/>;
//   return route;
// }


  render(){

    return(
      <div className='HomePage'>
        <h1>Hello, Welcome!! </h1>
        <form onSubmit={this.handleSubmit}>
          <div className='username' name='username'>
            <label>Enter Username</label>
            <br/>
            <input ref={userName => this.userName = userName} type='text' onChange={this.handleChange} placeholder ='Username'/>
            <br/>
           </div>
        <div className='password' name='password'>
            <label>Enter Password</label>
            <br/>
            <input ref={userPass => this.userPass = userPass} type='text' onChange={this.handleChange} placeholder ='Password'/>
            <br/>
              <input type='submit' value='Submit'/>
          </div>
        </form>
      {/* { this.state.isSubmitted === true && <Workspace username={this.state.email}/>} */}
      
      <Link to ='/'>Welcome</Link>
      </div>
    );
  }
}
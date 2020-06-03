import React from 'react';
import { Link } from 'react-router-dom'


export default class Signup extends React.Component{

    render(){
        console.log("signup");
      return(
        <div className='signup'>
          <h1>Sign Up </h1>
          <form>
            <div className='username' name='username'>
              <label>Enter Username</label>
              <br/>
              <input ref={userName => this.userName = userName} type='text' placeholder ='Username'/>
              <br/>
            </div>


            <div className='age' name='age'>
              <label>Enter Age</label>
              <br/>
              <input ref={userName => this.userName = userName} type='number' placeholder ='Age'/>
              <br/>
            </div>

            <div className='email' name='email'>
              <label>Enter Email</label>
              <br/>
              <input ref={userName => this.userName = userName} type='email' placeholder ='Email'/>
              <br/>
            </div>

            <div className='password' name='password'>
              <label>Enter Password</label>
              <br/>
              <input ref={userPass => this.userPass = userPass} type='text' placeholder ='Password'/>
              <br/>
                <input type='submit' value='Submit'/>
            </div>
          </form>
        <br/>
        <Link to ='/login'>Login</Link>
        </div>
      );
    }
  }
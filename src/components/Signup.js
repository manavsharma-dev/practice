import React from 'react';
import { Link } from 'react-router-dom'


export default class Signup extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name:'',
            age:'',
            email:'',
            password:''
        }

        this.handle_Change = this.handle_Change.bind(this);
        this.handle_Submit = this.handle_Submit.bind(this);

    }

    handle_Change(){
        this.setState({
            name:this.userName.value,
            age:this.age.value,
            email:this.email.value,
            password:this.userPass.value
        });
    }


    handle_Submit(event){
        event.preventDefault();
        console.log(this.state);
    }



    render(){

      return(
        <div className='signup'>
         { console.log("in signup component") }
          <h1>Sign Up </h1>
          <form onSubmit={this.handle_Submit}>
            <div className='username' name='username'>
              <label>Enter Username</label>
              <br/>
              <input ref={userName => this.userName = userName} type='text' onChange = { this.handle_Change } placeholder ='Username'/>
              <br/>
            </div>


            <div className='age' name='age'>
              <label>Enter Age</label>
              <br/>
              <input ref={age => this.age = age} type='number'  onChange = { this.handle_Change }  placeholder ='Age'/>
              <br/>
            </div>

            <div className='email' name='email'>
              <label>Enter Email</label>
              <br/>
              <input ref={email => this.email = email} type='email'  onChange = { this.handle_Change }  placeholder ='Email'/>
              <br/>
            </div>

            <div className='password' name='password'>
              <label>Enter Password</label>
              <br/>
              <input ref={userPass => this.userPass = userPass} type='text'  onChange = { this.handle_Change }  placeholder ='Password'/>
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
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//welcome page of the syatem , from where we can go to any route

export default class Welcome extends Component{
    render(){
        const root = { background:'yellow', color:'black',height:'150vh'};

        return (
            <div align='center'>
                { console.log("in welcome component") }
                <h1>Welcome in the System....</h1>
                
                {/* <img height='450px' width='450px' align='center' alt='LOGO' /> */}
                
                <br/>
                <br/>
                <Link to ='/signup'>Signup</Link>
                <br/>
                <Link to ='/login'>Login</Link>
                <br/>
                <Link to ='/about'>About Us</Link>
                <br/>
                <Link to ='/counter'>Counter</Link>
                <br/>

            </div>
        );
    }
}
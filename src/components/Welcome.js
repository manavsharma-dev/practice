import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Welcome extends Component{
    render(){
        return (
            <div>
                <h1 text='center' >Welcome in the System....</h1>

                <br/>
                <Link to ='/signup'>Signup</Link>
                <br/>
                <Link to ='/login'>Login</Link>
                <br/>
                <Link to ='/about'>About Us</Link>
                <br/>

            </div>
        );
    }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from './public/logo.svg';


export default class Welcome extends Component{
    render(){
        const root = { background:'black', color:'white',height:'150vh'};
        
        return (
            <div>
                <h1 text='center' >Welcome in the System....</h1>
                
                {/* <img height='450px' width='450px' align='center' alt='LOGO' /> */}
                
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
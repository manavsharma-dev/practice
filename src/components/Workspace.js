import React from 'react';


export default class Workspace extends React.Component{
  render(){
    return(

      <div className='workspace'>
        <h1> {this.props.username}'s' Workspace :) !! </h1>
      </div>

    );
  }
}
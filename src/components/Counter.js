
import React, { Component } from 'react';

import { connect } from 'react-redux';


//a simple counter implemented through redux, with iincrement and decrement functions


class Counter extends Component{
    constructor(props){
        super(props);

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment(){
        console.log("in", this.props.count);
        this.props.dispatch({type:"INCREMENT"});
    };

    decrement(){
        console.log("de", this.props.count);
        this.props.dispatch({type:"DECREMENT"});
    };

    render(){
        return(
            <div className='counter'>
                <h2>Cunter !!</h2>
                <div>
                    <button onClick = {this.decrement}> &ndash; </button>
                    <span className='count'> {this.props.count}</span>
                    <button onClick = {this.increment}> + </button>
                </div>
            </div>
        );
    }
}

const mapsStateToProps = state => ({
    count:state.count
});

export default connect(mapsStateToProps)(Counter);
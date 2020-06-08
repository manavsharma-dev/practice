import React from 'react';

import Workspace from './Workspace';
import { Link } from 'react-router-dom';

import { login } from './redux/reducer';
import { connect } from 'react-redux';


class LoginForm extends React.Component{

  constructor(props){
    super(props);


    this.state={}

    this.onSubmit = this.onSubmit.bind(this);
    // this.state = {
    //   email:'',
    //   password:'',
    //   isSubmitted:false
    // }

    // e=>this.setState({e.taget.value}) = e=>this.setState({e.taget.value}).bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleRoute = this.handleRoute.bind(this);
  }



  // componentDidCatch(error, errorInfo) { 
    
  //   console.log("error\n", error + "\n\n error info ", errorInfo);
  //   // You can also log the error to an error reporting service    logErrorToMyService(error, errorInfo);  
  // }


// handleChange(){

//   this.setState({
//     email:this.userName.value,
//     password:this.userPass.value
//   })




// handleSubmit(event){
//   event.preventDefault();
//   console.log(this.state);
//   console.log(this.state.email);
// }


// handleRoute(event){
//   event.preventDefault();
//   const route = <Workspace username={this.state.userName}/>;
//   return route;
// }


  render(){

    let { email,password } = this.state;
    let { pending_info, success_info, error_info} = this.props;


    return(
      
      <div className='HomePage' align='center'>

        { console.log("in login component") }
        {/* {console.log(`pending ${pending_info}.....\nsuccess${success_info}.......\nerror${error_info}`)} */}

        <h1>Hello, Welcome!! </h1>
        <form onSubmit={this.onSubmit}>
          <div className='username'>
            <label>Enter Username</label>
            <br/>
            <input name = 'email'type='email' onChange={e=>this.setState({email:e.target.value})} value={email} />
            <br/>
          </div>
          <br/>
          <div className='password'>
            <label>Enter Password</label>
            <br/>
            <input name='password' type='text' onChange={e=>this.setState({password:e.target.value})} value={password} />
            <br/>
            <br/>
              <input type='submit' value='Submit'/>
          </div>
        </form>
      {/* { this.state.isSubmitted === true && <Workspace username={this.state.email}/>} */}
{/*       
      <Link to ='/'>Welcome</Link> */}

        <div className='message'>
          { pending_info && <p>Please wait...</p> }
          { success_info && <p>Success.</p> }
          { error_info && <p>error : {error_info}</p> }
        </div>

      </div>
    );
  }

  onSubmit(e){
    e.preventDefault();
    // console.log("in onsubmit",this.state);
    let {email, password } = this.state;
    this.props.login(email,password);
    this.setState({
      email:'',
      password:''
    });
  }

}




const mapStateToProps = (state) => {
  return {
    pending_info: state.pending_info,
    success_info: state.success_info,
    error_info: state.error_info
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
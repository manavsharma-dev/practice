
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login';
import Workspace from './components/Workspace';
import Welcome from './components/Welcome';
import Signup from './components/Signup';

class App extends React.Component{

  componentDidMount() { 
    setTimeout(()=>{
      alert("Want to learn more \n Sign Up Now !! ")
    }, 5000);
    return console.log(" returning DiD Mount");
  }
  
  componentWillUnmount() { 
    console.log("component will unmount");
  }
  
  render(){
    return(

      <BrowserRouter>
        <div>

          <Switch>

            <Route exact path="/" component={ Welcome }/>
            <Route path="/login" component={ Login } />
            <Route path="/workspace" component={ Workspace } />
            <Route path="/signup" component={ Signup } />
            <Route path="/about" component={ ()=>{
              return (
                <div>
                  <p>Contact @ Google.com </p>
                </div>
                );
              } 
            } />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />
  ,document.getElementById('app'));

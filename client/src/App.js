import React, {Component} from "react";
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import axios from "axios";
import Login from "./components/Login.js";
import Home from "./components/Home.js";


class App extends Component{
  state={
    loaded:false,
    authenticated:false,
    
  }

  // componentDidMount=()=>{
  //   axios.get("/auth").then((res)=>{
  //     this.setState({loaded:true,
  //                    authenticated:res.data})
  //                    console.log('what the fuck')
  //   })
  // }
    setLogin=()=>{
      this.setState({authenticated:true})
    }

    render(){
      // if(!this.state.loaded){
      //   return null
      // }
      return(
        <Router>
          <div>
            <h1> Hello </h1>
            <Switch>
              <Route exact path="/login" render={(props)=><Login {...props} setLogin={this.setLogin}/>}/>
              {!this.state.authenticated ? <Redirect to='/login'/> : null}
              <Route exact path="/" component={Home}/>
              
            </Switch>
            </div>
          </Router>
      )
    }
  
}

export default App;
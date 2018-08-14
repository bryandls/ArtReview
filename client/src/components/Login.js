import React, {Component} from "react";
import "../App.css";
import axios from "axios"


class Login extends Component{
    state={
        userName:"",
        password:"",
        error:null
    }

    onStateChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    loginCheck = (event)=>{
        console.log("rock on")
    }
    
    onStateSubmit=(event)=>{
        event.preventDefault();
        //console.log("click bitch",this.state)
        axios.post('/submit',this.state).then((res)=>{
            
            console.log("Data:" +JSON.stringify(res));
            if(res.data === true){
                this.props.setLogin()
                this.props.history.push('/')
                
            }
            else{this.setState({error:"Wrong name or password!"})}
        }).catch(function (error){
            console.log(error)
        })
    };

    newUser = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
        axios.post("/api", this.state).then(function(err){
        if (err){
            console.log(err)
        }
        else{
            console.log("success")
        }
        })
    }

    render(){
        return(
            <div>
                <h1>Welcome to The Arttt Review</h1>
                <br />
                <div className="App-header"></div><br />
                <a href="/artist">Artist Page</a>
                <h3>Please log in to begin critiquing/Submitting art!</h3>
            <form>
                <label>Username:
                    <input value={this.state.userName}
                           name="userName"
                           onChange={this.onStateChange}
                           type="text"/>
                           </label>
                           </form>
                           <br/>
                           <form>
                           <label>Password:
                           <input value={this.state.password}
                                  name="password"
                                  onChange={this.onStateChange}
                                  type="text"/>
                                  </label>
                                  </form>
                                  <br/>
                                  <button onClick={this.onStateSubmit}>Log In</button>
                                  <button onClick={this.newUser}>New User </button>
                                  <h2>{this.state.userName}</h2>
                                  <span>{this.state.error}</span>
                                  </div>
                           
        )
    }
}

export default Login;
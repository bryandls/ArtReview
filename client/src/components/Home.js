import React, {Component} from "react";
import axios from "axios";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import Gallery from "../pages/Gallery.js";
import SubmitArt from "../pages/SubmitArt.js";
import Navbar from "./Navbar.js";

class Home extends Component {
    state = {
        name: ""
    }


    componentDidMount = () => {
        axios.get("/id").then((results)=>{
           this.setState({name: results.data.userName})
           console.log(this.state.name)
         console.log("humbug")
        })
    }
    render(){
        return(
            <h2> sup,{this.state.name}</h2>
        )
    }

    render(){
        return(
            <Router>
                <div>
                    <Navbar/>
                    <Route exact path="/gallery" component={Gallery}/>
                    <Route exact path="/submitArt" component={SubmitArt}/>
                    </div>
                    </Router>
        )
    }
}



export default Home;
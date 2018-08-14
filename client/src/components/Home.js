import React, {Component} from "react";
import axios from "axios";

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
}



export default Home;
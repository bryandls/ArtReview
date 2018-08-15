import React, {Component} from "react";
import "../App.css";
import axios from "axios";


class SubmitArt extends Component {
    state = {
        postName: "",
        postDescription: "",
        link: ""
    }

    onStateChange=(event)=>{
           this.setState({[event.target.name]:event.target.value})
    }

    artSubmit = (event) => {
        event.preventDefault();
        console.log("Click:", this.state)
        axios.post("/artSubmit", this.state).then(() => {
            console.log("success!")

        })
    }

    
    
    render(){
        return(
            <div>
        <h1>Submission art page </h1>
        <br/>
        <form>
            <div className="form-group">
                <label htmlFor="postName">Post Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1"
                name="postName"
                value={this.state.postName}
                onChange={this.onStateChange} aria-describedby="emailHelp" placeholder="Enter post"/>
                <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="postDescription">Post Description</label>
                <input type="text"
                name="postDescription"
                value={this.state.postDescription}
                onChange={this.onStateChange}  className="form-control"
                 id="exampleInputPassword1" placeholder=""/>
            </div>
            <div className="form-group">
                <label htmlFor="link">Link</label>
                <input type="text"
                name="link"
                value={this.state.link}
                onChange={this.onStateChange}  className="form-control" id="exampleInputPassword1" placeholder=""/>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.artSubmit}>Submit</button>
        </form>
    </div>
        )
    }
    
}

export default SubmitArt;
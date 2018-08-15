import React, {Component} from "react";
import "../App.css";
import axios from "axios"


class Gallery extends Component{
      state={
          gallery:[],
          loaded:false
      }

      componentDidMount=()=>{
          axios.get('/getPics').then((res)=>{
              console.log("suppp", res)
            //   this.setState({name:res.data.name,
                            //  description:res.data.description,
                            //  url:res.data.link})
                            this.setState({gallery:res.data,
                                           loaded:true})
                             
          console.log("state values:", this.state.gallery.Post[0]._id)
          
          }) 
        
          
          }

          render(){
              if(!this.state.loaded){
                  return(
                      <h1>ughhh shit still loading </h1>

                  )
              }
              return(
                  
                  //  this.state.gallery.map((item)=>{
                    //     return(
                    
                    <div>
                    <h1>Name:{this.state.gallery.userName}</h1>
                     {/* <h2>Pics:{item.Post.link}</h2>  */}
                    
                    </div>
                     
      )
   }
}

export default Gallery;
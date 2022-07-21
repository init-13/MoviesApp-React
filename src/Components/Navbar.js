
import React, { Component } from 'react'
import logo from "../logo.jpg";
import {Link} from "react-router-dom"
export default class Navbar extends Component {
  render() {
    return (
        <div style={{display:'flex', justifyContent:"space-between", background:"", color:"blue",padding:'0.3rem', alignItems:"center"}}>
            <Link to="/"><h1 style={{marginLeft:"5rem",}}><button type="button" className="btn btn-primary">Home</button></h1></Link>
            <div style={{display:"flex",alignItems:"center"}}>
              <img style={{width:"4rem",marginRight:"1.5rem"}} src={logo} alt="Logo"/>
              <h2 className="display4">MOVIES APP</h2>
            </div>
            <Link to="/fav"><h2 style={{marginRight:"5rem",}}><button type="button" className="btn btn-dark ">Favourites</button></h2></Link>
      </div>
    )
  }
}
 

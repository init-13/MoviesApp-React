
import React, { Component } from 'react'
import logo from "../logo.jpg";

export default class Navbar extends Component {
  render() {
    return (
        <div style={{display:'flex', justifyContent:"space-between", background:"", color:"blue",padding:'0.3rem', alignItems:"center"}}>
            <h1 style={{marginLeft:"5rem",}}><button type="button" className="btn btn-primary">Home</button></h1>
            <div style={{display:"flex",alignItems:"center"}}>
              <img style={{width:"4rem",marginRight:"1.5rem"}} src={logo} alt="Logo"/>
              <h2 className="display4">MOVIES APP</h2>
            </div>
            <h2 style={{marginRight:"5rem",}}><button type="button" className="btn btn-dark ">Favourites</button></h2>
      </div>
    )
  }
}
 

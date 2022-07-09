import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div style={{
                display:'flex', background:'lightblue' , justifyContent:'center', alignItems:'center'
            }}>
                <h1 >Movies App</h1>
                <h2 style={{
                    margin:'2rem'
                }}>Favourites</h2>
            </div>
        );
    }
}

import React, { Component } from 'react'
import { movies } from './getMovies'
export default class Banner extends Component {
    constructor(){
        super();
        this.state={
          car:1
        }
    }


    render() {
        // console.log(movies.results[0]);
        let movie = movies.results;
        // let movie = "";
        return (
          <>
            {movie == "" ? (
              <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (  
              
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            
            <div class="carousel-inner">

            <div class={this.state.car==0 ? "carousel-item  active" : "carousel-item"}>
                <img src= {`https://image.tmdb.org/t/p/original${movie[0].backdrop_path}`}class="d-block w-100 banner-img" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h2 style={{fontWeight:"1000"}}>  {movie[0].original_title} </h2>
                </div>
              </div>

              <div class={this.state.car==1 ? "carousel-item  active" : "carousel-item"}>
                <img src= {`https://image.tmdb.org/t/p/original${movie[1].backdrop_path}`}class="d-block w-100 banner-img" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h2 style={{fontWeight:"1000"}}>  {movie[1].original_title} </h2>
                </div>
              </div>

              <div class={this.state.car==2? "carousel-item  active" : "carousel-item"}>
                <img src= {`https://image.tmdb.org/t/p/original${movie[2].backdrop_path}`}class="d-block w-100 banner-img" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h2 style={{fontWeight:"1000"}}>  {movie[2].original_title} </h2>
                </div>
              </div>
              
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true" onClick={()=>{let st = this.state.car==0?2:(this.state.car-1)%3; this.setState({car:st});}}></span>
              <span class="visually-hidden">Previous</span> 
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true" onClick={()=>{let st = (this.state.car+1)%3; this.setState({car:st});}}></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>


          
              
            )}
          </>
        );
  }
}
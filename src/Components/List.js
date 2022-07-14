import React, { Component } from "react";
import { movies } from "./getMovies";
import axios from "axios";
export default class List extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
      pagearr:[1,2,3,4,5],
      currPage:1,
      movies:[],
    };
  }

    handleEnter = (id) => {
        this.setState({
          hover:id
      })
  };

  handleLeave = () => {
      this.setState({
        hover: '',
      });
  };

  async componentDidMount(){

    const moviesList = await axios.get(
      
      `https://api.themoviedb.org/3/movie/popular?api_key=d8b656f2c04a84f9aaa970543f182237&language=en-US&page=${this.state.currPage}`

      );
    
    this.setState({
      movies:[...moviesList.data.results]
    });
    

  }
  render() {
    let movie = this.state.movies; //fetch
    return (
      <>
        {movie.length == 0 ? (
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div>
            <h3 className="text-center">
              <strong>Trending</strong>
            </h3>
            <div className="movies-list">
              {movie.map((movieObj) => (
                <div
                  className="card movie-card"
                  onMouseEnter={() => this.handleEnter(movieObj.id)}
                  onMouseLeave={this.handleLeave}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                    className="card-img-top banner-img"
                    alt="..."
                    style={{ height: "40vh" }}
                  />
                  {/* <div className="card-body "> */}
                  <h5 className="card-title movie-title">
                    {movieObj.original_title}
                  </h5>
                  {/* <p className="card-text movie-text">
                        {movieObj.overview}
                      </p> */}
                  <div className="button-wrapper">
                    {this.state.hover == movieObj.id && 
                      <a href="#" class="btn btn-primary movie-button">
                        Add to Favourites
                      </a>
                    }
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  
                  {
                    this.state.pagearr.map(page => (<li class="page-item">
                    <a class="page-link" href="#">
                      {page}
                    </a>
                  </li>))
                  }

                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </>
    );
  }
}
 

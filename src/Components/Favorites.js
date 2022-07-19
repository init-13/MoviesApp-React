import React, { Component } from 'react'
 import axios from "axios";


export default class Favorites extends Component {
    constructor(){
        super();
        this.state={

            movies:[],
            genreList:[], 
            currgenre:0,
        }
    }

   changeMovies = async () =>{
    const moviesList = await axios.get(
      
      `https://api.themoviedb.org/3/movie/popular?api_key=d8b656f2c04a84f9aaa970543f182237&language=en-US&page=1`

      );
    const tempgenreList = [0]
   
    
    moviesList.data.results.map(mobj =>{
      if(!tempgenreList.includes(mobj.genre_ids[0]))
      tempgenreList.push(mobj.genre_ids[0]);
    })
    this.setState({
      movies:[...moviesList.data.results],
      genreList:[...tempgenreList]
    });
    
  }



addgenre = (genre)=>{
  this.setState({
    currgenre: genre
  });
}
    async componentDidMount(){
     this.changeMovies();
  }

    render() {

        let genreId={0:'All Genre',28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
                        27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'}

        return (
            <>
           
  <div class="row" style={{padding:"3rem"}}>
    <div class="col-3" >
      
      <div class="list-group">
        {
          this.state.genreList.map(genre=>
          this.state.currgenre==genre?
          (
            <button type="button" class="list-group-item list-group-item-action active" >{genreId[genre]}</button>
          ):
          (
           <button type="button" class="list-group-item list-group-item-action " onClick={() => {this.addgenre(genre)}}>{genreId[genre]}</button>

          )
          )
        }
</div>
    </div>
    <div class="col" style={{paddingLeft:"5rem"}}>
      
      <div class="col favourites-table" >
          <div class="row">
            <input type="text" className="col-8" placeholder="Search"></input>
            <input type="number" className="col-4" placeholder="5"></input>
          </div>
          </div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col-5">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Popularity</th>
                  <th scope="col">Rating</th>
                  <th scope="col"/>
    </tr>
  </thead>
  <tbody>
   {this.state.movies.map((movieObj) => (this.state.currgenre==0 || movieObj.genre_ids.includes(this.state.currgenre) )&& (
                  <tr>
                    <td scope="row">
                      <img
                        src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                        style={{ height:"6rem",width: "8rem" ,marginRight:"1rem", borderRadius:"1rem"}}
                      />
                      {movieObj.original_title}
                    </td>
                    <td>{(this.state.currgenre==0)?genreId[movieObj.genre_ids[0]]:genreId[this.state.currgenre]}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{movieObj.vote_average}</td>
                    <td>
                      <button class="btn btn-outline-danger">Delete</button>
                    </td>
                  </tr>
                ))}
  </tbody>
</table>
    </div>
  </div>

            </>
        )
    }
}

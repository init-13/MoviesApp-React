import React, { Component } from 'react'
 


export default class Favorites extends Component {
    constructor(){
        super();
        this.state={

            movies:[],
             
            genreList:[], 
            currgenre:0,
            currsearch:"",
             
            limit: 5,
            curPage:1

        }
    }

   changeMovies = () =>{
    const moviesList = JSON.parse(localStorage.getItem("movies"));
    const tempgenreList = [0]
   
    
    moviesList.map(mobj =>{
      if(!tempgenreList.includes(mobj.genre_ids[0]))
      tempgenreList.push(mobj.genre_ids[0]);
    })
    this.setState({
      movies:[...moviesList],
      genreList:[...tempgenreList]
    });

    console.log(this.state.movies);
    
    
    
  }

handleSearch = event =>{

  const searchText = event.target.value.trim().toLowerCase();
  
  


  this.setState({
    currsearch:searchText,
  });
  
  console.log(this.state.currsearch);
  
}

handleLimit =   event =>{
  
  const newLimit = event?Math.max(1,event.target.value ):this.state.limit;
  if(event)event.target.value = newLimit;

  
  
  
  let movie =  this.state.movies.filter(movieObj => (movieObj.original_title.toLowerCase().includes(this.state.currsearch)) && (this.state.currgenre==0 || movieObj.genre_ids.includes(this.state.currgenre) ));
  
  
  //console.log(movie );
  

  
  

  this.setState({
    limit:newLimit,
     
     
  });
  
  console.log(this.state.pageAr);
  
}

handleDelete = id =>{
  const newls = JSON.parse(localStorage.getItem("movies")).filter(movie=>movie.id!=id);

  localStorage.setItem("movies",JSON.stringify(newls));

  this.changeMovies();
}

handleSort = (param, order)=>{
     let tempMovies = this.state.movies;

     tempMovies.sort((a,b)=>order*(a[param]-b[param]));

     this.setState({
       movies:[...tempMovies]
     });
}
addgenre = (genre)=>{
  this.setState({
    currgenre: genre
  });
}
   

componentDidMount(){
      
     this.changeMovies();
     this.handleLimit();
     
  }

    render() {

        let genreId={0:'All Genre',28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
                        27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'}

        
                        let movie = this.state.movies.filter(movieObj => (movieObj.original_title.toLowerCase().includes(this.state.currsearch)) && (this.state.currgenre==0 || movieObj.genre_ids.includes(this.state.currgenre) ));

                        let si = (this.state.curPage - 1)*this.state.limit ;
                        let ei = si + this.state.limit ; 

                       let movieshow = movie.slice(si,ei);

                       let numberpages = Math.ceil(movie.length / this.state.limit) ;
   
                  let pagear = [];
                  for(let i = 1;i<=numberpages;i++)
                  pagear.push(i);


        
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
    <div class="col" style={{paddingLeft:"5rem",paddingRight:"3rem"}}>
      
      <div class="col favourites-table" >
          <div class="row">
            <input type="text" className="col-8" placeholder="Search" onChange={this.handleSearch}></input>
            <input type="number" className="col-4" placeholder="5" onChange={this.handleLimit}></input>
          </div>
          </div>
      <table class="table">
  <thead>
    <tr style={{fontWeight:"bolder"}}>
      <th scope="col-5">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col"> <i class="fa-solid fa-caret-down" onClick={()=>{this.handleSort("popularity",1)}}/> 
                  Popularity 
                  <i class="fa-solid fa-caret-up" onClick={()=>{this.handleSort("popularity",-1)}}/></th>
                  
                  <th scope="col"><i class="fa-solid fa-caret-down" onClick={()=>{this.handleSort("vote_average",1)}}/> 
                  Rating  
                  <i class="fa-solid fa-caret-up" onClick={()=>{this.handleSort("vote_average",-1)}}/></th>
                  <th scope="col"/>     
    </tr>
  </thead>
  <tbody>
   { movieshow.map((movieObj,index) => (
                  <tr>
                    <td scope="row">
                      <img
                        src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                        style={{ height:"6rem",width: "8rem" ,marginRight:"1rem", borderRadius:"1rem"}}
                      />
                      <span style={{fontWeight:"bold"}}>{movieObj.original_title}</span>
                    </td>
                    <td>{(this.state.currgenre==0)?genreId[movieObj.genre_ids[0]]:genreId[this.state.currgenre]}</td>
                    <td> {movieObj.popularity}</td>
                    <td>  {movieObj.vote_average}</td>
                    <td>
                      <button class="btn btn-outline-danger" onClick={()=>{this.handleDelete(movieObj.id)}}>Delete</button>
                    </td>
                  </tr>
                ))}
  </tbody>
</table>

<nav aria-label="...">
  <ul class="pagination pagination-lg">

    {pagear.map(page=>
    
    

      this.state.curPage==page ?
      
      (<li class="page-item active" aria-current="page">
      <span class="page-link" onClick={()=>{this.setState({curPage:page})}}>{page}</span>
    </li>
    ):

    ( 
      <li class="page-item" aria-current="page">
    <span class="page-link" onClick={()=>{this.setState({curPage:page})}}>{page}</span>
  </li>
  
    ) 
      
    )
    }
    
    
  </ul>
</nav>
    </div>
  </div>

            </>
        )
    }
}

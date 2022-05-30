import React, { Component } from "react";
import Pagination from "../common/pagination.component";
import { getMovies,getGenres } from "../services/movie.component";
import Filter from "./filtering.component";
class Movies extends React.Component {
  state = {
    movies: getMovies(),
    pageCount: 8,
    activePage: 1,
    genres: [{ id:0, name: 'All Genres'}, ...getGenres()],// genres:[ {id:0,name:'fgh'}, {id:1,name:'jkhh'} ]
    selectedGenres: 'All Genres'
  };

  handleClick = (page) => {
    this.setState({ ...this.state, activePage: page });
  };

  paginatedMovies = (movies) => {
    // console.log(selectedMovies);
    const {  pageCount, activePage } = this.state;
    const start = (activePage - 1) * pageCount;
    const updatedMovies = movies.slice(start, start + pageCount);
    return updatedMovies;
  };

  getSelectedMovies = (genre) => {
    this.setState({...this.state, selectedGenres:genre, activePage:1})
  }

  filteredMovies = () =>{
     const {movies,selectedGenres} = this.state;
    
     const selectedMovies = movies.filter( movie => {
      if(selectedGenres === 'All Genres') return true;
      if(movie.genres.includes(selectedGenres)) return true
        return false
     })
    // console.log(selectedMovies);
     return selectedMovies;
  }

  render() {
     const selectedMovies = this.filteredMovies();
    // console.log(selectedMovies);
     const movies = this.paginatedMovies(selectedMovies);
    return (
      <>
        <div className="row">
          <div className="col-lg-2">
            <Filter genres = {this.state.genres} getSelectedMovies = {this.getSelectedMovies} selectedGenres = {this.state.selectedGenres}/>
          </div>

          <div className="col-lg-10">
            <h3 style={{text_align:'center'}}> Showing {selectedMovies.length} movies</h3>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Poster</th>
                  <th scope="col">Title</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Your Rating</th>
                </tr>
              </thead>
              <tbody>
                { movies.map(( movie ) => {
                  return (
                    <tr>
                      <td>
                        {" "}
                        <img
                          style={{ width: "40px", height: "auto" }}
                          src={movie.posterurl}
                        />{" "}
                      </td>
                      <td>{movie.title}</td>
                      <td>{movie.imdbRating} <i class="bi bi-star"></i> </td>
                      <td>{movie.your_rating ? <i class="bi bi-star-fill"></i> : <i class="bi bi-star"></i>  }</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            < Pagination
               totalItems={ selectedMovies.length }
               perPageCount={this.state.pageCount}
               activePage={this.state.activePage}
               handleClick={this.handleClick}
           />
          </div>
        </div>

        
      </>
      
    );
  }
}

export default Movies;

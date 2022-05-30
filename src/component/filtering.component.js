import React, { Component } from 'react';
class Filter extends React.Component {
    render() { 
        const {genres,getSelectedMovies,selectedGenres} = this.props; //genre = [{id:0,name:'ghj'},]
        return (
          <ul class="list-group">
              {genres.map( genre => (<li style={{cursor:'pointer'}} onClick={()=>getSelectedMovies(genre.name)} className ={selectedGenres===genre.name ? "list-group-item active" : "list-group-item"}>{genre.name}</li>)
              )}
          </ul>
        );
    }
}
 
export default Filter;
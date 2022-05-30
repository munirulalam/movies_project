import React, { Component } from 'react';
import { getMovies } from "../services/movie.component";

class Movie extends React.Component {
    state={
        movies: getMovies().map((movie,idx)=>({...movie,id:`movie-${idx}`})),
        singleMovie: []
    }

    componentDidMount() {
        const movie = this.state.movies.find(movie=> (movie.id==this.props.match.params.id));
        this.setState({...this.state,singleMovie: [movie]});
    }

    // showMovie = ()=> {
        
    //     console.log(Object.keys(movie))
    //     console.log(Object.values(movie))
        
    // }
    render() { 
        

        // this.showMovie();
        // this.setState({...this.state,singleMovie: [movie]});
       
        // console.log(this.state.singleMovie);
        // const bill = JSON.stringify(movie);
        // for(var i in bill){
        //     console.log(i);
        // }

        // var json_data = {"2013-01-21":1,"2013-01-22":7};
        // var result = [];

        

        return (
            <div>
                <h6>{this.state.singleMovie}</h6>
            </div>
            // this.props.match.params.id
        );
    }
}
 
export default Movie;
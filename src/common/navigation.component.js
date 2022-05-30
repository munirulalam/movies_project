import { Link } from "react-router-dom";
import { getMovies } from "../services/movie.component";
import Form from "./form.component";

class Navigation extends Form {
  state = {
    data: {
      search_movie: ''
    },
    errors: {

    },
    movies: getMovies().map( ( movie,idx ) => ({ ...movie, id: `movie-${idx}` })),
    
  }

  // handleChange = ({ currentTarget:input }) =>{
  //   const name = input.name;
  //   const value = input.value;

  //   const error = this.validateInput(name,value);

  //   const data = { ...this.state.data } //updatedUser = { userName: '', password: '' } 
  //   data[name] = value;

  //   const errors = {...this.state.errors};
  //   errors[name] = error;

  //   this.setState({ data, errors })   
  //   // console.log(this.state);
  // }

  // handleChange = (e)=> {
  //   const value = e.currentTarget.value;
  //   // const search_movie = this.state.search_movie;
  //   this.setState({ ...this.state, search_movie:value });
  //   // this.state.movies.filter(movie=> movie.title.includes(value))

  // }
  searchedMovies = ()=>{
    return this.state.movies.filter(movie=> movie.title.toLowerCase().includes(this.state.data.search_movie.toLowerCase()))
  }

  render() {
    const filteredMovies = this.searchedMovies();

    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          IMDB
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Link
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/addMovie">
                Add Movie
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/signup">
                SignUp
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/dataShow">
                Data Show
              </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0 ">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name = "search_movie"
              onChange={ this.handleChange }
            />
            <div className={ filteredMovies.length ? "card d-none" : "card d-none"} style={{ position:'absolute',width: "18rem", cursor:'pointer' }}>
              <ul class="list-group list-group-flush">
                
                {filteredMovies.map((movie,id) => <li key={id} class="list-group-item"><Link to={`/movie/${movie.id}`} >{movie.title}</Link></li>)} 
                
              </ul>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navigation;

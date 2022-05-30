import './App.css';
import Navigation from './common/navigation.component';
import Movies from './component/movies.component';
import { Switch,Route, Redirect } from 'react-router-dom'
import NotFound from './common/not-found.component';
import Login from './common/login.component';
import SignUp from './common/signup.component';
import MovieForm from './common/movie-form.component';
import Movie from './common/Movie.component';
import Posts from './common/posts.component';

function App() {
  return (
    <div>
        <Navigation/>
        <Switch>
          <Route path ='/home' component={Movies}/>
          <Route path='/dataShow' component={Posts}/>
          <Route path ='/movies' component={Movies}/>
          <Route path="/movie/:id" component={Movie}/>
          <Route path = '/addMovie' component={MovieForm}/>
          <Route path='/not-found' component={ NotFound }/>
          <Route path='/login' component={ Login }/>
          <Route path='/signup' component={ SignUp }/>
          <Route exact path='/' component={Movies}/>
          <Redirect to ='/not-found'/>
        </Switch>
       {/* <Movies/> */}
    </div>
  );
}

export default App;

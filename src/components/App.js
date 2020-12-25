import React from 'react'
import Navbar from'./Navbar'
import MovieCard from './MovieCard'
import {data} from '../data'
import { render } from '@testing-library/react';
import {addMovies} from '../actions'
class App extends React.Component {
  componentDidMount(){
    const {store}=this.props;
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();

    });
    store.dispatch((addMovies(data)))
    console.log('state',this.props.store.getState());
  }
  
  render(){
    const {list}=this.props.store.getState();
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favorite</div>
        </div>
        <div className="list">
          {list.map((movie,index)=>(
          <MovieCard movie={movie} key={'movies-${index}'}/>
          ))}
        </div>
      </div>
      
    
    </div>
  );
}
}

export default App;

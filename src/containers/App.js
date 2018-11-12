import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

const App = () => {
  return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList />
      </div>
    );
  }

export default App;
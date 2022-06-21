import React from 'react';
// import Card from './Card/Card';
import photos from '../db/photos.json';
import MyOwnCardList from './CardList';
import './App.css';

const App = () => {
  //   console.log('photos', photos);
  return (
    <>
      <h1>Components</h1>
      {/* <Card photo={photos[0]} />
      <Card photo={photos[1]} />
      <Card photo={photos[2]} /> */}
      <MyOwnCardList photos={photos} />
    </>
  );
};

export default App;

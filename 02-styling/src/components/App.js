import React from 'react';
// import Card from './Card/Card';
import photos from '../db/photos.json';
import users from '../db/users.json';
import MyOwnCardList from './CardList';
import './App.css';
import UserList from './UserList/UserList';
import Container from './Container/Container';
import TrafficLights from './TrafficLights/TrafficLights';

const App = () => {
  //   console.log('photos', photos);
  return (
    <>
      <h1>Components</h1>
      {/* <Card photo={photos[0]} />
      <Card photo={photos[1]} />
      <Card photo={photos[2]} /> */}
      <MyOwnCardList photos={photos} />
      <UserList users={users} />
      <Container>
        <TrafficLights type='ready' />
        <TrafficLights type='steady' />
        <TrafficLights type='go' />
      </Container>
    </>
  );
};

export default App;

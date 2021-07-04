import './App.css';
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';
import 'semantic-ui-css/semantic.min.css'
import Login from './layouts/Login';
import React, { useState } from 'react'
import { Router, Switch, useHistory } from "react-router-dom";
import Anasayfa from './layouts/Anasayfa';
import { Route } from 'react-router-dom';
import BookCard from './layouts/BookCard';

function App() {

  const history = useHistory();
  return (

    <div className="App">
      <Navi />
      <Container className="main">
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Anasayfa} />
         <Route exact path="/BookCard" component={BookCard} /> 
      </Container>
    </div>

  );
}


export default App;


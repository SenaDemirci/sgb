import './App.css';
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';
import 'semantic-ui-css/semantic.min.css'
import Login from './layouts/Login';
import React, { useState } from 'react'
import { Switch, useHistory } from "react-router-dom";
import Anasayfa from './layouts/Anasayfa';
import { Route } from 'react-router-dom';
import Img from './layouts/Img';

function App() {
  /* 
   axios({
     method: "post",
     url: "http://ekitap.stratek.com.tr:8080/api/Kullanici/GirisYap",
     data: {
         kullaniciAdi: "bilgi@stratek.com.tr",
         parola: "tenset"
     }
 });
 
 */
  /*
   const [isAuthenticated, setIsAuthenticated] = useState(false)
   function handleSignOut () { 
    setIsAuthenticated(false) //false ---> Login sayfası gelir
  }
  
  function handleSignIn () { 
    setIsAuthenticated(true) //true ---> Anasayfa gelir
  }
  */


  const history = useHistory();
  return (

    <div className="App">
      <Navi />
      <Container className="main">
        <Route exact path="/" component={Login} />
        <Route path="/Navi" component={Navi} />
        <Route path="/Home" component={Anasayfa} />
      </Container>
    </div>

  );
}


export default App;

//{isAuthenticated ? <Anasayfa signOut={handleSignOut} deger="1"/> : <Login signIn={handleSignIn}/>}
/*
<Route exact path="/login" component={Navi} />
*/
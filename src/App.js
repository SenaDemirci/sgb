import './App.css';
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';
import 'semantic-ui-css/semantic.min.css'
import Login from './layouts/Login';
import SignedUp from './layouts/SignedUp';

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <SignedUp />
        <Login />
      </Container>

    </div>
  );
}

export default App;

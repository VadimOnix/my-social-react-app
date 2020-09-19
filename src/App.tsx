import React from 'react';
import Home from './pages/Home';
import Error from './pages/Error';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Galery from './pages/Galery';
import About from './pages/About';
import Login from './pages/Login';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <Switch>
            <Route exact path={"/"} render={()=> <Home/>}/>   
            <Route path={"/galery"} render={()=> <Galery/>}/>   
            <Route path={"/about"} render={()=> <About/>}/>   
            <Route path={"/login"} render={()=> <Login/>}/>   
            <Route render={()=> <Error/>}/>  
          </Switch>
        </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

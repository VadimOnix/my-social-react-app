import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { Switch, Route  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            Главная
          </Route>
          <Route path="/messages">Сообщения</Route>
          <Route path="/galery">Галерея</Route>
          <Route>Не найдено!</Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

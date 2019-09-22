import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';

//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Sobre from './pages/Sobre';
import Films from './pages/Films';
import People from './pages/People';
import Planets from './pages/Planets';
import Species from './pages/Species';
import Starships from './pages/Starships';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Olá Mundo",
      contador: 0
    };
  }

  somar = valor => {
    this.setState({ contador: this.state.contador + valor });
  };

  render() {
    /* let msg = "Olá mundo"; */
    return (
      <div>
				<BrowserRouter>
					<Header/>
					<Switch>
						<Route path="/" exact={true} component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/filmes" component={Films} />
						<Route path="/pessoas" component={People} />
						<Route path="/planetas" component={Planets} />
						<Route path="/species" component={Species} />
						<Route path="/starships" component={Starships} />
						<Route path="/sobre" component={Sobre} />
					</Switch>
					<Footer/>
				</BrowserRouter>
      </div>
    );
  }
}

export default App;

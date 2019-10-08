import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

//Pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Films from './pages/Films/Films';
import People from './pages/People/People';
import Planets from './pages/Planets/Planets';
import Species from './pages/Species/Species';
import Starships from './pages/Starships/Starships';

//Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
			<HashRouter>
				<Header/>
				<Switch>
					<Route path="/" exact={true} component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/filmes" component={Films} />
					<Route path="/pessoas" component={People} />
					<Route path="/planetas" component={Planets} />
					<Route path="/species" component={Species} />
					<Route path="/starships" component={Starships} />
					<Route path="*" component={Home} />
				</Switch>
				<Footer/>
			</HashRouter>
      </div>
    );
  }
}

export default App;

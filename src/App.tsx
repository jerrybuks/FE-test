import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from './features/users/Users';
import Home from './components/home/Home';
import './App.scss';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </Router>
  );
}

export default App;

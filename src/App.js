import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';

console.log(process.env);

function App() { 
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/react-11/services/:id([0-9]+)" component={ServiceAdd} />
          <Route path="/react-11/services" component={ServiceList} />
          <Redirect to="/react-11/services" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';

function App() { 
  return (
    <Router basename="/react-11/services">
      <div className="App">
        <Switch>
          <Route path="/:id([0-9]+)" component={ServiceAdd} />
          <Route path="" component={ServiceList} />
          <Redirect to="" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

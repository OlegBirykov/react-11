import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL} >
      <div className="App">
        <Switch>
          <Route path="/services/:id([0-9]+)" component={ServiceAdd} />
          <Route path="/services" component={ServiceList} />
          <Redirect to="/services" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

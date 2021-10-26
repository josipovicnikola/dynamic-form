import './App.css';
import Header from './layout/Header';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { FormPage } from './form/FormPage';

export default function App() {
  return (
    <>
    <Header/>
    <Router>
      <Switch>
        <Route exact path="/" component={FormPage}/>
        <Route path="*">
          <Redirect to="/"/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

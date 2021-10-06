import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Widgets from "./Widgets";
import PageNotFound from "./PageNotFound";
import Props from "./Props";
import InputPage from "./InputPage";
import InputHooks from "./InputHooks";
import Counter from "./Counter";
import AxiosComp from "./AxiosComp";

import './App.css';

const widgetprods = [
  {name: 'Master Widget', price: '$125.00'},
  {name: 'Sub Widget', price: '$115.00'},
  {name: 'Long Widget', price: '$150.00'},
  {name: 'Short Widget', price: '$135.00'}
]

const App = () => {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className='container'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/widgets"
              render={(props) =>
                <Fragment>
                  <Widgets prods={widgetprods} />
                </Fragment>
              }
            />
            <Route exact path="/props" component={Props} />
            <Route exact path="/input" component={InputPage} />
            <Route exact path="/hooks" component={InputHooks} />
            <Route exact path="/counter" component={Counter} />
            <Route exact path="/axios" component={AxiosComp} />
            {/* <Route path="/404" component={PageNotFound} />
            <Redirect to="/404" /> */}
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
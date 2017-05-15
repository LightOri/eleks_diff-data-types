import React from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './app';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

const history = createBrowserHistory();

class AppRouter extends React.Component {
  render() {
    return (
          <Router history={history}>
            <div>
                <Route exact path='/' component={App}/>
                <Route path='/page2' component={Page2}/>
                <Route path='/page3' component={Page3}/>
            </div>
        </Router>
    )
  }
}

export default AppRouter;
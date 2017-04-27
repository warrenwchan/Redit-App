import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import MainLayout from './layouts/MainLayout';
// import Week from './components/Week';
// import CreatPost from './containers/CreatePost';
import Welcome from './containers/Welcome';
import LoginContainer from './containers/Login';
import PostList from './containers/PostList';
// import NotFound from './containers/NotFound';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link,
  // Redirect
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/mui-theme';
import './styles/index.css';

// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router>
      <MainLayout>
        <App>
          <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/posts" component={PostList}/>
            <Route exact path="/login" component={LoginContainer}/>
          </Switch>
        </App>
      </MainLayout>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);

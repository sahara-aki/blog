import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'
import GlobalHeader from 'components/GlobalHeader'
import BackTop from 'components/BackTop'

import stores from 'stores'

import Home from 'routes/home'
import About from 'routes/about'
import Test from 'routes/test'

const Routes = () => (
  <HashRouter>
    <div>
      <GlobalHeader />
      <BackTop />
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  </HashRouter>
)

const App = () => (
  <Fragment>
    <Provider {...stores}>
      <Routes />
    </Provider>
  </Fragment>
)

export default App

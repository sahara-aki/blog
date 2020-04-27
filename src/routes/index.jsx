import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
// import { Provider } from 'mobx-react'
import GlobalHeader from 'components/GlobalHeader'
import BackTop from 'components/BackTop'

// import stores from 'stores'

import Home from 'routes/home'
import About from 'routes/about'
import Blog from 'routes/blog'
import Article from 'routes/article'
import Css from 'routes/cssPage'
import Test from 'routes/test'
// import Demo from 'routes/demo'
// import Select from 'routes/select'
// import Editor from 'routes/editor'
import Calculator from './calculator'

const Routes = () => {
  return <HashRouter>
  <div>
    <GlobalHeader />
    <BackTop />
    <Route exact path="/" render={() => <Redirect to="/home" />} />
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} />
      <Route path="/css" component={Css} />
      <Route path="/article/:id" component={Article} />
      <Route path="/test" component={Test} />
      <Route path="/calculator" component={Calculator} />
      {/* <Route path="/demo" component={Demo} />
      <Route path="/select" component={Select} />
      <Route path="/editor" component={Editor} /> */}
    </Switch>
  </div>
</HashRouter>
}

const App = () => (
  <Fragment>
    {/* <Provider {...stores}>
      <Routes />
    </Provider> */}
    <Routes />
  </Fragment>
)

export default App

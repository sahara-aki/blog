import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
// import { Provider } from 'mobx-react'
import GlobalHeader from 'components/GlobalHeader'
import BackTop from 'components/BackTop'
import ScrollToTop from 'components/ScrollToTop'

// import stores from 'stores'

import Home from 'routes/home'
import About from 'routes/about'
import Blog from 'routes/blog'
import Article from 'routes/article'
import Css from 'routes/cssPage'
import Calculator from './calculator'
import hooksTest from './hooksTest'
import ObjectFit from './demo/objectFIt'

const Routes = () => {
  return <HashRouter>
  <div style={{width:"100%",height:"100%"}}>
    <GlobalHeader />
    <BackTop />
    <Route exact path="/" render={() => <Redirect to="/home" />} />
    <ScrollToTop>
      <Switch>
          <Route path="/home" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/css" component={Css} />
          <Route path="/article/:id" component={Article} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/hookstest" component={hooksTest} />
          <Route path="/demo/objectfit" component={ObjectFit} />
      </Switch>
    </ScrollToTop>
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

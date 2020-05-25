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
import Music from 'routes/music'
import Exception from 'routes/exception/404'
import Calculator from './calculator'
import hooksTest from './hooksTest'
import ObjectFit from './demo/objectFIt'
import Equip from './demo/Equip'
import Footer from '../components/Footer'

const Routes = () => {
  return <HashRouter>
  <div style={{width:"100%"}}>
    <GlobalHeader />
    <BackTop />
    <Route exact path="/" render={() => <Redirect to="/home" />} />
    <ScrollToTop>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about" component={About} />
        <Route exact path="/css" component={Css} />
        <Route exact path="/article/:id" component={Article} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/hookstest" component={hooksTest} />
        <Route exact path="/demo/objectfit" component={ObjectFit} />
        <Route exact path="/demo/equip" component={Equip} />
        <Route component={Exception} />
      </Switch>
    </ScrollToTop>
    <Footer />
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

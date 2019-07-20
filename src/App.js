import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from './Components/Header';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
const Home = lazy(() => import('./routes/Home'));
const Contact = lazy(() => import('./routes/Contact'));
const About = lazy(() => import('./routes/About'));
const Work = lazy(() => import('./routes/Work'));
const ClientInfo = lazy(() => import('./routes/ClientInfo'));

function App() {
  return (
  <Router>
    {/* <Route render={({ location }) => ( */}
    {/* <div> */}
      <Header />
      <div class="heading-spacer">
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/about" component={About} />
              <Route path={`/work/:clientId`} component={ClientInfo} />
              <Route exact path="/work" component={Work} unmountOnExit />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
          
          
          {/* <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={500}
            >
              <Switch location={location} >
                <Route exact={true} path="/" component={Home} unmountOnExit/>
                <Route exact path="/contact" component={Contact} unmountOnExit/>
                <Route exact path="/about" component={About} unmountOnExit/>
                <Route exact path="/work" component={Work} unmountOnExit/>
                <Route path={`/work/:clientId`} component={ClientInfo} unmountOnExit/>
                <Route render={() => <div>Not Found</div>} unmountOnExit/>
              </Switch>
            </CSSTransition>
          </TransitionGroup> */}
        </Suspense>
      </div>
    {/* </div> */}
    {/* )}/> */}
  </Router>
  );
}

export default App;
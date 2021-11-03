import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from './Components/Header';
const Home = lazy(() => import('./routes/Home'));
const Contact = lazy(() => import('./routes/Contact'));
// const About = lazy(() => import('./routes/About'));
const Work = lazy(() => import('./routes/Work'));
const ClientInfo = lazy(() => import('./routes/ClientInfo'));

function App() {
  return (
  <Router>
      <Header />
      <div className="heading-spacer">
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path={["/", "/about"]} component={Home}/>
              <Route exact path="/contact" component={Contact} />
              {/* <Route exact path="/about" component={About} /> */}
              <Route path={`/work/:clientId`} component={ClientInfo} />
              <Route exact path="/work" component={Work} unmountOnExit />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
        </Suspense>
      </div>
    {/* </div> */}
    {/* )}/> */}
  </Router>
  );
}

export default App;
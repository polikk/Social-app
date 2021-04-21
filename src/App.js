import React,{lazy,Suspense} from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import * as ROUTER from './constants/routes'

const Login = lazy(()=> import('./pages/login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route path={ROUTER.LOGIN} component={Login}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;

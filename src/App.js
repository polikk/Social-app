import React,{lazy,Suspense} from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import * as ROUTER from './constants/routes'

const Login = lazy(()=> import('./pages/login'));
const SignUp = lazy(()=> import('./pages/sign-up'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route path={ROUTER.LOGIN} component={Login}/>
          <Route path={ROUTER.SIGN_UP} component={SignUp}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;

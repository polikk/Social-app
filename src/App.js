import React,{lazy,Suspense} from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import * as ROUTER from './constants/routes'
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';

const Login = lazy(()=> import('./pages/login'));
const SignUp = lazy(()=> import('./pages/sign-up'));
const NotFound = lazy(()=> import('./pages/not-found'));
const Dashboard = lazy(()=> import('./pages/dashboard'));

function App() {
  const {user} = useAuthListener();
  return (
    <UserContext.Provider value={user}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
           <Switch>
            <Route path={ROUTER.LOGIN} component={Login} exact/>
            <Route path={ROUTER.SIGN_UP} component={SignUp} exact/>
            <Route path={ROUTER.DASHBOARD} component={Dashboard} exact/>
            <Route  component={NotFound}/>
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}
export default App;

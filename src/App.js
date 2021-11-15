import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Explore from './Pages/Exolore/Explore';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import FullDiscription from './Pages/Shared/FullDiscription/FullDiscription';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path='/explore'>
            <Explore></Explore>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/product/:id'>
            <FullDiscription></FullDiscription>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path={['/', '/home']}>
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

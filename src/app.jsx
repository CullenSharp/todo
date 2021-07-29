import React, { useContext } from 'react';

import './app.scss';
import { AuthorizationContext } from './context/authorization';
import Login from './components/auth/login';
import ToDo from './components/todo/todo';

function App() {
  const { isAuthenticated } = useContext(AuthorizationContext);

  return (
    isAuthenticated
      ? <ToDo />
      : <Login />
  );
}

export default App;

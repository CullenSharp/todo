/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

export const AuthorizationContext = React.createContext();

const testUsers = [
  {
    password: 'password',
    name: 'Administrator',
    role: 'admin',
    capabilities: ['create', 'read', 'update', 'delete'],
  },
  {
    password: 'password',
    name: 'Editor',
    role: 'editor',
    capabilities: ['read', 'update'],
  },
  {
    password: 'password',
    name: 'Writer',
    role: 'writer',
    capabilities: ['create'],
  },
];

class AuthorizationProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: this.login.bind(this),
      logout: this.logout.bind(this),
      isAuthorized: this.isAuthorized.bind(this),
      isAuthenticated: false,
      user: {},
    };
  }

  login(username, password) {
    let validUser = {};
    let token = null;

    testUsers.forEach((user) => {
      if (user.username === username && user.password === password) {
        validUser = user;
      }
    });
    if (validUser) {
      token = jwt.sign(validUser, 'SECRET');
    }
    cookie.save('token', token);
    this.setState({ isAuthenticated: true, user: validUser });
  }

  logout() {
    this.setState({
      user: { capabilities: [] },
      isAuthenticated: false,
    });
  }

  isAuthorized(capability) {
    const { user } = this.state;
    if (user) {
      const { capabilities } = user;
      return capabilities.includes(capability);
    }
    return false;
  }

  render() {
    // login: this.login.bind(this),
    // logout: this.logout.bind(this),
    // isAuthorized: this.isAuthorized.bind(this),
    // isAuthenticated: false,
    // user: {},
    const {
      login, logout, isAuthorized, isAuthenticated, user,
    } = this.state;
    const { children } = this.props;

    return (
      <AuthorizationContext.Provider value={{
        login, logout, isAuthorized, isAuthenticated, user,
      }}
      >
        {children}
      </AuthorizationContext.Provider>
    );
  }
}
AuthorizationProvider.propTypes = {
  children: propTypes.element.isRequired,
};

export default AuthorizationProvider;

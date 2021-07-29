import React, { useContext } from 'react';
import propTypes from 'prop-types';

import { AuthorizationContext } from '../../context/authorization';

function Auth({ capability, children }) {
  const { isAuthorized } = useContext(AuthorizationContext);

  if (isAuthorized(capability)) {
    return (
      <>
        { children }
      </>
    );
  }
  return null;
}
Auth.propTypes = {
  children: propTypes.element.isRequired,
  capability: propTypes.string.isRequired,
};

export default Auth;

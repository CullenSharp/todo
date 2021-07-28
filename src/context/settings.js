/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import propTypes from 'prop-types';

// ? why two exports again?
export const SettingsContext = React.createContext();

function SettingsProvider({ children }) {
  const [showComplete, setShowComplete] = useState(true);
  const [pageNumber, setPageNumber] = useState(3);
  // * add search field later

  return (
    <SettingsContext.Provider value={{ showComplete, pageNumber }}>
      {children}
    </SettingsContext.Provider>
  );
}
SettingsProvider.propTypes = {
  children: propTypes.element.isRequired,
};

export default SettingsProvider;

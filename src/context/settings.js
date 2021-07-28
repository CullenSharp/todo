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

  function toggleShow() {
    if (showComplete) {
      setShowComplete(false);
    } else {
      setShowComplete(true);
    }
  }

  function changeItemsPerPage(e) {
    const itemsPerPage = Number(e.target.value);
    console.log(e.target.value);
    setPageNumber(itemsPerPage);
  }

  return (
    <SettingsContext.Provider value={{
      showComplete,
      pageNumber,
      toggleShow,
      changeItemsPerPage,
    }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
SettingsProvider.propTypes = {
  children: propTypes.element.isRequired,
};

export default SettingsProvider;

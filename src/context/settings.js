/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

// ? why two exports again?
export const SettingsContext = React.createContext();

function SettingsProvider({ children }) {
  const [showComplete, setShowComplete] = useState(true);
  const [pageNumber, setPageNumber] = useState(3);
  // * add search field later

  function toggleShow() {
    if (localStorage.getItem('showCompleted')) { localStorage.removeItem('showCompleted'); }

    if (showComplete) {
      setShowComplete(false);
      localStorage.setItem('showCompleted', 'false');
    } else {
      setShowComplete(true);
      localStorage.setItem('showCompleted', 'true');
    }
  }

  function changeItemsPerPage(e) {
    if (localStorage.getItem('pageNumber')) { localStorage.removeItem('pageNumber'); }
    localStorage.setItem('itemsPerPage', e.target.value);

    const itemsPerPage = Number(e.target.value);
    setPageNumber(itemsPerPage);
  }

  useEffect(() => {
    if (localStorage.getItem('itemsPerPage')) {
      const itemsPerPage = Number(localStorage.getItem('itemsPerPage'));
      setPageNumber(itemsPerPage);
    }
    if (localStorage.getItem('showCompleted')) {
      const showCompleted = Boolean(localStorage.getItem('showCompleted'));
      setShowComplete(showCompleted);
    }
  }, []);

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

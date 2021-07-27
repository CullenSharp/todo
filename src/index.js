import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';

/**
 * renders app at root
 * @return {html}
 */
function Main() {
  return <App />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

import PropTypes from 'prop-types';
import React from 'react';

import '../styles/global.scss';

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

MyApp.propTypes={
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.object,
};

export default MyApp;
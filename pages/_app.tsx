import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

import '../styles/global.scss';
import { AppProps } from 'next/app';

// This default export is required in a new `pages/_app.js` file.
const App = ({ Component, pageProps }:AppProps):ReactElement => {

  return (
    <Component {...pageProps} />
  );
};

App.propTypes = {
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.object,
};

export default App;

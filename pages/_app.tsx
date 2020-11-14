import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

import '../styles/global.scss';
import { AppProps } from 'next/app';
import Navbar from '../components/navbar';
import CssBaseline from '@material-ui/core/CssBaseline';

// This default export is required in a new `pages/_app.js` file.
const App = ({ Component, pageProps }:AppProps):ReactElement => {
  return (
    <>
      {/* reset default css setting */}
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

App.propTypes = {
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.func,
};

export default App;

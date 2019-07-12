/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Helmet from 'react-helmet';

const NotFound = () => (
  <div style={{ height: '75vh' }} className="container valign-wrapper">
    <Helmet>
      <title>404 Not Found - MERN Auth</title>
    </Helmet>
    <div className="row">
      <div className="col s12 center-align">
        <h4>
          <b>Hello?</b>
        </h4>
        <p className="flow-text grey-text text-darken-1">
          Is it me you&apos;re looking for?
        </p>
      </div>
    </div>
  </div>
);

export default NotFound;

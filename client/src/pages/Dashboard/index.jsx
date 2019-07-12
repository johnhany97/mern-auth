/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { logoutUser } from '../../store/actions/auth';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.logoutUser();
  };

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { user } = this.props.auth;
    return (
      <div style={{ height: '75vh' }} className="container valign-wrapper">
        <Helmet>
          <title>Dashboard - MERN Auth</title>
        </Helmet>
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there, </b>
              {user.name.split(' ')[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack
                <span style={{ fontFamily: 'monospace' }}> MERN </span>
                app 👏
              </p>
            </h4>
            <button
              type="button"
              style={{
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem',
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

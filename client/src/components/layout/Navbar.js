import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/authActions";
import { Link } from "react-router-dom";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  //create variabes that will store links visible to the guests and members
  const authLinks = (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <a
          onClick={logout}
          href="#!"
          to="/enthusiasts"
          className="tooltipped"
          data-position="bottom"
          data-tooltip="Meet Manga Lovers"
        >
          <i className="material-icons left landing-btn">logout</i>
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <Link
          to="/login"
          className="tooltipped"
          data-position="bottom"
          data-tooltip="Log in to your account"
        >
          <i className="material-icons left landing-btn">login</i>
          Login
        </Link>
      </li>
      <li>
        <Link
          to="/register"
          className="tooltipped"
          data-position="bottom"
          data-tooltip="Create an account"
        >
          <i className="material-icons left landing-btn">keyboard_hide</i>
          Register
        </Link>
      </li>
      <li>
        <Link
          to="/enthusiasts"
          className="tooltipped"
          data-position="bottom"
          data-tooltip="Meet Manga Lovers"
        >
          <i className="material-icons left landing-btn">people</i>
          Enthusiasts
        </Link>
      </li>
    </ul>
  );
  return (
    <div className="navbar-fixed">
      <nav className="grey darken-4">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              <i className="large material-icons">tv</i>
              <span className="text-primary">Anime</span> Enthusiasts
            </Link>
          </div>
        </div>

        {/* if not loading and authenticated show authlinks else guest links */}
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});
export default connect(mapStateToProps, { logout })(Navbar);

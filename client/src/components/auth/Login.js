import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import PropTypes from "prop-types";

const Login = ({ isAuthenticated, login }) => {
  //state for login

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const credentials = { email, password };
    login(credentials);
  };

  //if user is logged in redirect the user to dashoard
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="log-reg">
      <div>
        <h4>
          <span className="text-primary">Log</span> in
        </h4>
        <p>
          <i className=" small material-icons prefix">person</i> Log in to Your
          Account
        </p>
      </div>
      <div className="row">
        <form className="col s6">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                id="email"
                name="email"
                type="email"
                className="validate"
                value={email}
                required
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="email">Email</label>
              <span
                className="helper-text"
                data-error="Please enter valid email"
                data-success="success"
              ></span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">https</i>
              <input
                id="password"
                type="password"
                name="password"
                className="validate"
                value={password}
                minLength="7"
                required
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="password">Password</label>
              <span
                className="helper-text"
                data-error="password must be 6 characters long"
                data-success="success"
              ></span>
            </div>
          </div>

          <a
            href="!#"
            className="btn-dark my-1 waves-effect waves-light btn"
            onClick={(e) => onSubmit(e)}
          >
            <i className="material-icons left">keyboard_hide</i>Login
          </a>

          <p>
            Dont Have an account?{" "}
            <Link to="/login">
              <span className="text-primary">Sign Up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);

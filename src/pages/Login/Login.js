import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    // Firebase login

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const handleSignUp = () => {
    // Firebase registration

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cheats.co%2Fblog%2Fwp-content%2Fuploads%2F2013%2F08%2Famazon-logo.jpg&f=1&nofb=1"
          alt="logo"
        />
      </Link>
      {/* <div className="login__container"> */}
      <div className="login__form">
        <div className="login__sign-in">
          <h1>Sign-in</h1>

          <label>
            <h5>Email</h5>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <h5>Password</h5>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button onClick={handleSignIn}>Sign In</button>

          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </div>

        <div className="login__sign-up">
          <div className="divider">
            <h5>New to Amazon?</h5>
          </div>
          <button onClick={handleSignUp}>Create your Amazon account</button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Login;

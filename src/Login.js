import React from "react";
import "./Login.css";

function Login() {
  const register = () => {};
  const loginToApp = () => {};

  return (
    <div className="login">
      <img
        scr="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itokq_lR0Vks"
        alt=""
      />

      <form>
        <input placeholder="full name required if registering" type="" />

        <input placeholder="Profile pic URL {optional}" type="text" />

        <input placeholder="Email" type="email" />

        <input placeholder="Password" type="password" />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;

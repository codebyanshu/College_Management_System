import React from "react";


function Login() {
	return (
    <>
    <Love />
      <header className="header">
        <div>
          <a href="/" className="logo">
            College Management System
          </a>
        </div>
        <div>
          <ul class="nav nav-underline">
            <li class="nav-item">
              <a class="nav-link active " aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-secondary" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-secondary" href="#">
                Course
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-secondary">Contact Us</a>
            </li>
          </ul>
        </div>
        <div id="menu-btn" className="fas fa-bars"></div>
      </header>
      <section className="home" id="home">
        <div className="Symbol ">
          <h3>LKTC</h3>
        </div>
      </section>
      <section className="login_1">
        <div className="login-form">
          <h2>Login</h2>
          <form action="">
            <input type="text" placeholder="Username" className="box" />
            <br />

            <input type="password" placeholder="Password" className="box" />
            <input type="submit" value="Login" className="btn" />
            <p>
              Forget Password? <a href="#">Click Here</a>
            </p>
            <p>
              Don't have an account? <a href="#">Create one</a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;

function Love() {
  return <h1>love</h1>;
}
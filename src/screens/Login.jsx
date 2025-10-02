import React from "react";


function Login() {
  return (
    <>
      <Login_head />
      <Login_body/>
    </>
  );
}

function Login_head() {
  return (
      <div className="headbody">
        <div className="cName"><h1>LKCTC</h1></div>
      <div className="nav-bar">
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
      </div>
  );
}
function Login_body() {
  return (
    <>
      <div className="lbody">
        <section className="home" id="home">
        <div className="icon">
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
      </div>
    </>
  );
}
export default Login;
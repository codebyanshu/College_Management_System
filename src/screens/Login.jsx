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
      <div className="headbody gap-20px">
        <div className="cName"><h1>LKCTC</h1></div>
      <div className="nav-bar">
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a className="nav-link active " aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-secondary" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-secondary" href="#">
              Course
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-secondary">Contact Us</a>
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
      <div className="lbody container-lg">
        <section className="home" id="home">
          <div className="icon container">
            <h3>LKTC</h3>
          </div>
        </section>
        <section className="login_1 ">
          <div className="login-form container shadow-lg p-3 mb-5 bg-white rounded boarder-2px">
            <h2>Login</h2>
            <form action="">
              <input type="text" placeholder="Username" className="box my-2" />
              <br />

              <input
                type="password"
                placeholder="Password"
                className="box my-2"
              />
              <br />
              <input
                type="submit"
                value="Login"
                className="btn btn-primary my-2"
              />
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
import React from "react";

let style = {
  backgroundColor: "rgb(235, 170, 58)",
  borderRadius: "20px",
};

function Login() {
  return (
    <>
    <div style={{backgroundColor : "#FFDE63"}}>
      <Login_head />
      <Login_body />
      </div>
    </>
  );
}

function Login_head() {
  return (
    <div className="headbody" style={{ backgroundColor: "#FFCB61"}}>
      <div className="cName">
        <h1>LKCTC</h1>
      </div>
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
      <div className="icon">
        <h3>LKTC</h3>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-end">
            <div
              className="login-form shadow-lg p-3 mb-5 bg-body-warning border border-warning border-5"
              style={style}
            >
              <h2>Login</h2>
              <form action="">
                <input
                  type="text"
                  placeholder="Username"
                  className="box my-2"
                />
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
          </div>
        </div>
      </div>
    </>
  );
}
      export default Login;
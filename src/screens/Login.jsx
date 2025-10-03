import React from "react";
import "./Loginstyle.css"

let style = {
  backgroundColor: "#f0f8ff",
  borderRadius: "20px",
};

function Login() {
  return (
    <>
      <div style={{ backgroundColor: "#f0f8ff" }}>
        <Login_head />
        <Login_body />
      </div>
    </>
  );
}

function Login_head() {
  return (
    <nav>
      <div
        className="headbody"
        style={{ backgroundColor: "#FFCB61", border: "2px solid #FFC107" }}
      >
        <div className="cName">
          <h1 className="mt-4 mt-sm-0">
            <a className="nav-link" href="#">
              LKCTC
            </a>
          </h1>
        </div>
        <div className="nav-bar">
          <ul className="nav nav-underline">
            <li className="nav-item px-3">
              <a className="nav-link p-0" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0" href="#">
                Course
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
function Login_body() {
  return (
    <div className="loginBody" style={{height : "92vh"}}>
      <div className="icon">
        <h3>LKTC</h3>
      </div>
      <div class="d-flex justify-content-end ">
        <div
          className="loginSection col-3 pb-2"
        >
          <h2 className="text-center pt-1 " style={{ color: "#333A73" }}>
            Login
          </h2>
          <form action="/" className="login-form px-4">
            <input
              type="text"
              placeholder="Username"
              className="box mb-0 border border-2 border-warning rounded-3 py-2 px-3 w-100"
              style={{ color: "black", backgroundColor: "#FDB44B" }}
            />
            <br />

            <input
              type="password"
              placeholder="Password"
              className="box my-0 border border-2 border-warning rounded-3 p-2 w-100 "
              style={{ color: "black", backgroundColor: "#FDB44B" }}
            />
            <br />
            <input
              type="submit"
              value="Login"
              className="btn btn-primary m-0 w-100 p-2 mb-4"
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
  );
}



export default Login;

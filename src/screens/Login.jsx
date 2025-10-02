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
    <div className="loginBody">
      <div className="icon">
        <h3>LKTC</h3>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-11 d-flex justify-content-end">
            <div
              className="login-form shadowd-lg px-5 pb-5 mb-3 bg-body-warning border border-warning border-5"
              style={style}
            >
              <h2
                className="h-25 text-center pt-3"
                style={{ color: "#333A73" }}
              >
                Login
              </h2>
              <form action="">
                <input
                  type="text"
                  placeholder="Username"
                  className="box my-2 border border-2 border-warning rounded-3 p-2 w-100"
                  style={{ color: "black", backgroundColor: "#FDB44B" }}
                />
                <br />

                <input
                  type="password"
                  placeholder="Password"
                  className="box my-2 border border-2 border-warning rounded-3 p-2 w-100 mb-3"
                  style={{ color: "black", backgroundColor: "#FDB44B" }}
                />
                <br />
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary my-2 w-100 p-2 mb-4"
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
    </div>
  );
}
      export default Login;
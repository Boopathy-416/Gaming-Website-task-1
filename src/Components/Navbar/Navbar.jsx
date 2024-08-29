import "./Navbar.css"

function Navbar() {
  return (
<div>
<nav className=" color navbar  sticky-top  fixed-top">
  <div className="container-fluid nov ">
    <a className="navbar-brand" href="#">
<img src="src/assets/1 (1).png" height={50} ></img>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasDarkNavbar"
      aria-controls="offcanvasDarkNavbar"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="offcanvas offcanvas-end text-bg-dark"
      tabIndex={-1}
      id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel"
    >
      <div className=" offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
          <img src="src/assets/1 (1).png" height="60px" width="auto"></img>
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="  offcanvas-body ">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
          <li className=" nav-tem">
            <a className=" text-danger nav-link active" aria-current="page" href="#Home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="text-danger text-danger nav-link active" aria-current="page" href="#about">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a className="text-danger nav-link active" aria-current="page" href="#service">
              SERVICES
            </a>
          </li>
          <li className="nav-item">
            <a className="text-danger nav-link active"  href="#clients">
              CLIENTS
            </a>
          </li>
          <li className="nav-item">
            <a className="  text-danger nav-link" href="#career">
              CAREERS
            </a>
          </li>
          <li className="nav-item">
            <a className="text-danger nav-link" href="#contact">
              CONTACT US
            </a>
          </li>
         
          <li className="nav-item dropdown-item ">
            <a
              className="text-danger nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
             SOCIAL MEDIA
            </a>
            <ul className=" icon">
              <li>
                <a className="dropdown-item  " href="#">
                <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                <i class="bi bi-youtube"></i>
                </a>
              </li>
              <li>
                <a className="dropdown-item  " href="#">
                <i class="bi bi-meta"></i>
                </a>
              </li>
              <li>
                <a className="dropdown-item  " href="#">
                <i class="bi bi-twitter-x"></i>
                </a>
              </li>
              <li>
                <a className="dropdown-item  " href="#">
                <i class="bi bi-google"></i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div>
          <img src="src/assets/1 (2).png"  className="side" ></img>
        </div>
      </div>
    </div>
  </div>
</nav>

</div>
  )
}

export default Navbar

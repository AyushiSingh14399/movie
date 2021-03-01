import React from 'react';
import '../App.css';

 function Navbar() {
    return (
        <section id="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <div className="container">
    <a className="navbar-brand" href="#">HOMEJAM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
        <li className="nav-item active">
          <a className="nav-link" aria-current="page" href="#">Help</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Account</a>
        </li>
        
        <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </ul>
    </div>
    </div>
    </div>
</nav>
</section>
    );
}

export default Navbar;
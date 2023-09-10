/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'



export default function Navbar() {
  return (
    <div>
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand text-dark " href="#">
        RAJESH SARKAR
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-dark x-*right " href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="../componets/about.js">
                about me
              </a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
               contact me 
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
          </form>
        </div>
      </nav>
      </>
    </div>
  )
}
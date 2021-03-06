import React, { Component } from 'react'
import Link from 'next/link'


export default class Navbar extends Component {
    render() {
        return (
     
          <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand" href="index.html">E-learning <span>Site</span></a>              
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fa fa-bars"></span> Menu
              </button>
              <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Page</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown04">
                      <a className="dropdown-item" href="#">Page 1</a>
                      <a className="dropdown-item" href="#">Page 2</a>
                      <a className="dropdown-item" href="#">Page 3</a>
                      <a className="dropdown-item" href="#">Page 4</a>
                    </div>
                  </li>
                  <li className="nav-item"><a href="#" className="nav-link">Catalog</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                </ul>
              </div>
            </div>
        </nav>
        
           
        )
    }
}

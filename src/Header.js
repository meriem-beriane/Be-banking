import React, { Component, useState, useEffect,useCallback } from 'react'

import { withRouter, Link } from 'react-router'

import { useHistory } from "react-router-dom"
import logo from './images/BeLogo.png'

import {NavLink} from 'react-router-dom'

// import { withRouter } from "react-router-dom";

const Header = () => {
  
  
  
  //use  effect for page changes, it uses history to know if the pages changes to close the about page
  
  

    


    return (
      <div >
    <div className="header">
      <div className="container">
        <nav className="nav">
          <div className="menu-toggle" >
            <i className="fa fa-bars"></i>
            <i className="fa fa-times"></i>
          </div>
          <ul className="nav-list">
          
          
              
            <li className="logo "><NavLink to="/"  ><img  className="logo"src={logo}/></NavLink>
              
            </li>

            
            
            
            
                 
          </ul>
          
          <ul className="nav-list no-border">
          
          
              
            
            <li className="nav-item colorB" ><NavLink to="/transferList"  className="nav-item colorB">Historique des Transactions</NavLink>
              
            </li>

            
            
            
            
                 
          </ul>
          </nav>
          
      </div>
      </div>
      
      </div>
    )
  }


export default Header;
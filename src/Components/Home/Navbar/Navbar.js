import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
       

      
      <div class=" navbar-expand-lg navbar-light ">
          <ul class="nav justify-content-end">
  <li class="nav-item ">
    <a class="nav-link mr-5 active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item ">
    <a class="nav-link mr-5" href="#">Dental Service</a>
  </li>
  <li class="nav-item ">
    <a class="nav-link mr-5 text-white" href="#">Blog</a>
  </li>
  <li class="nav-item "> 
    <a class="nav-link mr-5 text-white" href="#">Services</a>
  </li>
  <li class="nav-item ">
    <a class="nav-link mr-5 text-white" href="#">About</a>
  </li>
  <li class="nav-item ">
    <a class="nav-link mr-5 text-white " href="#">Contact us</a>
  </li>
  
</ul> 
        </div>


    );
};

export default Navbar;
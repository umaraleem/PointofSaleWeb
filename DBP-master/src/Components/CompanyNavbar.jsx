import React from 'react'
import { useEffect, useState } from 'react';


const CompanyNavbar = () => {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    async function fetchData() {
      setUsers(localStorage.getItem("UserId"))
    }

    fetchData();
  },[])

  return (
    <div>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <a class="navbar-brand mt-2 mt-lg-0" href="\CompanysHome">
        
      </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Company's Portal</span>
      </div>
        <li class="nav-item">
          <a class="nav-link" href="\CompanysHome">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="\CompanyAddProduct">Add Products</a>
        </li>
      </ul>
    </div>

    <div class="d-flex align-items-center">
     
      <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href={`\CompanysProfile?UserId=${users}`}>My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="\">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</div>
  )
}

export default CompanyNavbar

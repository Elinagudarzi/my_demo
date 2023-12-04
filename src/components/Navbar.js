import React from 'react';
import './navbar.css'

const Navbar = () => {
  return (
    <header>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
     
      <div class="icons">
      <a href="/profile"><i class="fas fa-user"></i></a>
      <a href="/cart"><i class="fas fa-shopping-cart"></i></a> 
      <a href="/"><i class="fas fa-home"></i></a> 
      </div>

      <nav>
        <a href="/">دوره ها </a>
        <a href="/hamkar" >همکاران ما  </a>
        <a href="/content">محتوای فرهنگی </a>
        <a href="/lib">کتابخانه ها</a>
        <a href="/mag">مجلات و مقاله ها </a>
        <a href="/sem">سمینار ها و کنگره ها</a>
      </nav>
      <div class="search-container">
        <input type="text" id="search-input" placeholder="Search..."/>
        <button id="search-button">Search</button>
      </div>
    </header>
  );
}

export default Navbar;
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='logo'>Gardener</div>
        <nav className='navBar'></nav>
        <div className='logIn'><a href='/login'>Create A Card</a></div> 
          <ul className='pages'>
              <li><a href='/'>Home</a></li>
              <li><a href='/gardens'>Plants</a></li>
              <li><a href='/mygarden'>My Garden</a></li>
              <li><a href='/resources'>Garden Resources</a></li>
          </ul>
     </div>
    );
  }
}

export default Header;
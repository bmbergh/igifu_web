import React from 'react';

import logo from 'img/logo-app-with-name.png';

export default class NavContainer extends React.Component{

  render(){
    return(
      <div className='nav-container'>
        <div><img src={logo} /></div>
      </div>
    )
  }
}
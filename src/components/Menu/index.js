import React from 'react';

import './style.css';

import Logo from '../../assets/Logo.png';
import Button from '../../components/Button';

function Menu(){
  return(
    <nav className="Menu">
       <a href="/"> 
            <img className="Logo" src={Logo} alt="Aluraflix Logo"/>
       </a>

      <Button as="a" >
        Ver Mais
      </Button>

    </nav>
  )
}

export default Menu;
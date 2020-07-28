import React from 'react';

import './style.css';

import Logo from '../../assets/Logo.png';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

function Menu(){
  return(
    <nav className="Menu">
       <Link to="/"> 
            <img className="Logo" src={Logo} alt="Aluraflix Logo"/>
       </Link>

      <Button as={Link} to="/cadastro/video">
        Ver Mais
      </Button>

    </nav>
  )
}

export default Menu;
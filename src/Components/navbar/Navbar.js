import React, { useState } from 'react';
import * as S from './Navbar.style';

const Navbar = () => {

  const [showMenuBurguer, setShowMenuBurguer] = useState(false);

  console.log(showMenuBurguer);
  return (
    <S.ContainerNavbar>  
      <S.ContainerLogo>
        <S.ImageLogo src='/img/LOGO ANTHONY.png' alt='logo anthony martinez' />
        <div>
          <h1>Anthony Martínez</h1>
          <h2>Frontend Developer</h2>
        </div>
      </S.ContainerLogo>
      <S.ContainerBurguer onClick={() => setShowMenuBurguer(!showMenuBurguer)}>
        <S.BurguerMenu />
        <S.BurguerMenu />
        <S.BurguerMenu />
      </S.ContainerBurguer>
      <S.ContainerItems showMenuBurguer={showMenuBurguer}>
        <p>About me</p>
        <p>Proyects</p>
        <S.Button>Contact Me 🖖</S.Button>
      </S.ContainerItems>     
    </S.ContainerNavbar>
 ); 
}

export default Navbar
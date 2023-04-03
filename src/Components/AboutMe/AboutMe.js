import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkedin from "../../svg/linkedin.svg";
import logoUdemy from "../../svg/udemy.svg";
import logoWhatsapp from "../../svg/whatsapp.svg";


const AboutMe = () => {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/thonix30",
      logo: logoGithub,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/anthonymartinez30/",
      logo: logoLinkedin,
    },
    {
      name: "Udemy",
      link: "https://www.udemy.com/user/anthony-martinez-229/",
      logo: logoUdemy,
    },
    {
      name: "Whatsapp",
      link: "https://api.whatsapp.com/send?phone=50231856325",
      logo: logoWhatsapp,
    },
    
  ];

  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>🖖 Hello, i'm</p>
            <p>Anthony Martínez</p>
            <p>Frontend Developer</p>
          </S.Title>
          <S.DescriptionText>
            <p>Mi nombre es Anthony Alva Martinez tengo 24 años de edad, soy de Huehuetenango-Guatemala. Soy amante de la naturaleza, deporte, arte y sobre todo la informatica. </p>

            <p>Me enfoco en el desarrollo web, ya que me gusta mucho lo visual que es el FrontEnd, tengo conocimientos solidos tanto de Frontend como backend, me gustaria tener la oportunidad de laborar en una empresa informatica para desarrollar mis habilidades, como para poner en practica mis conocimientos e adquirir nuevos. </p>
          </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="__blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt={network.name} />
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
          <img src="/img/foto.png" alt="Anthony Martinez - Frontend Developer" />
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};

export default AboutMe;
import React, { useEffect, useState } from "react";

import { FaWineBottle, FaWineGlass, FaGithub, FaInstagram, FaHome, FaLinkedin, FaTooth } from 'react-icons/fa';

import { Container, Header, Avatar, Username, Main, Contact, Footer } from "./style/global";

import API from './services/api'

function App() {
  const [avatarimg, setAvatarimg] = useState('');
  const [username, setUsername] = useState('');
  

  useEffect(() => {
    async function  getmyprofile() {
      const response = await API.get( "users/lucascardev" );
      // console.log(response);
      setAvatarimg(response.data.avatar_url);
      setUsername(response.data.login);
    };
    getmyprofile();
  }, [])

  return (
    <>
      <Header>
      <Avatar src={avatarimg} />
      <Username >@<a href="https://github.com/lucascardev" alt="Github profile" >{username}</a></Username>
      <Contact>
       <p><b>Phonenumber: </b>+5571992931330</p>
        <p><b>Email: </b>lucasmatheussc97@gmail.com</p>
      </Contact>
      </Header>
    <Container>
      <Main>
        <h1 > Hello there i'm Lucas, lets take a <FaWineBottle size={35} /> <FaWineGlass size={15}  /> some time. </h1>
           <p> Keep contact with me on fallowing my social media </p>
           
           <div className='linkholder' >
           <a href='https://www.instagram.com/lucas_mtheus/' ><FaInstagram  size={55} /></a> <a href='https://github.com/lucascardev'><FaGithub  size={55} /></a> <a href='https://lightupweb.mailchimpsites.com/' ><FaHome size={55}/></a> <a href='https://www.linkedin.com/in/lucas-matheus-s-cardoso-266884169/'><FaLinkedin size={55} /></a>
           </div>
          
           <p> Im also a dentistry student, at 6 period... Half of way... </p>
           <div className='linkholder' >
           <a href='https://www.instagram.com/odontosemcomplicacao/' ><FaTooth  size={55} /></a> 
           </div>
      </Main>
    </Container>

    <Footer>
       <p>This page was build using the <a href="https://pages.github.com/"><b>GitHub Pages</b></a> an excelent frontend server and a react aplication...</p>
    </Footer>
  </>
  );
}

export default App;

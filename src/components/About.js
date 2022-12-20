import { Avatar } from '@mui/material';
import React from 'react';
import ProfileImage from '../assets/images/profile.png';
import { LinkedIn, GitHub } from '@mui/icons-material'

const About = () => {
  return (
    <div className="about">
      <Avatar sx={{width: 150, height: 150, objectPosition: 'top'}} style={{objectPosition: 'top'}} alt="Remy Sharp" src={ProfileImage} />
      <h1>Luis Otavio Taufer</h1>
      <div className='link-group'>
        <a href='https://www.linkedin.com/in/luis-otavio-taufer-199470160/' target='_blank'><LinkedIn/></a>
        <a href='https://github.com/LuisTaufer' target='_blank'><GitHub/></a>
      </div>
    </div>
  );
};

export default About;

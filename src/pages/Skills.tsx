import React from 'react';
import { motion } from 'framer-motion';
import { BallCanvas } from '../components/canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
// import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import ParticleComponent from '../components/ParticleComponent';
import BigTitle from '../components/BigTitle';
import styled from 'styled-components';

// Define the type for a technology item
interface Technology {
  name: string;
  icon: string; // Assuming the icon is a string (URL or class name). Adjust as needed.
}


// Define the interface for the props
interface BigTitleProps {
  top?: string;
  left?: string;
  right?: string;
  text: string;
}
const Text = styled.h1<BigTitleProps>`
  position: sticky;
padding: 40px 30px 0px 30px;
margin-right: -49px;
display:flex;
flex-direction: row-reverse;
//   top: 20%;
  left: 30%;
  right: 20%;
 color: rgba(252, 246, 244, 0.1);
  font-size: calc(5rem + 5vw);
  font-family: 'Ubuntu Mono', monospace;
  z-index: 0;
`;


const Tech: React.FC = () => {


  return (
    <>

      {/* <motion.div variants={textVariant()}>
        
      </motion.div> */}
<Text >
    SKILLS
</Text>
{/* <div className='flex '>
<div className='top-5%'>
<BigTitle text="SKILLS" top="5%" right="12%" position="fixed"/>
</div> */}

      <div className="flex flex-wrap justify-center gap-10  ">
     
      <ParticleComponent/>
        {technologies.map((technology: Technology) => (
          <div className="w-28 h-15" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      {/* </div> */}
    </>
  );
};

export default SectionWrapper(Tech, '');

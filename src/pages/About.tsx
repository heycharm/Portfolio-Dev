import { motion } from 'framer-motion';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { Code2, Database, FileCode, Monitor, Server, Terminal, Wrench } from 'lucide-react';
import ParticleComponent from '../components/ParticleComponent';
import BigTitle from '../components/BigTitle';




const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: auto /* Increased height for both sections */
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  padding: 2rem;
  width: 50vw;
  height: 85vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`;



const About = () => {
  return (
    <Box>
      <ParticleComponent theme="dark" />

      {/* ABOUT Section */}
      <Spaceman>
        {/* <img src={astronaut} alt="spaceman" /> */}
      </Spaceman>
      <Main>
        I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.
        <br /> <br />
        I'm interested in the whole frontend stack, like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.
        <br /> <br />
        I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
      </Main>

      <BigTitle text="ABOUT" top="10%" left="5%" />



    </Box>
    
  );
};

export default About;

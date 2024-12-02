import styled, { keyframes } from 'styled-components';
import ParticleComponent from '../components/ParticleComponent';
import BigTitle from '../components/BigTitle';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh; /* Ensures full height */
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Floating animation for spaceman
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

  @media (max-width: 768px) {
    width: 30vw;
    top: 15%;
    right: 3%;
  }

  @media (max-width: 480px) {
    width: 40vw;
    top: 20%;
    right: 2%;
  }
`;

// Keyframes for ease-in animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Apply animation to Main component
const Main = styled.div`
  width: 60vw;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(0.8rem + 0.5vw);
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  text-align: center;
  position: relative;
  margin-top: -20px;

  opacity: 0; /* Start with invisible */
  animation: ${fadeIn} 1.5s ease-in forwards; /* Ease-in animation */

  @media (max-width: 1024px) {
    width: 70vw;
    font-size: calc(0.7rem + 0.5vw);
  }

  @media (max-width: 768px) {
    width: 85vw;
    font-size: calc(0.7rem + 0.4vw);
  }

  @media (max-width: 480px) {
    width: 90vw;
    font-size: 15px;
  }
`;

const AboutTxt = styled.div`
  margin: 50px 0px 0px 0px;
`;

const About = () => {
  return (
    <Box>
      <ParticleComponent theme="dark" />

      {/* "ABOUT" at the Top */}
      <AboutTxt>
        <BigTitle text="ABOUT" top="5%" left="5%" />
      </AboutTxt>

      {/* Spaceman Animation */}
      <Spaceman>
        {/* <img src={astronaut} alt="spaceman" /> */}
      </Spaceman>

      {/* Main Content */}
      <Main>
        <p>
          Hi, I'm Chinmay Pundir, a passionate 4th-year B.Tech student specializing in CSE with AIML. I am a dedicated Full Stack Web Developer with expertise in building dynamic, user-friendly web applications.
        </p>
        <br />
        <p>
          My tech stack includes MERN (MongoDB, Express, React, Node.js), and I enjoy turning ideas into scalable and efficient solutions.
        </p>
        <br />
        <p>
          Beyond coding, I’m always eager to learn, explore cutting-edge technologies, and contribute to impactful projects. Let's create something amazing together!
        </p>
      </Main>
    </Box>
  );
};

export default About;

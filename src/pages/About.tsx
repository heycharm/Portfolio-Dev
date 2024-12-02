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

const Main = styled.div`
  width: 60vw;
  padding: 2rem;
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
  margin-top: -3rem;

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
    font-size: calc(0.6rem + 0.3vw);
  }
`;

const About = () => {
  return (
    <Box>
      <ParticleComponent theme="dark" />

      {/* "ABOUT" at the Top */}
      <BigTitle text="ABOUT" top="5%" left="5%" />

      {/* Spaceman Animation */}
      <Spaceman>
        {/* <img src={astronaut} alt="spaceman" /> */}
      </Spaceman>

      {/* Main Content */}
      <Main>
        <p>
          I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user
          experience.
        </p>
        <br />
        <p>
          I'm interested in the whole frontend stack, like trying new things and building great projects. I'm an
          independent freelancer and blogger. I love to write blogs and read books.
        </p>
        <br />
        <p>
          I believe everything is an Art when you put your consciousness in it. You can connect with me via social
          links.
        </p>
      </Main>
    </Box>
  );
};

export default About;

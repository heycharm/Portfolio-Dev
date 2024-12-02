import React from 'react';
import { BallCanvas } from '../components/canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import ParticleComponent from '../components/ParticleComponent';
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
  padding: 20px 15px 0px 15px;
  text-align: center;
  color: rgba(252, 246, 244, 0.1);
  font-size: calc(5rem + 5vw); /* Adjust font size for responsiveness */
   font-family: "League Spartan", sans-serif;
   font-weight: 800;
  z-index: 0;

  @media (max-width: 768px) {
    font-size: calc(2rem + 1vw); /* Smaller font size for tablets */
  }

  @media (max-width: 480px) {
    font-size: 4rem; /* Smaller font size for mobile */

  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem; /* Adjust gap for smaller screens */
  }

  @media (max-width: 480px) {
    gap: 1rem; /* Adjust gap further for mobile screens */
  }
`;

const SkillItem = styled.div`
  width: 150px; /* Default size */
  height: 150px;

  @media (max-width: 768px) {
    width: 80px; /* Adjust size for smaller screens */
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 100px; /* Adjust size further for mobile screens */
    height: 100px;
  }
`;

const Tech: React.FC = () => {
  return (
    <>
      <Text>SKILLS</Text>
      <ParticleComponent />
      <SkillsContainer>
        {technologies.map((technology: Technology) => (
          <SkillItem key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </SkillItem>
        ))}
      </SkillsContainer>
    </>
  );
};

export default SectionWrapper(Tech, '');

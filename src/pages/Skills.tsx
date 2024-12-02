import React, { useEffect, useRef } from "react";
import { BallCanvas } from "../components/canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import ParticleComponent from "../components/ParticleComponent";
import styled from "styled-components";
import gsap from "gsap";

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
  font-size: calc(5rem + 5vw);
  font-family: "League Spartan", sans-serif;
  font-weight: 800;
  z-index: 0;

  @media (max-width: 768px) {
    font-size: calc(2rem + 1vw);
  }

  @media (max-width: 480px) {
    font-size: 4rem;
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
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const SkillItem = styled.div`
  width: 150px;
  height: 150px;
  opacity: 0; /* Initially hidden for animation */
  transform: translateY(20px); /* Start with a downward offset */

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const Tech: React.FC = () => {
  const skillItemsRef = useRef<HTMLDivElement[]>([]); // Ref array for skill items

  useEffect(() => {
    if (skillItemsRef.current) {
      // Animate all SkillItem elements with a staggered ease-in effect
      gsap.to(skillItemsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power1.in", // Apply ease-in effect
        stagger: 0.1, // Stagger animations
      });
    }
  }, []);
  

  return (
    <>
      <Text>SKILLS</Text>
      <ParticleComponent />
      <SkillsContainer>
        {technologies.map((technology: Technology, index) => (
          <SkillItem
            key={technology.name}
            ref={(el) => (skillItemsRef.current[index] = el!)} // Assign refs dynamically
          >
            <BallCanvas icon={technology.icon} />
          </SkillItem>
        ))}
      </SkillsContainer>
    </>
  );
};

export default SectionWrapper(Tech, "");

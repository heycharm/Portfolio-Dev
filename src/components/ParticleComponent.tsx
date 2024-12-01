import React from "react";
import styled from "styled-components";
import ConfigDark from "../config/particlejs-config.json";
import ConfigLight from "../config/particlejs-config-light.json";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

// Define props interface
interface ParticleComponentProps {
  theme: "light" | "dark";
}

const ParticleComponent: React.FC<ParticleComponentProps> = ({ theme }) => {
  const particlesInit = async (main: any) => {
    // Load the tsparticles engine
    await loadFull(main);
  };

  return (
    <Box>
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        init={particlesInit} // Initialize the tsparticles instance
        options={theme === "light" ? ConfigLight : ConfigDark} // Correct property for configuration
      />
    </Box>
  );
};

export default ParticleComponent;

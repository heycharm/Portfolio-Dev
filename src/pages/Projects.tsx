import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
// import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";
import ParticleComponent from "../components/ParticleComponent";

import { Work } from "../data/WorkData";
import Card from "../components/Card";
// import { YinYang } from "./AllSvgs";
import BigTitle from "../components/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 35vh;
  display: flex;
  color: white;
  

`
;


// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};
 const DarkTheme = {

  body:"#000000",
  text:"#FCF6F4",
  fontFamily:"'Source Sans Pro', sans-serif",
  textRgba : "252, 246, 244",
  bodyRgba:"0,0,0",
}
const Projects: React.FC = () => {
  const ref = useRef<HTMLUListElement | null>(null);
  const yinyang = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    const yinYangElement = yinyang.current;

    const rotate = () => {
      if (element) {
        element.style.transform = `translateX(${-window.scrollY}px)`; // Replaced pageYOffset with scrollY
      }
    
      if (yinYangElement) {
        yinYangElement.style.transform = `rotate(${-window.scrollY}deg)`; // Replaced pageYOffset with scrollY
      }
    };
    

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return ( 
  
    <ThemeProvider theme={DarkTheme}>
     
    <Box>
    <ParticleComponent theme="dark" />
      <Main ref={ref} variants={container} initial="hidden" animate="show">
        {Work.map((d) => (
          <Card key={d.id} data={d} />
        ))}
      </Main>
  

      <BigTitle text="WORK" top="5%" right="5%" position="fixed"/>
      {/* <Text text="WORK" top="10%" right="20%" /> */}
    </Box>
  </ThemeProvider>
  );
};

export default Projects;

import React from 'react';
import styled from 'styled-components';

// Define the interface for the props
interface BigTitleProps {
  top?: string;
  left?: string;
  right?: string;
  text: string;
  position?: string;
}

// Styled component with props typing
const Text = styled.h1<BigTitleProps>`
padding: 53px 47px 31px 53px;

  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: rgba(252, 246, 244, 0.1);
  font-size: calc(5rem + 5vw);
  font-family: "League Spartan", sans-serif;
   font-weight: 800;
  z-index: 0;
`;

// Functional component with props typing
const BigTitle: React.FC<BigTitleProps> = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right} 
    position={props.position}>
      {props.text} 
    </Text>
  );
};

export default BigTitle;

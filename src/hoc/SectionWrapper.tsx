import React, { FC, memo } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
// Import styles or add a fallback
import { styles } from "../styles";

// Define a type for the HOC function props
interface SectionWrapperProps {
  idName: string;
}

const SectionWrapper = <T extends {}>(
  Component: FC<T>, // React Functional Component with generic props
  idName: string
): FC<T> => {
  const HOC: FC<T> = (props) => {
    return (
      <motion.section
        variants={staggerContainer({ staggerChildren: 0.2, delayChildren: 0.1 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span
          className="hash-span"
          id={idName}
          aria-hidden="true" // Hides the span for screen readers
        >
          &nbsp;
        </span>

        {/* Forward all props to the wrapped component */}
        <Component {...(props as T)} />
      </motion.section>
    );
  };

  return memo(HOC); // Optimize re-renders
};

export default SectionWrapper;

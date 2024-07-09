import React from 'react';
import { Parallax } from 'react-parallax';

function ParallaxSection({ bgImage, children }) {
  return (
    <Parallax bgImage={bgImage} strength={300}>
      <div className="h-96 flex items-center justify-center">
        {children}
      </div>
    </Parallax>
  );
}

export default ParallaxSection;

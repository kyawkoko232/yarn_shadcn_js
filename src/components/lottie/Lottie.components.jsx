import React from 'react'
import Lottie from 'react-lottie';
import animationData from './animations/bubble.json';

const LottieComponent = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

  return (
    <>
    <div>LottieComponent</div>
    
    <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
    </>
  )
}

export default LottieComponent
import React, { useEffect, createRef } from "react";
import lottie from "lottie-web";
import animation from "../../animations/Ryval_Keyboard_Final_NoBG.json";

const AnimatedBg = () => {
  let animationContainer = createRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current, // current instance of our container!
      animationData: animation, // animation file!
      renderer: "svg",
      loop: true,
      autoplay: true
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);

  return (
    <div className="App">
      <div
        style={{ width: "800px", margin: '20px', transform: "translate3d(0px, 0px, 0px)" }}
        className="animation-container"
        ref={animationContainer}
      />
    </div>
  )
};

export default AnimatedBg

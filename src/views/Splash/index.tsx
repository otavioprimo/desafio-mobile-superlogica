import React from "react";
import { Container } from "./styles";
import LottieView from "lottie-react-native";

const Splash: React.FC = () => {
  return (
    <Container>
      <LottieView
        source={require("../../../assets/morty.json")}
        autoPlay
        loop={false}
        speed={0.5}
        onAnimationFinish={() => {
          console.log("animation finished");
        }}
      />
    </Container>
  );
};

export default Splash;

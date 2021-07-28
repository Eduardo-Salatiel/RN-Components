import { useRef } from "react";
import { Animated, Easing } from "react-native";

const useAnimated = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      duration: 300,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      duration: 300,
      toValue: 0,
      useNativeDriver: true,
    }).start();

    Animated.timing(position, {
      toValue: -100,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const translateMove = (initValue: number, duration: number = 300) => {
    position.setValue(initValue);
    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    translateMove,
  };
};

export default useAnimated;

import React, { useContext, useRef } from "react";
import { Animated, Button, Easing, StyleSheet, View } from "react-native";
import { ThemeContext } from "../context/ThemeContext/ThemeContext";
import useAnimated from "../hooks/useAnimated";

const Animation101Screen = () => {
  const { theme: {colors} } = useContext(ThemeContext);
  const { position, opacity, fadeIn, fadeOut, translateMove } = useAnimated();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,
          marginBottom: 20,
          opacity,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <Button
        title="Fade In"
        onPress={() => {
          fadeIn();
          translateMove(-100, 800);
        }}
      />
      <Button title="Fade Out" onPress={fadeOut} />
    </View>
  );
};

export default Animation101Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  purpleBox: {
    backgroundColor: "#5856d6",
    width: 150,
    height: 150,
  },
});

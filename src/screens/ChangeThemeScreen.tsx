import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import HeaderTitle from "../components/HeaderTitle";
import { ThemeContext } from "../context/ThemeContext/ThemeContext";
import { styles } from "../theme/appTheme";

const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            justifyContent: "center",
            width: 150,
            height: 50,
            borderRadius: 20,
          }}
          activeOpacity={0.9}
          onPress={() => setDarkTheme()}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 22 }}>
            Dark
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            justifyContent: "center",
            width: 150,
            height: 50,
            borderRadius: 20,
          }}
          activeOpacity={0.9}
          onPress={() => setLightTheme()}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 22 }}>
            Light
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeThemeScreen;

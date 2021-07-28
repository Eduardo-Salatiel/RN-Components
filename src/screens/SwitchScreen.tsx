import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomSwitch from "../components/CustomSwitch";
import HeaderTitle from "../components/HeaderTitle";
import { ThemeContext } from "../context/ThemeContext/ThemeContext";

const SwitchScreen = () => {
  const { theme: { colors } } = useContext(ThemeContext);
  const [state, setState] = useState({
    isActive: false,
    isHungry: false,
    isHappy: false,
  });

  const { isActive, isHappy, isHungry } = state;

  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{ marginHorizontal: 20 }}>
      <HeaderTitle title="Switches" />
      {/* --- SWITCHES --- */}
      <View style={{ ...styles.switchRow, marginTop: 0 }}>
        <Text
          style={{
            ...styles.fontStyle,
            color: colors.text,
          }}
        >
          Active
        </Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, "isActive")}
        />
      </View>
      <View style={styles.switchRow}>
        <Text
          style={{
            ...styles.fontStyle,
            color: colors.text,
          }}
        >
          Hungry
        </Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, "isHungry")}
        />
      </View>
      <View style={styles.switchRow}>
        <Text
          style={{
            ...styles.fontStyle,
            color: colors.text,
          }}
        >
          Happy
        </Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, "isHappy")}
        />
      </View>
      {/* --- STATE --- */}
      <Text
        style={{ ...styles.fontStyle, marginTop: 20, color: colors.text }}
      >
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

export default SwitchScreen;

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  fontStyle: {
    fontSize: 24,
  },
});

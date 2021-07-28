import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MenuItem } from "../interfaces/AppInterfaces";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/core";
import { ThemeContext } from "../context/ThemeContext/ThemeContext";

interface Props {
  menuItem: MenuItem;
}

const FlatListMenuItem = ({ menuItem }: Props) => {
  const { theme: {colors} } = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component)}
    >
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={colors.primary} size={23} />
        <Text style={{
          ...styles.itemText,
          color: colors.text
        }}>{menuItem.name}</Text>
        <View style={{ flex: 1 }} />
        <Icon name="chevron-forward-outline" color={colors.primary} size={23} />
      </View>
    </TouchableOpacity>
  );
};

export default FlatListMenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  itemText: {
    fontSize: 19,
    marginLeft: 10,
  },
});

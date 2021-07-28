import React, { useContext } from "react";
import { View } from "react-native";
import { ThemeContext } from '../context/ThemeContext/ThemeContext';

const ItemSeparator = () => {
  const { theme: {dividerColor} } = useContext(ThemeContext);
  return (
    <View style={{ borderBottomWidth: 1, marginVertical: 8, backgroundColor: dividerColor, opacity: 0.8 }} />
  );
};
export default ItemSeparator;

import React from "react";
import { Alert, Button, View } from "react-native";
import HeaderTitle from "../components/HeaderTitle";
import { styles } from "../theme/appTheme";

const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert("Alerta", "Este es el gran mensaje de la alerta", [
      {
        text: "Cancel",
        onPress: () => console.log("Ok lo cancelamos"),
        style: "destructive",
      },
      { text: "OK", onPress: () => console.log("Ok aceptamos") },
    ],{
        cancelable: true,
    });
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar alerta" onPress={showAlert} />
    </View>
  );
};

export default AlertScreen;

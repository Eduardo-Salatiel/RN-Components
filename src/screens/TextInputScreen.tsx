import React, { useContext } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from "react-native";
import CustomSwitch from "../components/CustomSwitch";
import HeaderTitle from "../components/HeaderTitle";
import { ThemeContext } from "../context/ThemeContext/ThemeContext";
import { useForm } from "../hooks/useForm";
import { styles } from "../theme/appTheme";

const TextInputScreen = () => {
  const { theme: {colors} } = useContext(ThemeContext);
    const { form, handleChange } = useForm({
        name: "",
        email: "",
        phone: "",
        isSubscibe: false
      });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="TextInputs" />
          <TextInput
            style={{
              ...stylesTextInput.inputStyle,
              borderColor: colors.border,
            }}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => handleChange(value, "name")}
          />
          <TextInput
            style={{
              ...stylesTextInput.inputStyle,
              borderColor: colors.border,
            }}
            placeholder="Ingrese su email"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => handleChange(value, "email")}
            keyboardType="email-address"
          />
          <TextInput
            style={{
              ...stylesTextInput.inputStyle,
              borderColor: colors.border,
            }}
            placeholder="Ingresa tu telefono"
            onChangeText={value => handleChange(value, "phone")}
            keyboardType="phone-pad"
          />
          <View style={stylesTextInput.switchRow}>
              <Text style={{color: colors.text}}>Subscribirme</Text>
              <CustomSwitch isOn={form.isSubscibe} onChange={(value) => handleChange(value,'isSubscibe')} />
          </View>

          <HeaderTitle title={JSON.stringify(form, null, 3)} />
        </View>
        <View style={{ height: 50 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;

const stylesTextInput = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: 'white'
  },
  switchRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  }
});

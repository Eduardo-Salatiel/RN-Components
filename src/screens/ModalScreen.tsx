import React, { useState } from "react";
import { Button, Modal, Text, View } from "react-native";
import HeaderTitle from "../components/HeaderTitle";

const ModalScreen = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      <HeaderTitle title="Modal" />
      <Button title="Open modal" onPress={() => setShowModal(true)} />

      <Modal animationType="fade" visible={showModal} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.3)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "80%",
              borderRadius: 10,
              backgroundColor: "white",
              padding: 15
            }}
          >
            <HeaderTitle title="Super Modal" />
            <Text style={{paddingVertical: 10}}>Este es el super contenido del modal</Text>
            <Button title="Close modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;

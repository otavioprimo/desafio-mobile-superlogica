import React from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";

interface Props {
  data: any;
  modalVisible: boolean;
  setModalVisible: (bool: boolean) => void;
}

export const DrawerModal = ({ data, modalVisible, setModalVisible }: Props) => {
  const { text } = data;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.cardContainer}>
          <Text>{text}</Text>
          <Pressable
            style={styles.modalCloseButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.modalTextButton}>Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  cardContainer: {
    position: "relative",
    bottom: 0,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 32,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalCloseButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#8BCF21",
  },
  modalTextButton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

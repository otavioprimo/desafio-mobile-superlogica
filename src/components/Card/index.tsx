import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  data: any;
}

export const Card = ({ data }: Props) => {
  const { item } = data;

  return (
    <TouchableOpacity style={styles.container}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    margin: 16,
    borderRadius: 8,
    backgroundColor: "#8BCF21",
  },
});

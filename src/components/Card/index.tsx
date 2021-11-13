import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  data: any;
}

export const Card = ({ data }: Props) => {
  const { item } = data;

  return (
    <TouchableOpacity style={styles.container}>
      <Image 
        source={{ uri: item.image }} 
        style={styles.image} 
      />
      <View style={styles.cardText}>
        <Text>{item.name}</Text>
        <Text>{item.species}</Text>
        <Text>{item.status}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",

    margin: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#8BCF21",
  },
  image: {
    width: 50,
    height: 50,
    margin: 8,
    borderRadius: 24,
  },
  cardText: {
    justifyContent: "space-between",
  },
});

import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

interface Props {
  data: any;
  setModalVisible: any;
}

// const Portal = ({children}) => {
//   return (
//     <View
//       style={styles.portal}
//     >
//       <Image
//         source={require('')}
//         style={styles.image}
//       />
//       {children}
//     </View>
//   )
// }

export const Card = ({ data, setModalVisible }: Props) => {
  const { item } = data;

  return (
    <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
      <TouchableOpacity
        style={[styles.profileImgContainer, { borderColor: 'white', borderWidth: 1 }]}
      >
        <Image
          source={{ uri: item.image }} 
          style={styles.image} 
        />
        <View style={styles.portal}>
          <Image
            source={require('./portal.png')} 
            style={styles.overImage} 
            resizeMode={'cover'}
          />
        </View>
      </TouchableOpacity>
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
    backgroundColor: "#2F9331", // #2F9331 / #8BCF21
  },
  image: {
    width: 50,
    height: 50,
    margin: 8,
    borderRadius: 24,
  },
  overImage: {
    width: 60,
    height: 60,
    borderRadius: 24,
  },
  cardText: {
    justifyContent: "space-between",
    marginLeft: 16
  },
  profileImgContainer: {
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  portal: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
});

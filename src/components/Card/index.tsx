import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
	data: any;
	setModalVisible: any;
}

const Portal = ({image}) => {
	return (
		<TouchableOpacity
			style={[imageStyles.container]}
		>
			<Image
				source={{ uri: image }} 
				style={styles.image} 
			/>
			<View style={imageStyles.portal}>
				<Image
					source={require('./portal.png')} 
					style={imageStyles.overImage} 
					resizeMode={'cover'}
				/>
			</View>
		</TouchableOpacity>
	)
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
			<Portal 
				image={item.image}
			/>
			<View style={styles.cardText}>
				<Text style={styles.text}>{item.name}</Text>
				<Text style={styles.text}>{item.species}</Text>
				<Text style={styles.text}>{item.status}</Text>
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
	cardText: {
		justifyContent: "space-between",
		marginLeft: 16
	},
	text: {
		color: '#071B09',
		fontWeight: 'bold'
	},
});

const imageStyles = StyleSheet.create({
	container: {
		borderRadius: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	portal: {
		position: 'absolute',
		justifyContent: 'center',
	},
	overImage: {
		width: 84,
		height: 84,
		borderRadius: 24,
	},
})
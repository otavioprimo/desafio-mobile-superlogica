import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeModule } from "./src/modules/Home/routes";

const Tab = createBottomTabNavigator();

// function Tabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarActiveTintColor: "#000",
//       }}
//       backBehavior="history"
//     >
//       <Tab.Screen
//         name="HomeTab"
//         component={HomeScreen}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Favorites"
//         component={Favorite}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="star" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

export default function App() {
  return (
      <NavigationContainer>
        <HomeModule />
      </NavigationContainer>
  );
}

import React, { useState } from "react";

import { Provider } from "react-redux";
import { Store } from "./src/redux/store";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/views/Home";
import Favorite from "./src/views/Favorites";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000",
      }}
      backBehavior="history"
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorite}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="star" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </Provider>
  );
}

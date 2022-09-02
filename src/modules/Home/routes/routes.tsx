import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorite from "../../Favorites/screens";

const Tab = createBottomTabNavigator();

export const Routes = () => {
  return (
    // <MainStack.Navigator screenOptions={{ headerShown: false }}>
    //   <MainStack.Screen name="Home" component={HomeScreen} />
    // </MainStack.Navigator>
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
};


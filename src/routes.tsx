import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./views/Home";
import FavoriteScreen from "./views/Favorites";

const MainStack = createNativeStackNavigator();
const SecondStack = createNativeStackNavigator();

export const MainRoute = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
  );
};

export const FavoriteRoute = () => {
  return (
    <SecondStack.Navigator screenOptions={{ headerShown: false }}>
      <SecondStack.Screen name="Favorites" component={FavoriteScreen} />
    </SecondStack.Navigator>
  );
};

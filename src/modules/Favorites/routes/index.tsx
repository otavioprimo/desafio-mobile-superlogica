import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorite from "../screens";

const SecondStack = createNativeStackNavigator();

export const FavoriteRoute = () => {
    return (
      <SecondStack.Navigator screenOptions={{ headerShown: false }}>
        <SecondStack.Screen name="Favorites" component={Favorite} />
      </SecondStack.Navigator>
    );
  };
  
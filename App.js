import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Gasolina from "./src/screens/Gasolina";
import Consumo from "./src/screens/Consumo";
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gasolina" component={Gasolina} />
        <Stack.Screen name="Consumo" component={Consumo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

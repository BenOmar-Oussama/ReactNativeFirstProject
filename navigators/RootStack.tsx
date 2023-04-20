import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
// import TestingScreen from "../screens/TestingScreen";
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Welcome} />
        {/* <Stack.Screen name="Profile" component={TestingScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

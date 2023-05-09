import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Home from "../screens/HomeScreen";
import { colors } from "../Components/colors";
import { StyleSheet } from "react-native";
import { Icon } from "@ui-kitten/components";
import { MenuIcon } from "../Components/IconsFiles/Menu";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigation from "./DrawerNavigation";
import ChallengeDetails from "../screens/ChallengeDetails";
import CameraView from "../screens/cameraview";

const Stack = createNativeStackNavigator();


const RootStack = () => {
  return (
    <NavigationContainer> 
      <Stack.Navigator
        screenOptions={{
          // headerBackground: () => colors.secondary,
          headerTitleAlign: 'center',
          headerStyle:{
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            
            fontFamily: "BebasNeue-Regular",
            fontSize: 30,
          },
          headerTitle:"Hunt",
          headerLeft: () => {
            
            return <MenuIcon />;
          },
        }}
      >
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{ headerShown: false }}
          
        />
        <Stack.Screen name="ChallengeDetails" component={ChallengeDetails} options={{ headerShown: false }}/>
        <Stack.Screen name="CameraView" component={CameraView} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default RootStack;

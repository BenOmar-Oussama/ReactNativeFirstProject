import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "../screens/Welcome";
import Home from "../screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { colors } from "../Components/colors";
import { MenuIcon } from "../Components/IconsFiles/Menu";
import CustomDrawer from "../Components/drawercontent";
import { Button, Icon } from '@ui-kitten/components';
import Details from "../screens/ChallengeDetails";
import HomeSecond from "../screens/HomeSecond";
import CameraView from "../screens/cameraview";
import ProfilePage from "../screens/profile";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "transparent",
          },
          headerShown: true,
          drawerActiveBackgroundColor: colors.primary,
          drawerActiveTintColor: colors.green,
          drawerInactiveTintColor: colors.primary,
          drawerLabelStyle: {
            marginLeft: 25,
            fontFamily: "BebasNeue-Regular",
            fontSize: 15,
          },
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            fontFamily: "BebasNeue-Regular",
            fontSize: 30,
          },
          headerTitle: "Hunt",
          
          headerTitleAlign: "center",
        }}
      >
        <Drawer.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
        <Drawer.Screen name="Home" component={HomeSecond} options={{headerTitle:"DISCOVER"}}/>
        <Drawer.Screen name="Discover" component={HomeSecond} />        
        <Drawer.Screen name="Profile" component={ProfilePage} options={{headerShown:false}} />
        <Drawer.Screen name="Statistics" component={Home} />
        <Drawer.Screen name="Achievements" component={Welcome} />
        <Drawer.Screen name="Badges" component={Home} />
      </Drawer.Navigator>
    
  );
}

export default MyDrawer;

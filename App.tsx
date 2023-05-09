import 'react-native-gesture-handler';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import RootStack from './navigators/RootStack';
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import MyDrawer from './navigators/DrawerNavigation';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

export default function App() {
  let [fontsloaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Italic": require("./assets/fonts/Lato-Italic.ttf"),
    "Lato-BoldItalic": require("./assets/fonts/Lato-BoldItalic.ttf"),
    "BebasNeue-Regular": require("./assets/fonts/BebasNeue-Regular.ttf"),
  });

  if(!fontsloaded){
    return <AppLoading />;
  }
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <RootStack />
      </ApplicationProvider>
    </>
  );;
}


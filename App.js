import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ThemeContextProvider } from "./src/core/themeProvider";
import MainScreen from "./src/screens/Main";
import SettingsScreen from "./src/screens/Settings";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </ThemeContextProvider>
    );
  }
}
// export default from "./storybook";

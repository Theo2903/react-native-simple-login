import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { s } from "./App.style";

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import Dashboard from "./src/screens/Dashboard";
import Login from "./src/screens/Login/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <NavigationContainer>
            {hideSplashScreen ? (
              <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Login"
              >
                <Stack.Screen
                  name="Dashboard"
                  component={Dashboard}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            ) : null}
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};
export default App;

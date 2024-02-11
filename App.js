import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AndroidLarge from "./screens/AndroidLarge";
import Navigation from "./router/Navigation";

const Stack = createStackNavigator();

const App = () => {

   const [fontsLoaded, error] = useFonts({
     "Inter-Regular": require("./assets/fonts/InterVariable.ttf"),
   });

  return (
    <>
    <Navigation/>
    </>
  );
};

export default App;

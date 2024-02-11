import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AndroidLarge from "../screens/AndroidLarge";
import ScreenB from "../screens/Engage";
import ScreenC from "../screens/ScreenC";
import Wikipedia from "../screens/Wikipedia";
import Conversion from "../screens/Conversion";
import Dictionary from "../screens/Dictionary";
import Engage from "../screens/Engage";
import EngageMeditation from "../screens/EngageMeditation";
import Meditation from "../screens/Meditation";
import MeditationVoice from "../screens/MeditationVoice";
import MeditationMusic from "../screens/MeditationMusic";
import Games from "../screens/Games";
import Quiz from "../screens/Quiz";
import StartQuiz from "../screens/StartQuiz";


const Stack = createStackNavigator();

const Navigation = () => {

  return (
    <>
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AndroidLarge" component={AndroidLarge} options={{ headerShown: false }} />
            <Stack.Screen name="Engage" component={Engage} options={{ headerShown: false }} />
            <Stack.Screen name="ScreenC" component={ScreenC} options={{ headerShown: false }} />
            <Stack.Screen name="Conversion" component={Conversion} options={{ headerShown: false }} />
            <Stack.Screen name="Wikipedia" component={Wikipedia} options={{ headerShown: false }} />
            <Stack.Screen name="Dictionary" component={Dictionary} options={{ headerShown: false }} />
            <Stack.Screen name="EngageMeditation" component={EngageMeditation} options={{ headerShown: false }} />
            <Stack.Screen name="Meditation" component={Meditation} options={{ headerShown: false }} />
            <Stack.Screen name="MeditationVoice" component={MeditationVoice} options={{ headerShown: false }} />
            <Stack.Screen name="MeditationMusic" component={MeditationMusic} options={{ headerShown: false }} />
            <Stack.Screen name="Games" component={Games} options={{ headerShown: false }} />
            <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
            <Stack.Screen name="StartQuiz" component={StartQuiz} options={{ headerShown: false }} />
          </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;

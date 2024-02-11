import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Border, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import EngageMeditation from "./EngageMeditation";
import Games from "./Games";
import Quiz from "./Quiz";
import AndroidLarge from "./AndroidLarge";


const Engage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.androidLarge3}>
      <Image
        style={styles.androidLarge3Child}
        contentFit="cover"
        source={require("../assets/Rectangle 12.png")}
      />
      <TouchableOpacity onPress={()=>{navigation.navigate(Games)}}>
      <Image
        style={[styles.androidLarge3Item, styles.androidLayout]}
        contentFit="cover"
        source={require("../assets/Games.png")}
      />
      </TouchableOpacity>
     
      <TouchableOpacity onPress={()=>{navigation.navigate(Quiz)}}>
      <Image
        style={[styles.androidLarge3Inner, styles.androidLayout]}
        contentFit="cover"
        source={require("../assets/Quiz.png")}
      />
      </TouchableOpacity>
     
      <View style={[styles.rectangleView, styles.xboxMenuIconPosition]} />
      <Image
        style={[styles.xboxMenuIcon, styles.xboxMenuIconPosition]}
        contentFit="cover"
        source={require("../assets/xbox-menu.png")}
      />
      <View style={styles.androidLarge3Child1} />
      <Text style={styles.engageWithMe}>Engage with me!</Text>
     
      
      <TouchableOpacity onPress={()=>{navigation.navigate(AndroidLarge)}}><Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow.png")}
      /></TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate(EngageMeditation)}}>
      <Image
        style={[styles.rectangleIcon, styles.androidLayout]}
        contentFit="cover"
        source={require("../assets/Meditation.png")}
      />
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  androidLayout: {
    width: 145,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  xboxMenuIconPosition: {
    height: 53,
    top: 0,
    position: "absolute",

  },
  androidLarge3Child: {
    top: 148,
    width: 400,
    height: 454,
    position: "absolute",
  },
  androidLarge3Item: {
    top: 300,
    height: 140,
    left: 125
  },
  androidLarge3Inner: {
    top: 430,
    height: 140,
    left:10
  },
  rectangleView: {
    left: 0,
    borderRadius: 5,
    backgroundColor: "#403838",
    width: 400,
  },
  xboxMenuIcon: {
    left: 5,
    width: 50,
  },
  androidLarge3Child1: {
    top: 95,
    left: 80,
    backgroundColor: "#5269a5",
    width: 230,
    height: 40,
    borderRadius: Border.br_8xs,
    position: "absolute",
    
  },
  engageWithMe: {
    top: 95,
    left: 100,
    fontSize: 24,
    fontFamily: FontFamily.interRegular,
    color: "#000",
    textAlign: "left",
    position: "absolute",
  },
  
  backArrowIcon: {
    top: 725,
    left: 168,
    width: 57,
    height: 51,
    position: "absolute",
  },
  rectangleIcon: {
    left: 238,
    top: 175,
    height: 140,
  },
  androidLarge3: {
    backgroundColor: "#03174c",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Engage;

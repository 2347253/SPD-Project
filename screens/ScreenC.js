import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text,TouchableOpacity } from "react-native";
import { Border, FontFamily, } from "../GlobalStyles";
import AndroidLarge from "./AndroidLarge";
import { useNavigation } from "@react-navigation/native";
import Wikipedia from "./Wikipedia";
import Conversion from "./Conversion";
import Dictionary from "./Dictionary";



const ScreenC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge2}>
      
      <Image
        style={styles.androidLarge2Child}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Image
        style={styles.androidLarge2Inner}
        contentFit="cover"
        source={require("../assets/Rectangle 6.png")}
      />
      
      <View style={[styles.rectangleView, styles.xboxMenuIconPosition]} />
      
      <Image
        style={[styles.xboxMenuIcon, styles.xboxMenuIconPosition]}
        contentFit="cover"
        source={require("../assets/xbox-menu.png")}
      />
      <View style={styles.androidLarge2Child1} />
      <Text style={styles.letMeHelp}>Let me help you!</Text>

      <TouchableOpacity onPress={()=>{navigation.navigate(Dictionary)}}><Image
        style={[styles.androidLarge2Child5, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/dict.png")}
      />
      </TouchableOpacity>
      <Image
        style={[styles.androidLarge2Child2, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/Rectangle 5.png")}
      />
      
      <TouchableOpacity onPress={()=>{navigation.navigate(Wikipedia)}}><Image
        style={[styles.androidLarge2Child3, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/Rectangle 2.png")}
      />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate(Conversion) }}><Image
        style={[styles.androidLarge2Child4, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/Rectangle 4.png")}
      />
      </TouchableOpacity>
      

      <TouchableOpacity onPress={()=>{navigation.navigate(AndroidLarge)}}><Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow.png")}
      />
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  rectangleImage1Btn: {
    borderRadius: 17,
    height: 109,
    width: 132,
  },
  xboxMenuIconPosition: {
    height: 53,
    top: 0,
    position: "absolute",
  },
  androidChildLayout: {
    height: 108,
    width: 129,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  androidLarge2Child: {
    top: 162,
    width: 400,
    height: 454,
    left: 0,
    position: "absolute",
  },
  androidLarge2Item: {
    left: 30,
    top: 227,
    position: "absolute",
  },
  androidLarge2Inner: {
    top: 650,
    left: 80,
    borderRadius: 100,
    width: 239,
    height: 55,
    position: "absolute",
  },
  rectangleIcon: {
    top: 661,
    left: 47,
    borderRadius: 10,
    width: 266,
    height: 65,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: "#403838",
    width: 400,
    borderRadius: Border.br_8xs,
    left: 0,
  },
  xboxMenuIcon: {
    left: 5,
    width: 50,
  },
  androidLarge2Child1: {
    top: 105,
    left: 80,
    backgroundColor: "#c4a4de",
    width: 230,
    height: 40,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  androidLarge2Child5: {
    top: 160,
    left: 135,
    backgroundColor: "#c4a4de",
    width: 233,
    height: 40,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  letMeHelp: {
    top: 105,
    left: 100,
    fontSize: 24,
    fontFamily: FontFamily.interRegular,
    color: "#000",
    textAlign: "left",
    position: "absolute",
  },
  androidLarge2Child2: {
    left: 135,
    height: 108,
    width: 129,
    borderRadius: Border.br_base,
    top: 523,
  },
  androidLarge2Child3: {
    top: 279,
    left: 135,
  },
  androidLarge2Child4: {
    top: 400,
    left: 135,
    height: 108,
    width: 129,
    borderRadius: Border.br_base,
  },
  backArrowIcon: {
    top: 725,
    left: 168,
    width: 57,
    height: 51,
    position: "absolute",
  },
  androidLarge2: {
    backgroundColor: "#6f5773",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ScreenC;

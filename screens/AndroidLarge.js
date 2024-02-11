import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { Swipeable } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ScreenB from "./Engage";
import ScreenC from "./ScreenC";


const AndroidLarge = () => {

  const navigation = useNavigation();




  // const swipeLeftAction = () => {
  //   // Handle left swipe action
  //   navigation.navigate('ScreenB');
  // };

  // const swipeRightAction = () => {
  //   // Handle right swipe action
  //   navigation.navigate('ScreenC');
  // };
  return (


    // <Swipeable
    //   renderLeftActions={() => (
    //     <SwipeAction text="Swipe Left" onPress={() => navigation.navigate(navigation.navigate(ScreenB))} />
    //   )}
    //   renderRightActions={() => (
    //     <SwipeAction text="Swipe Right" onPress={() => navigation.navigate(navigation.navigate(ScreenC))} />
    //   )}
    // >
    <View style={styles.androidLarge1}>
      <View style={styles.androidLarge1Child} />
      <Image
        style={[styles.logoIcon, styles.logoIconPosition]}
        contentFit="cover"
        source={require("../assets/logo-no.png")}
      />
      {/* <Text style={[styles.steadyStrides, styles.swipeTypo]}>
        Steady Strides
      </Text> */}
      <Image
        style={[styles.xboxMenuIcon, styles.xboxMenuIconPosition]}
        contentFit="cover"
        source={require("../assets/xbox-menu.png")}
      />
      <Image
        style={[styles.androidLarge1Item, styles.swipePosition]}
        contentFit="cover"
        source={require("../assets/Ellipse-1.png")}
      />
      <Text style={[styles.chatGpt, styles.swipeTypo]}>ChatGPT</Text>
      
      <View style={styles.forwardParent}>
        <TouchableOpacity onPress={() => { navigation.navigate(ScreenB) }}><Image
          style={[styles.forwardIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/Forward.png")}
        />
        </TouchableOpacity>
        <Text style={[styles.swipe, styles.swipePosition]}>
          <Text style={styles.swipe1}>Swipe</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <TouchableOpacity onPress={() => { navigation.navigate(ScreenC) }}>
          <Image
            style={[styles.backIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/Back.png")}
          />
        </TouchableOpacity>

      </View>
      <View style={[styles.androidLarge1Inner, styles.xboxMenuIconPosition]} />
      <Image
        style={[styles.xboxMenuIcon, styles.xboxMenuIconPosition]}
        contentFit="cover"
        source={require("../assets/xbox-menu.png")}
      />
    </View>
    // </Swipeable>

  );
};

const styles = StyleSheet.create({
  swipeTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  swipePosition: {
    left: 150,
    position: "absolute",
  },
  iconLayout: {
    width: 90,
    top: 0,
    height: 90,
    position: "absolute",
  },
  xboxMenuIconPosition: {
    height: 53,
    top: 0,
    position: "absolute",
  },

  logoIcon:{
    width: 200,
    left: 100,
  },

  logoIconPosition: {
    height: 130,
    top: 180,
    position: "absolute",
  },

  // androidLarge1Child: {
  //   top: 244,
  //   left: 47,
  //   borderRadius: 6,
  //   backgroundColor: "rgba(169, 67, 171, 0.8)",
  //   width: 300,
  //   height: 60,
  //   position: "absolute",
  // },
  steadyStrides: {
    top: 258,
    left: 110,
    fontSize: 24,
    position: "absolute",
  },
  androidLarge1Item: {
    top: 620,
    width: 101,
    height: 93,
  },
  chatGpt: {
    top: 656,
    left: 173,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  forwardIcon: {
    left: 290,
  },
  swipe1: {
    
    fontSize: 30,
  },
  text: {
    fontSize: FontSize.size_sm,
  },
  swipe: {
    top: 25,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  backIcon: {
    left: 0,
  },
  forwardParent: {
    top: 425,
    width: 344,
    height: 90,
    left: 5,
    position: "absolute",
  },
  androidLarge1Inner: {
    borderRadius: 0,
    backgroundColor: "#403838",
    width: 4000,
    left: 0,
  },
  xboxMenuIcon: {
    width: 50,
    left: 5,
    height: 53,
  },
  androidLarge1: {
    backgroundColor: "#501f67",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge;

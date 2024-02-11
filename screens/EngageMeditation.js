import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Border, Color, FontFamily } from "../GlobalStyles";
import Meditation from "./Meditation";
import { useNavigation } from "@react-navigation/native";
import Engage from "./Engage";



const EngageMeditation = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.androidLarge15}>
      <Image
        style={styles.androidLarge15Child}
        contentFit="cover"
        source={require("../assets/Rectangle 12.png")}
      />
      <View style={[styles.androidLarge15Item, styles.xboxMenuIconPosition]} />
      <Image
        style={[styles.xboxMenuIcon, styles.xboxMenuIconPosition]}
        contentFit="cover"
        source={require("../assets/xbox-menu.png")}
      />
      {/* <Image
        style={styles.accountIcon}
        contentFit="cover"
        source={require("../assets/account.png")}
      /> */}
      <TouchableOpacity onPress={()=>{navigation.navigate(Engage)}}><Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow.png")}
      />
        </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate(Meditation)}}>
      <Image
        style={[styles.image7Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image 7.png")}
      />
      </TouchableOpacity>
     
      <Image
        style={[styles.image3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/ImprovePerformance.png")}
      />
      <Image
        style={[styles.image4Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image 4.png")}
      />
      <Image
        style={[styles.image6Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image 6.png")}
      />
      <Image
        style={[styles.image5Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image 5.png")}
      />
      <Text style={[styles.chooseATopic, styles.chooseATopicPosition]}>
        Choose a topic to focus on!
      </Text>
      <Text style={[styles.whatBringsYou, styles.chooseATopicPosition]}>
        What Brings You Here?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  xboxMenuIconPosition: {
    height: 53,
    top: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 165,
    width: 139,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconLayout: {
    height: 131,
    width: 139,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  chooseATopicPosition: {
    textAlign: "left",
    color: Color.colorWhite,
    left: 30,
    position: "absolute",
  },
  androidLarge15Child: {
    top: 148,
    left: -2,
    width: 400,
    height: 454,
    position: "absolute",
  },
  androidLarge15Item: {
    left: 0,
    borderRadius: 5,
    backgroundColor: "#403838",
    width: 400,
  },
  xboxMenuIcon: {
    left: 5,
    width: 50,
  },
  accountIcon: {
    top: 7,
    left: 306,
    width: 42,
    height: 38,
    position: "absolute",
  },
  backArrowIcon: {
    top: 725,
    left: 168,
    width: 57,
    height: 51,
    position: "absolute",
  },
  image7Icon: {
    left: 50,
    top: 183,
  },
  image3Icon: {
    left: 205,
    top: 183,
  },
  image4Icon: {
    top: 367,
    left: 50,
  },
  image6Icon: {
    top: 335,
    left: 205,
  },
  image5Icon: {
    top: 520,
    left: 130,
  },
  chooseATopic: {
    top: 120,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  whatBringsYou: {
    top: 90,
    fontSize: 22,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  androidLarge15: {
    backgroundColor: "#03174c",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default EngageMeditation;

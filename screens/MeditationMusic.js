import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text,TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import Meditation from "./Meditation";
import { useNavigation } from "@react-navigation/native";


const MeditationMusic = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge16}>
      <Image
        style={[styles.image12Icon, styles.image12IconLayout]}
        contentFit="cover"
        source={require("../assets/image 12.png")}
      />
      <View style={[styles.androidLarge16Child, styles.xboxMenuIconPosition]} />
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
      <Text style={[styles.nightIsland, styles.minSleepTypo]}>
        Night Island
      </Text>
      <TouchableOpacity onPress={()=>{navigation.navigate(Meditation)}}><Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow.png")}
      /></TouchableOpacity>
      <Image
        style={styles.androidLarge16Item}
        contentFit="cover"
        source={require("../assets/Rectangle 28.png")}
      />
      <Image
        style={styles.pauseButtonIcon}
        contentFit="cover"
        source={require("../assets/Pause Button.png")}
      />
      <Image
        style={styles.androidLarge16Inner}
        contentFit="cover"
        source={require("../assets/Ellipse 2.png")}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/Line 1.png")}
      />
      <Image
        style={[styles.androidLarge16Child1, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/Line 2.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/Ellipse 3.png")}
      />
      <Text style={[styles.minSleep, styles.minSleepClr]}>{`45 MIN - SLEEP MUSIC

`}</Text>
      <Text
        style={[styles.favorites34234Listening, styles.easeTheMindTypo]}
      >{`24.234 Favorites                 34.234 Listening

`}</Text>
      <Text style={[styles.easeTheMindContainer, styles.minSleepClr]}>
        <Text
          style={[styles.easeTheMind, styles.easeTheMindTypo]}
        >{`Ease the mind into a restful night's sleep with these deep, amblent tones.
`}</Text>
        <Text style={styles.minSleepTypo}> </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image12IconLayout: {
    width: 400,
    left: 0,
  },
  xboxMenuIconPosition: {
    height: 53,
    top: 0,
    position: "absolute",
  },
  minSleepTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
  },
  lineIconPosition: {
    height: 2,
    left: 50,
    position: "absolute",
  },
  minSleepClr: {
    color:'#fff',
    position: "absolute",
  },
  easeTheMindTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  image12Icon: {
    top: 41,
    borderRadius: 10,
    height: 142,
    position: "absolute",
  },
  androidLarge16Child: {
    backgroundColor: "#403838",
    width: 400,
    left: 0,
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
  nightIsland: {
    top: 146,
    left: 160,
    color: "#fff",
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
  androidLarge16Item: {
    top: 249,
    left: 46,
    borderRadius: 300,
    width: 300,
    height: 300,
    position: "absolute",
  },
  pauseButtonIcon: {
    top: 315,
    left: 115,
    width: 165,
    height: 173,
    position: "absolute",
  },
  androidLarge16Inner: {
    borderRadius: 500,
    top: 329,
    left: 124,
    width: 146,
    height: 146,
    position: "absolute",
  },
  lineIcon: {
    top: 577,
    width: 290,
  },
  androidLarge16Child1: {
    top: 577,
    width: 172,
  },
  ellipseIcon: {
    top: 571,
    left: 209 ,
    width: 14,
    height: 13,
    position: "absolute",
  },
  minSleep: {
    top: 586,
    left: 50,
    width: 244,
    height: 23,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
   
  },
  favorites34234Listening: {
    top: 206,
    left: 35,
    fontSize: 16,
    width: 338,
    color: '#fff',
    position: "absolute",
    textAlign: "left",
  },
  easeTheMind: {
    fontSize: 20,
  },
  easeTheMindContainer: {
    top: 637,
    left: 50,
    textAlign: "center",
    width: 298,
    height: 73,
  },
  androidLarge16: {
    backgroundColor: "#03174c",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default MeditationMusic;

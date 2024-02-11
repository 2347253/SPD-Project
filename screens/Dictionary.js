import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity,TextInput } from "react-native";
import { Color, FontFamily, FontSize,Colornew } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import ScreenC from "./ScreenC";


const Dictionary = () => {
const navigation = useNavigation();

  return (
    <View style={styles.androidLarge5}>
      <Image
        style={styles.androidLarge5Child}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <View style={[styles.androidLarge5Item, styles.xboxMenuIconPosition]} />
      <Image
        style={[styles.xboxMenuIcon, styles.xboxMenuIconPosition]}
        contentFit="cover"
        source={require("../assets/xbox-menu.png")}
      />
      <Text style={[styles.dictionary, styles.dictionaryTypo]}>Dictionary</Text>
      <TouchableOpacity onPress={() => { navigation.navigate(ScreenC); }}><Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow.png")}
      />
      </TouchableOpacity>
      <View style={styles.androidLarge5Inner} />

      <TextInput
        style={[styles.textinput, styles.textTypo]}
        placeholder="none"
        placeholderTextColor="#fff"
      />

      <TextInput 
        style={[styles.searchWord, styles.dictionaryTypo]}
        placeholder="Search Word"
        placeholderTextColor="#fff"
      />
      
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/Search.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/Rectangle 17.png")}
      />
      <Text
        style={[styles.meaningSynonymExample, styles.dictionaryTypo]}
      >{`Meaning
Synonym
Example Sentence
pronunciation`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  xboxMenuIconPosition: {
    height: 53,
    top: 0,
    position: "absolute",
  },
  dictionaryTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  androidLarge5Child: {
    top: 148,
    left: -2,
    width: 400,
    height: 454,
    position: "absolute",
  },
  androidLarge5Item: {
    left: 0,
    borderRadius: 5,
    backgroundColor: "#403838",
    width: 400,
  },
  xboxMenuIcon: {
    left: 5,
    width: 50,
  },
  dictionary: {
    top: 68,
    left: 140,
    fontSize: 25,
    fontFamily: FontFamily.interRegular,
    color: Colornew.colorWhite,
    position: "absolute",
  },
  backArrowIcon: {
    top: 725,
    left: 168,
    width: 57,
    height: 51,
    position: "absolute",
  },
  androidLarge5Inner: {
    top: 183,
    left: 95,
    borderRadius: 6,
    backgroundColor: "rgba(169, 67, 171, 0.8)",
    width: 199,
    height: 55,
    position: "absolute",
  },
  searchWord: {
    top: 197,
    left: 139,
    width:150,
    fontSize:20
  },
  searchIcon: {
    top: 196,
    left:100,
    width: 27,
    height: 31,
    position: "absolute",
  },
  rectangleIcon: {
    top: 274,
    left: 24,
    borderRadius: 9,
    width: 345,
    height: 270,
    position: "absolute",
  },
  meaningSynonymExample: {
    fontSize:26,
    marginLeft: -105,
    top: 323,
    left: "50%",
  },
  androidLarge5: {
    backgroundColor: "#6f5773",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Dictionary;

import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TextInput,TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Input } from "@rneui/themed";
import { Colornew, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import ScreenC from "./ScreenC";



const Conversion = () => {
const navigation = useNavigation();

  const [rectangleDropdownOpen, setRectangleDropdownOpen] = useState(false);
  const [rectangleDropdownValue, setRectangleDropdownValue] = useState();
  const [rectangleDropdownItems, setRectangleDropdownItems] = useState([
    { value: "Currency", label: "Currency" },
    { value: "Measurement", label: "Measurement" },
  ]);
  const [rectangleDropdown1Open, setRectangleDropdown1Open] = useState(false);
  const [rectangleDropdown1Value, setRectangleDropdown1Value] = useState();
  const [rectangleDropdown1Items, setRectangleDropdown1Items] = useState([
    { value: "INR", label: "INR" },
    { value: "USD", label: "USD" },
    { value: "OMR", label: "OMR" },
  ]);
  const [rectangleDropdown2Open, setRectangleDropdown2Open] = useState(false);
  const [rectangleDropdown2Value, setRectangleDropdown2Value] = useState();
  const [rectangleDropdown2Items, setRectangleDropdown2Items] = useState([
    { value: "INR", label: "INR" },
    { value: "USD", label: "USD" },
    { value: "OMR", label: "OMR" },
  ]);

  return (
    <View style={styles.androidLarge8}>
      <Image
        style={styles.androidLarge8Child}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <View style={[styles.androidLarge8Item, styles.xboxMenuIconPosition]} />
      <Image
        style={[styles.xboxMenuIcon, styles.xboxMenuIconPosition]}
        contentFit="cover"
        source={require("../assets/xbox-menu.png")}
      />
      <Text style={[styles.conversion, styles.textFlexBox]}>Conversion</Text>
      <TouchableOpacity onPress={() => { navigation.navigate(ScreenC); }}>
                <Image
                    style={styles.backArrowIcon}
                    contentFit="cover"
                    source={require("../assets/back-arrow.png")}
                />
            </TouchableOpacity>
      <View style={styles.wrapper}>
        <DropDownPicker
          style={styles.dropdownpicker}
          open={rectangleDropdownOpen}
          setOpen={setRectangleDropdownOpen}
          value={rectangleDropdownValue}
          setValue={setRectangleDropdownValue}
          placeholder="Conversion type"
          items={rectangleDropdownItems}
          dropDownContainerStyle={styles.rectangleDropdowndropDownContainer}
        />
      </View>
      
      <Image
        style={[styles.androidLarge8Inner, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/Rectangle 21.png")}
      />
      
      <TextInput
        style={[styles.textinput1, styles.textTypo]}
        placeholder="100"
        placeholderTextColor="#fff"/>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/Rectangle 21.png")}
      />
      <Image
        style={styles.downArrowIcon}
        contentFit="cover"
        source={require("../assets/Down Arrow.png")}
      />
      <Image
        style={[styles.horizontalLineIcon, styles.horizontalIconLayout]}
        contentFit="cover"
        source={require("../assets/Horizontal Line.png")}
      />
      <Image
        style={[styles.horizontalLineIcon1, styles.horizontalIconLayout]}
        contentFit="cover"
        source={require("../assets/Horizontal Line.png")}
      />
      <View style={[styles.container, styles.frameLayout]}>
        <DropDownPicker
          style={styles.dropdownpicker1}
          open={rectangleDropdown1Open}
          setOpen={setRectangleDropdown1Open}
          value={rectangleDropdown1Value}
          setValue={setRectangleDropdown1Value}
          placeholder="Enter"
          items={rectangleDropdown1Items}
          dropDownContainerStyle={styles.rectangleDropdown1dropDownContainer}
        />
      </View>

      <View style={[styles.frame, styles.frameLayout]}>
        <DropDownPicker
          style={styles.dropdownpicker1}
          open={rectangleDropdown2Open}
          setOpen={setRectangleDropdown2Open}
          value={rectangleDropdown2Value}
          setValue={setRectangleDropdown2Value}
          placeholder="Enter"
          items={rectangleDropdown2Items}
          dropDownContainerStyle={styles.rectangleDropdown2dropDownContainer}
        />
      </View>
      <TextInput
        style={[styles.textinput, styles.textTypo]}
        placeholder="1.21"
        placeholderTextColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleDropdowndropDownContainer: {
    backgroundColor: "rgba(169, 67, 171, 0.8)",
  },
  textInputInput: {
    left: 54,
    top: 346,
    position: "absolute",
    
  },
  
  rectangleDropdown1dropDownContainer: {
    backgroundColor: "rgba(217, 217, 217, 0)",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.87)",
    borderWidth: 0.8,
  },
  rectangleDropdown2dropDownContainer: {
    backgroundColor: "rgba(217, 217, 217, 0)",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.87)",
    borderWidth: 0.8,
  },
  xboxMenuIconPosition: {
    height: 53,
    top: 0,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Colornew.colorWhite,
  },
  rectangleIconLayout: {
    height: 155,
    width: 338,
    borderRadius: Border.br_8xs,
    left: 30,
    position: "absolute",
  },
  forwardIconPosition: {
    left: 269,
    height: 23,
    width: 26,
    position: "absolute",
  },
  inrTypo: {
    left: 227,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Colornew.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_17xl,
    left: 54,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  horizontalIconLayout: {
    height: 70,
    width: 121,
    left: 39,
    position: "absolute",
  },
  frameLayout: {
    height: 45,
    width: 83,
    left: 220,
    borderStyle: "solid",
    position: "absolute",
  },
  androidLarge8Child: {
    top: 148,
    left: -2,
    width: 400,
    height: 454,
    position: "absolute",
  },
  androidLarge8Item: {
    left: 0,
    borderRadius: 5,
    backgroundColor: "#403838",
    width: 400,
  },
  xboxMenuIcon: {
    left: 5,
    width: 50,
  },
  conversion: {
    top: 68,
    left: 128,
    fontSize: 24,
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
  dropdownpicker: {
    backgroundColor: "rgba(169, 67, 171, 0.8)",
  },
  wrapper: {
    top: 158,
    left: 30,
    borderRadius: 6,
    width: 338,
    height: 48,
    position: "absolute",
  },
  currencymeasurement: {
    top: 170,
    fontSize: FontSize.size_xl,
    left: 39,
    textAlign: "left",
    color: Colornew.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  forwardIcon: {
    top: 171,
    left: 303,
    height: 23,
    width: 26,
    position: "absolute",
  },
  androidLarge8Inner: {
    top: 269,
  },
  forwardIcon1: {
    top: 335,
  },
  inr: {
    top: 334,
  },
  text: {
    top: 346,
    textAlign: "left",
    color: Colornew.colorWhite,
  },
  rectangleIcon: {
    top: 440,
  },
  downArrowIcon: {
    top: 411,
    left: 276,
    width: 55,
    height: 58,
    position: "absolute",
  },
  horizontalLineIcon: {
    top: 346,
  },
  horizontalLineIcon1: {
    top: 518,
  },
  dropdownpicker1: {
    backgroundColor: Colornew.colorGainsboro,
    borderColor: Colornew.colorGray,
    borderWidth: .8,
    borderStyle: "solid",
    width:100
  },
  container: {
    top: 324,
  },
  forwardIcon2: {
    top: 506,
  },
  usd: {
    top: 505,
  },
  frame: {
    top: 495,
  },
  textinput: {
    top: 520,
  },
  textinput1: {
    top: 350,
  },
  androidLarge8: {
    backgroundColor: "#6f5773",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Conversion;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { Color,Colornew, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import ScreenC from "./ScreenC";


const Wikipedia = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.androidLarge7}>
            <Image
                style={styles.androidLarge7Child}
                contentFit="cover"
                source={require("../assets/rectangle-11.png")}
            />
            <View style={[styles.androidLarge7Item, styles.xboxMenuIconPosition]} />
            <Image
                style={[styles.xboxMenuIcon, styles.xboxMenuIconPosition]}
                contentFit="cover"
                source={require("../assets/xbox-menu.png")}
            />
            <Text style={[styles.wikipedia, styles.wikipediaTypo]}>Wikipedia</Text>

            


            <TextInput
                style={styles.androidLarge7Inner}
                label=""
                placeholder="Search Wiki"
                placeholderTextColor="#fff"
                mode="outlined"
                theme={{ colors: { background: "rgba(169, 67, 171, 0.8)" } }}
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
                style={[styles.loremIpsumDolor, styles.wikipediaTypo]}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</Text>
            <Image
                style={styles.image1Icon}
                contentFit="cover"
                source={require("../assets/image 1.png")}
            />
            <TouchableOpacity onPress={() => { navigation.navigate(ScreenC); }}>
                <Image
                    style={styles.backArrowIcon}
                    contentFit="cover"
                    source={require("../assets/back-arrow.png")}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    xboxMenuIconPosition: {
        height: 53,
        top: 0,
        position: "absolute",
    },
    wikipediaTypo: {
        textAlign: "left",
        color: Color.colorWhite,
        fontFamily: FontFamily.interRegular,
        position: "absolute",
    },
    androidLarge7Child: {
        top: 148,
        left: -2,
        width: 400,
        height: 454,
        position: "absolute",
    },
    androidLarge7Item: {
        left: 0,
        borderRadius: 5,
        backgroundColor: "#403838",
        width: 400,
    },
    xboxMenuIcon: {
        left: 5,
        width: 50,
    },
    wikipedia: {
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
    androidLarge7Inner: {
        top: 154,
        left: 29,
        borderRadius: 6,
        fontSize:22,
        width: 337,
        height: 48,
        position: "absolute",
        color:Colornew.colorWhite
    },
    searchWiki: {
        top: 170,
        left: 75,
        textAlign: "left",
        color: Color.colorWhite,
        fontFamily: FontFamily.interRegular,
    },
    searchIcon: {
        top: 161,
        left: 320,
        width: 27,
        height: 31,
        position: "absolute",
    },
    rectangleIcon: {
        top: 228,
        left: 26,
        borderRadius: 9,
        width: 337,
        height: 452,
        position: "absolute",
    },
    loremIpsumDolor: {
        top: 435,
        left: 35,
        fontSize: 20,
        width: 302,
        height: 339,
    },
    image1Icon: {
        top: 239,
        left: 115,
        width: 127,
        height: 177,
        position: "absolute",
    },
    androidLarge7: {
        backgroundColor: "#6f5773",
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
    },
});

export default Wikipedia;

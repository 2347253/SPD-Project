import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Games = () => {
  return (
    <View style={styles.androidLarge14Parent}>
      <View style={styles.androidLarge14}>
        <Image
          style={styles.androidLarge14Child}
          contentFit="cover"
          source={require("../assets/Rectangle 12.png")}
        />
        <View
          style={[styles.androidLarge14Item, styles.xboxMenuIconPosition]}
        />
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
        <Text style={styles.games}>Games</Text>
        <Image
          style={styles.backArrowIcon}
          contentFit="cover"
          source={require("../assets/back-arrow.png")}
        />
        <View style={[styles.androidLarge14Inner, styles.androidLayout]} >

        <Text style={styles.searchGamesHere}>Search Games Here</Text>
        </View>

        <View style={[styles.rectangleView, styles.androidLayout]} />
        <Text style={styles.search}>Search</Text>
        <View style={[styles.androidLarge14Child1, styles.androidLayout]} >
        <Text style={styles.categories}>Categories</Text>
        </View>
       
        <View
          style={[styles.androidLarge14Child2, styles.androidChildLayout3]}
        />
        <View
          style={[styles.androidLarge14Child2, styles.androidChildLayout3]}
        />
        <Image
          style={[styles.rectangleIcon, styles.androidChildLayout2]}
          contentFit="cover"
          source={require("../assets/Meditation.png")}
        />
        <Image
          style={[styles.androidLarge14Child4, styles.androidChildLayout2]}
          contentFit="cover"
          source={require("../assets/Meditation.png")}
        />
        <Image
          style={[styles.androidLarge14Child5, styles.androidChildLayout2]}
          contentFit="cover"
          source={require("../assets/Meditation.png")}
        />
        <View
          style={[styles.androidLarge14Child6, styles.androidChildLayout3]}
        />
        <View
          style={[styles.androidLarge14Child7, styles.androidChildLayout3]}
        />
        <View
          style={[styles.androidLarge14Child8, styles.androidChildLayout3]}
        />
        <Image
          style={[styles.androidLarge14Child9, styles.androidChildLayout1]}
          contentFit="cover"
          source={require("../assets/Meditation.png")}
        />
        <Image
          style={[styles.androidLarge14Child10, styles.androidChildLayout1]}
          contentFit="cover"
          source={require("../assets/Meditation.png")}
        />
        <Image
          style={[styles.androidLarge14Child11, styles.androidChildLayout1]}
          contentFit="cover"
          source={require("../assets/Meditation.png")}
        />
        <Image
          style={[styles.androidLarge14Child12, styles.androidChildLayout]}
          contentFit="cover"
          source={require("../assets/Meditation.png")}
        />
        <Image
          style={[styles.androidLarge14Child13, styles.androidChildLayout]}
          contentFit="cover"
          source={require("../assets/Meditation.png")}
        />
        <Image
          style={[styles.androidLarge14Child14, styles.androidChildLayout]}
          contentFit="cover"
          source={require("../assets/Meditation.png")}
        />
      </View>
      <Text style={[styles.puzzleGames, styles.gamesTypo]}>{`Puzzle Games:

`}</Text>
      <Text
        style={[styles.brainTrainingApps, styles.gamesTypo]}
      >{`Brain Training Apps:

`}</Text>
      <Text style={[styles.memoryGames, styles.gamesTypo]}>{`Memory Games:

`}</Text>
      <Text
        style={[styles.logicalDeductionGames, styles.gamesTypo]}
      >{`Logical Deduction Games:

`}</Text>
      <Text
        style={[styles.patternRecognitionGames, styles.gamesTypo]}
      >{`Pattern Recognition Games:

`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  xboxMenuIconPosition: {
    height: 53,
    top: 0,
    position: "absolute",
  },
  androidLayout: {
    height: 18,
    top: 71,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  androidChildLayout3: {
    height: 101,
    backgroundColor: Color.colorGainsboro,
    width: 360,
    left: 0,
    position: "absolute",
  },
  androidChildLayout2: {
    height: 66,
    width: 93,
    borderRadius: Border.br_base,
    top: 148,
    position: "absolute",
  },
  androidChildLayout1: {
    top: 294,
    height: 66,
    width: 93,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  androidChildLayout: {
    width: 92,
    height: 66,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  gamesTypo: {
    color: Color.colorGray,
    left: 14,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  androidLarge14Child: {
    left: -2,
    width: 362,
    height: 454,
    top: 148,
    position: "absolute",
  },
  androidLarge14Item: {
    backgroundColor: "#403838",
    borderRadius: Border.br_8xs,
    height: 53,
    width: 360,
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
  games: {
    top: 12,
    left: 134,
    fontSize: 24,
    fontFamily: FontFamily.interRegular,
    color: "#fff",
    width: 126,
    height: 29,
    textAlign: "left",
    position: "absolute",
  },
  backArrowIcon: {
    top: 730,
    left: 150,
    width: 57,
    height: 51,
    position: "absolute",
  },
  androidLarge14Inner: {
    left: 165,
    width: 121,
    backgroundColor: Color.colorWhite,
    height: 18,
    top: 71,
  },
  searchGamesHere: {
    top: 1,
    left: 1,
    fontSize: 10,
    fontWeight: "300",
    fontFamily: FontFamily.ubuntuLight,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  rectangleView: {
    left: 289,
    backgroundColor: "#5269a5",
    width: 46,
    height: 18,
    top: 71,
  },
  search: {
    top: 73,
    left: 294,
    fontSize: 11,
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  androidLarge14Child1: {
    left: 21,
    width: 99,
    backgroundColor: Color.colorGray,
    height: 18,
    top: 71,
  },
  categories: {
    left: 12,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  androidLarge14Child2: {
    top: 134,
  },
  rectangleIcon: {
    left: 8,
  },
  androidLarge14Child4: {
    left: 120,
  },
  androidLarge14Child5: {
    left: 223,
  },
  androidLarge14Child6: {
    top: 580,
  },
  androidLarge14Child7: {
    top: 432,
  },
  androidLarge14Child8: {
    top: 283,
  },
  androidLarge14Child9: {
    left: 8,
  },
  androidLarge14Child10: {
    left: 120,
  },
  androidLarge14Child11: {
    left: 223,
  },
  androidLarge14Child12: {
    top: 443,
    width: 92,
    left: 8,
  },
  androidLarge14Child13: {
    top: 443,
    width: 92,
    left: 120,
  },
  androidLarge14Child14: {
    top: 592,
    left: 8,
  },
  androidLarge14: {
    backgroundColor: "#03174c",
    overflow: "hidden",
    width: '100%',
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
  },
  puzzleGames: {
    top: 109,
  },
  brainTrainingApps: {
    top: 704,
    width: 140,
    height: 17,
  },
  memoryGames: {
    top: 259,
    width: 113,
    height: 20,
  },
  logicalDeductionGames: {
    top: 409,
    width: 180,
    height: 33,
  },
  patternRecognitionGames: {
    top: 554,
  },
  androidLarge14Parent: {
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default Games;

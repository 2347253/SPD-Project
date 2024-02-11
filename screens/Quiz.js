import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@rneui/themed";
import { Color,Colornew, FontFamily, FontSize, Border } from "../GlobalStyles";
import StartQuiz from "./StartQuiz";
import { useNavigation } from "@react-navigation/native";
import Navigation from "../router/Navigation";

const Quiz = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.androidLarge17}>
      <Image
        style={styles.androidLarge17Child}
        contentFit="cover"
        source={require("../assets/Rectangle 12.png")}
      />
      <View style={[styles.androidLarge17Item, styles.xboxMenuIconPosition]} />
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
      <Text style={[styles.quiz, styles.quizFlexBox]}>Quiz</Text>
      <Image
        style={[styles.backArrowIcon, styles.popularLayout]}
        contentFit="cover"
        source={require("../assets/back-arrow.png")}
      />
      <View style={styles.content}>
        <Text style={styles.letsTestYour}>Let's test your knowledge</Text>
        <View style={[styles.searchField, styles.searchLayout]}>
          <TextInput style={[styles.searchFieldChild, styles.childPosition]} />
          <View style={styles.parent}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/7.png")}
            />
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/43.png")}
            />
            <Text style={[styles.search, styles.searchTypo]}>Search</Text>
          </View>
        </View>
        <View style={[styles.contentChild, styles.childPosition]} />
        <View style={styles.content1}>
          <LinearGradient
            style={[styles.indicator, styles.indicatorLayout]}
            locations={[0, 1]}
            colors={["#3550dc", "#27e9f7"]}
          />
          <View style={styles.content2}>
            <View
              style={[styles.filterSelectedAndNoSelecte, styles.selectedLayout]}
            >
              <View style={styles.filterTitle}>
                <Text style={[styles.popular, styles.searchTypo]}>Popular</Text>
                <Text style={[styles.science, styles.searchTypo]}>Science</Text>
                <Text style={[styles.mathematic, styles.searchTypo]}>
                  Mathematic
                </Text>
                <View style={[styles.filterSelected, styles.computerPosition]}>
                  <Text style={[styles.computer, styles.computerPosition]}>
                    Computer
                  </Text>
                  <View
                    style={[styles.filterSelectedChild, styles.childBorder]}
                  />
                </View>
              </View>
              <View
                style={[styles.selectedAndNoSelected, styles.selectedLayout]}
              >
                <View style={[styles.rectangleParent, styles.rectangleLayout]}>
                  <View style={[styles.groupChild, styles.groupShadowBox]} />
                  <View style={[styles.rectangleGroup, styles.groupLayout1]}>
                    <View style={[styles.groupItem, styles.groupItemBg]} />
                    <View
                      style={[styles.uiUxDesignParent, styles.designLayout]}
                    >
                      <Text style={[styles.uiUxDesign, styles.quizTypo]}>
                        UI UX Design
                      </Text>
                      <View
                        style={[styles.groupParent, styles.groupParentPosition]}
                      >
                        <View style={styles.questionParent}>
                          <Text
                            style={[styles.question, styles.questionPosition]}
                          >
                            10 Question
                          </Text>
                          <Image
                            style={[styles.icon2, styles.iconPosition]}
                            contentFit="cover"
                            source={require("../assets/44.png")}
                          />
                        </View>
                        <View
                          style={[
                            styles.hour15MinParent,
                            styles.minParentPosition,
                          ]}
                        >
                          <Text
                            style={[styles.hour15Min, styles.questionPosition]}
                          >
                            1 hour 15 min
                          </Text>
                          <Image
                            style={[styles.icon2, styles.iconPosition]}
                            contentFit="cover"
                            source={require("../assets/12.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={[styles.group, styles.groupLayout]}>
                      <Image
                        style={[styles.icon4, styles.iconPosition1]}
                        contentFit="cover"
                        source={require("../assets/36.png")}
                      />
                      <Text style={[styles.text, styles.textTypo]}>4.8</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.rectangleContainer, styles.rectangleLayout]}
                >
                  <View style={styles.groupShadowBox} />
                  <View style={[styles.groupView, styles.groupLayout1]}>
                    <View style={[styles.groupItem, styles.groupItemBg]} />
                    <View
                      style={[
                        styles.graphicDesignParent,
                        styles.designParentPosition,
                      ]}
                    >
                      <Text style={[styles.graphicDesign, styles.quizTypo]}>
                        Graphic Design
                      </Text>
                      <View style={styles.groupContainer}>
                        <View style={styles.questionGroup}>
                          <Text style={[styles.question1, styles.minPosition]}>
                            10 Question
                          </Text>
                          {/* <Image
                            style={[styles.icon5, styles.iconPosition]}
                            contentFit="cover"
                            source={require("../assets/441.png")}
                          /> */}
                        </View>
                        <View
                          style={[
                            styles.hour15MinGroup,
                            styles.minParentPosition,
                          ]}
                        >
                          <Text style={[styles.hour15Min1, styles.minPosition]}>
                            1 hour 15 min
                          </Text>
                          {/* <Image
                            style={[styles.icon5, styles.iconPosition]}
                            contentFit="cover"
                            source={require("../assets/121.png")}
                          /> */}
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.container, styles.groupLayout]}>
                    {/* <Image
                      style={[styles.icon7, styles.iconPosition1]}
                      contentFit="cover"
                      source={require("../assets/361.png")}
                    /> */}
                    <Text style={[styles.text1, styles.textTypo]}>4.8</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.continueQuiz}>
              <Text style={[styles.continueQuiz1, styles.quizTypo]}>
                Continue Quiz
              </Text>
              <View style={[styles.dAnimation, styles.animationPosition]}>
                <View
                  style={[styles.dAnimationChild, styles.animationPosition]}
                />
                <View style={styles.title}>
                  <View
                    style={[styles.titleAndDesc, styles.dAnimation1Position]}
                  >
                    <Text
                      style={[styles.dAnimation1, styles.dAnimation1Position]}
                    >
                      3D Animation
                    </Text>
                    <View
                      style={[styles.groupParent1, styles.groupParent1Position]}
                    >
                      <View
                        style={[
                          styles.questionContainer,
                          styles.groupParent1Position,
                        ]}
                      >
                        <Text style={[styles.question2, styles.minPosition]}>
                          8<Text style={styles.question3}>/10 Question</Text>
                        </Text>
                        {/* <Image
                          style={[styles.icon5, styles.iconPosition]}
                          contentFit="cover"
                          source={require("../assets/442.png")}
                        /> */}
                      </View>
                      <View
                        style={[styles.minParent, styles.minParentPosition]}
                      >
                        <Text style={[styles.min, styles.minPosition]}>
                          35
                          <Text style={styles.question3}> min</Text>
                        </Text>
                        {/* <Image
                          style={[styles.icon5, styles.iconPosition]}
                          contentFit="cover"
                          source={require("../assets/122.png")}
                        /> */}
                      </View>
                    </View>
                  </View>
                  {/* <Image
                    style={styles.icon10}
                    contentFit="cover"
                    source={require("../assets/10.png")}
                  /> */}
                </View>
                <View style={[styles.button, styles.buttonLayout]}>
                  <Pressable
                    style={[styles.buttonChild, styles.buttonLayout]}
                  />
                  <Text style={[styles.continueQuiz2, styles.quizFlexBox]}>
                    Continue Quiz
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.button1, styles.selectedLayout]}>
      <LinearGradient
  style={styles.rectangleButton1Btn1}
  locations={[0, 1]}
  colors={["#3550dc", "#27e9f7"]}
>
        <Button onPress={()=>{navigation.navigate('StartQuiz')}}
          radius={5}
          iconPosition="left"
          type="solid"
          color="linear-gradient(122.76deg, #3550dc, #27e9f7)"
          containerStyle={styles.rectangleButton1Btn}
          buttonStyle={styles.rectangleButton1Btn1}
        />
        </LinearGradient>
        <Text style={[styles.startQuiz, styles.quizTypo]}>Start Quiz</Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleButton1Btn: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleButton1Btn1: {
    borderRadius: 5,
    width: 347,
    height: 49,
  },
  xboxMenuIconPosition: {
    height: 53,
    top: 0,
    position: "absolute",
  },
  quizFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  popularLayout: {
    width: 57,
    position: "absolute",
  },
  searchLayout: {
    height: 40,
    width: 315,
  },
  childPosition: {
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 19,
    height: 20,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  searchTypo: {
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_sm,
    height: 19,
    textAlign: "left",
  },
  indicatorLayout: {
    width: 46,
    position: "absolute",
  },
  selectedLayout: {
    width: 314,
    position: "absolute",
  },
  computerPosition: {
    width: 71,
    top: 0,
    position: "absolute",
  },
  childBorder: {
    borderColor: Color.colorMediumslateblue,
    borderStyle: "solid",
  },
  rectangleLayout: {
    height: 97,
    width: 314,
    left: 0,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 54,
    shadowRadius: 54,
    shadowOffset: {
      width: 10,
      height: 24,
    },
    shadowColor: "rgba(51, 51, 51, 0.1)",
    height: 97,
    width: 314,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupLayout1: {
    height: 73,
    position: "absolute",
  },
  groupItemBg: {
    backgroundColor: Color.colorSilver,
    borderRadius: Border.br_10xs,
    top: 0,
  },
  designLayout: {
    width: 129,
    position: "absolute",
  },
  quizTypo: {
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  groupParentPosition: {
    top: 26,
    height: 42,
  },
  questionPosition: {
    left: 21,
    color: Color.colorDarkgray,
    height: 19,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    height: 16,
    top: 1,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  minParentPosition: {
    top: 23,
    height: 19,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    width: 54,
    height: 22,
    position: "absolute",
  },
  iconPosition1: {
    top: 1,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    height: 22,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  designParentPosition: {
    left: 88,
    top: 2,
  },
  minPosition: {
    left: 20,
    height: 19,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  animationPosition: {
    height: 113,
    left: 0,
    position: "absolute",
  },
  dAnimation1Position: {
    width: 127,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupParent1Position: {
    width: 110,
    left: 0,
    position: "absolute",
  },
  buttonLayout: {
    height: 32,
    width: 205,
    position: "absolute",
  },
  androidLarge17Child: {
    top: 130,
    left: -2,
    width: 400,
    height: 454,
    position: "absolute",
  },
  androidLarge17Item: {
    backgroundColor: "#403838",
    width: 400,
    borderRadius: Border.br_8xs,
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
  quiz: {
    top: 60,
    left: 170,
    fontSize: 25,
    fontFamily: FontFamily.interRegular,
    color: Colornew.colorWhite,
    position: "absolute",
  },
  backArrowIcon: {
    top: 712,
    left: 150,
    height: 51,
  },
  letsTestYour: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: FontFamily.ubuntuBold,
    width: 269,
    height: 25,
    left: 25,
    textAlign: "left",
    color: Color.colorWhite,
    top: 10,
    position: "absolute",
  },
  searchFieldChild: {
    borderRadius: 35,
    height: 40,
    width: 345,
    top: 0,
  },
  icon: {
    left: 0,
  },
  icon1: {
    left: 305,
  },
  search: {
    color: "#d4d4d4",
    width: 59,
    height: 19,
    left: 28,
    top: 1,
    position: "absolute",
  },
  parent: {
    top: 10,
    left: 10,
    width: 296,
    height: 20,
    position: "absolute",
  },
  searchField: {
    top: 39,
    left: 23,
    position: "absolute",
  },
  contentChild: {
    top: 95,
    borderRadius: 32,
    height: 635,
    width: 400,
  },
  indicator: {
    left: 134,
    borderRadius: 10,
    height: 4,
    backgroundColor: "transparent",
    top: 0,
  },
  popular: {
    color: Color.colorDarkgray,
    height: 19,
    width: 57,
    position: "absolute",
    left: 0,
    top: 0,
  },
  science: {
    left: 64,
    color: Color.colorDarkgray,
    height: 19,
    width: 57,
    position: "absolute",
    top: 0,
  },
  mathematic: {
    left: 129,
    width: 79,
    color: Color.colorDarkgray,
    height: 19,
    top: 0,
    position: "absolute",
  },
  computer: {
    height: 19,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 0,
  },
  filterSelectedChild: {
    top: 24,
    left: 14,
    borderTopWidth: 1,
    height: 1,
    width: 46,
    position: "absolute",
  },
  filterSelected: {
    left: 217,
    height: 24,
  },
  filterTitle: {
    left: 2,
    width: 288,
    height: 24,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    borderWidth: 2,
    borderColor: Color.colorMediumslateblue,
    borderStyle: "solid",
  },
  groupItem: {
    width: 72,
    height: 73,
    position: "absolute",
    left: 0,
  },
  uiUxDesign: {
    height: 17,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    width: 129,
    position: "absolute",
    left: 0,
    top: 0,
  },
  question: {
    width: 81,
  },
  icon2: {
    width: 17,
  },
  questionParent: {
    width: 102,
    height: 19,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hour15Min: {
    width: 92,
  },
  hour15MinParent: {
    width: 113,
  },
  groupParent: {
    height: 42,
    width: 113,
    left: 0,
    position: "absolute",
  },
  uiUxDesignParent: {
    height: 68,
    left: 88,
    top: 2,
  },
  icon4: {
    width: 23,
    height: 20,
    left: 0,
    overflow: "hidden",
  },
  text: {
    left: 27,
    width: 26,
  },
  group: {
    top: 25,
    left: 233,
  },
  rectangleGroup: {
    width: 287,
    left: 12,
    top: 12,
    height: 73,
  },
  rectangleParent: {
    top: 0,
  },
  graphicDesign: {
    width: 151,
    height: 18,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  question1: {
    width: 77,
    color: Color.colorDarkgray,
  },
  icon5: {
    width: 16,
  },
  questionGroup: {
    width: 97,
    height: 19,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hour15Min1: {
    width: 88,
    color: Color.colorDarkgray,
  },
  hour15MinGroup: {
    width: 108,
  },
  groupContainer: {
    top: 27,
    width: 108,
    height: 42,
    left: 0,
    position: "absolute",
  },
  graphicDesignParent: {
    width: 152,
    height: 69,
    position: "absolute",
  },
  groupView: {
    width: 240,
    left: 12,
    top: 12,
    height: 73,
  },
  icon7: {
    width: 22,
    height: 20,
    left: 0,
    overflow: "hidden",
  },
  text1: {
    width: 25,
    left: 28,
  },
  container: {
    top: 37,
    left: 245,
  },
  rectangleContainer: {
    top: 113,
  },
  selectedAndNoSelected: {
    top: 41,
    height: 210,
    left: 0,
  },
  filterSelectedAndNoSelecte: {
    height: 250,
    left: 0,
    top: 0,
  },
  continueQuiz1: {
    fontSize: 18,
    color: Color.colorDarkslategray_100,
    width: 133,
    height: 21,
    left: 0,
    top: 0,
    position: "absolute",
  },
  dAnimationChild: {
    width: 108,
    backgroundColor: Color.colorSilver,
    borderRadius: Border.br_10xs,
    top: 0,
  },
  dAnimation1: {
    height: 18,
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  question3: {
    color: Color.colorDarkgray,
  },
  question2: {
    width: 90,
  },
  questionContainer: {
    height: 19,
    top: 0,
  },
  min: {
    width: 44,
  },
  minParent: {
    width: 64,
  },
  groupParent1: {
    height: 42,
    top: 26,
  },
  titleAndDesc: {
    height: 69,
  },
  icon10: {
    top: 8,
    left: 181,
    width: 18,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  title: {
    left: 116,
    width: 199,
    height: 69,
    top: 0,
    position: "absolute",
  },
  buttonChild: {
    backgroundColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  continueQuiz2: {
    top: 7,
    left: 65,
    fontSize: 12,
    fontFamily: FontFamily.ubuntuRegular,
    width: 101,
    height: 14,
  },
  button: {
    top: 81,
    left: 118,
  },
  dAnimation: {
    top: 38,
    width: 315,
  },
  continueQuiz: {
    top: 266,
    height: 151,
    width: 315,
    left: 0,
    position: "absolute",
  },
  content2: {
    top: 28,
    height: 416,
    width: 315,
    left: 0,
    position: "absolute",
  },
  content1: {
    top: 112,
    height: 444,
    width: 315,
    left: 23,
    position: "absolute",
  },
  content: {
    top: 96,
    height: 730,
    width: 360,
    left: 0,
    position: "absolute",
  },
  startQuiz: {
    top: 15,
    left: 140,
    width: 112,
    height: 18,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    color: Color.white,
    position: "absolute",
  },
  button1: {
    top: 697,
    height: 49,
    left: 23,
  },
  androidLarge17: {
    backgroundColor: "#03174c",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Quiz;

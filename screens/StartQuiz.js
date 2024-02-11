import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color,Colornew, FontFamily, FontSize } from "../GlobalStyles";

const StartQuiz = () => {
  return (
    <View style={styles.androidLarge20}>
      <Image
        style={styles.androidLarge20Child}
        contentFit="cover"
        source={require("../assets/Rectangle 12.png")}
      />
      <View style={[styles.androidLarge20Item, styles.xboxMenuIconPosition]} />
      <Image
        style={[styles.xboxMenuIcon, styles.xboxMenuIconPosition]}
        contentFit="cover"
        source={require("../assets/xbox-menu.png")}
      />
      {/* <Image
        style={[styles.accountIcon, styles.iconParentLayout]}
        contentFit="cover"
        source={require("../assets/account.png")}
      /> */}
      <Text style={[styles.quiz, styles.quizFlexBox]}>Quiz</Text>
      <View style={[styles.content, styles.contentLayout]}>
        <View style={[styles.contentChild, styles.contentLayout]}/>
        {/* <Image
          style={[styles.contentChild, styles.contentLayout]}
          contentFit="cover"
          source={require("../assets/Rectangle 4.png")}
        /> */}
        <View style={[styles.titleHeader, styles.titleHeaderLayout]}>
          <View style={[styles.uiUxDesignQuizParent, styles.designPosition]}>
            <Text style={[styles.uiUxDesign, styles.questionTypo]}>
              UI UX Design Quiz
            </Text>
            <Text style={[styles.get100Points, styles.textTypo]}>
              GET 100 Points
            </Text>
          </View>
          <View style={styles.parent}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/36.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>4.8</Text>
          </View>
        </View>
        <View style={styles.readingText}>
          <View style={[styles.groupParent, styles.parentPosition1]}>
            <View
              style={[
                styles.pointAwardedForACorrectAnParent,
                styles.iconParentLayout,
              ]}
            >
              <Text
                style={[styles.pointAwardedFor, styles.tapTypo]}
              >{`10 point awarded for a correct answer and no
marks for a incorrect answer`}</Text>
              {/* <Image
                style={styles.groupChild}
                contentFit="cover"
                source={require("../assets/ellipse-6.png")}
              /> */}
            </View>
            <View
              style={[
                styles.tapOnOptionsToSelectTheCParent,
                styles.parentPosition1,
              ]}
            >
              <Text style={[styles.tapOnOptions, styles.tapTypo]}>
                Tap on options to select the correct answer
              </Text>
              {/* <Image
                style={styles.groupChild}
                contentFit="cover"
                source={require("../assets/ellipse-61.png")}
              /> */}
            </View>
            <View
              style={[
                styles.tapOnTheBookmarkIconToSaParent,
                styles.iconParentLayout,
              ]}
            >
              <Text
                style={[styles.tapOnThe, styles.tapTypo]}
              >{`Tap on the bookmark icon to save interesting
questions`}</Text>
              {/* <Image
                style={styles.groupChild}
                contentFit="cover"
                source={require("../assets/ellipse-62.png")}
              /> */}
            </View>
            <View
              style={[
                styles.clickSubmitIfYouAreSureYParent,
                styles.iconParentLayout,
              ]}
            >
              <Text
                style={[styles.clickSubmitIf, styles.groupLayout]}
              >{`Click submit if you are sure you want to
complete all the quizzes`}</Text>
              {/* <Image
                style={styles.groupChild}
                contentFit="cover"
                source={require("../assets/ellipse-63.png")}
              /> */}
            </View>
          </View>
          <Text
            style={[styles.pleaseReadThe, styles.pleaseReadTheTypo]}
          >{`Please read the text below carefully so you can
understand it`}</Text>
        </View>
        <LinearGradient
          style={styles.indicator}
          locations={[0, 1]}
          colors={["#3550dc", "#27e9f7"]}
        />
        <View style={[styles.briefExplanation, styles.groupLayout]}>
          <View style={[styles.groupContainer, styles.groupLayout]}>
            <View style={[styles.groupView, styles.groupPosition]}>
              {/* <Image
                style={[styles.groupIcon, styles.groupPosition]}
                contentFit="cover"
                source={require("../assets/group-1717.png")}
              /> */}
              <View style={[styles.questionParent, styles.pointForALayout]}>
                <Text style={[styles.question, styles.questionPosition]}>
                  10 Question
                </Text>
                <Text style={[styles.pointForA, styles.pointForATypo]}>
                  10 point for a correct answer
                </Text>
              </View>
            </View>
            <View style={styles.groupParent1}>
              {/* <Image
                style={[styles.groupIcon, styles.groupPosition]}
                contentFit="cover"
                source={require("../assets/group-17171.png")}
              /> */}
              <View
                style={[styles.hour15MinParent, styles.hour15MinParentLayout]}
              >
                <Text style={[styles.hour15Min, styles.questionPosition]}>
                  1 hour 15 min
                </Text>
                <Text
                  style={[styles.totalDurationOf, styles.hour15MinParentLayout]}
                >
                  Total duration of the quiz
                </Text>
              </View>
            </View>
            <View style={[styles.groupParent2, styles.groupLayout]}>
              {/* <Image
                style={[styles.groupIcon, styles.groupPosition]}
                contentFit="cover"
                source={require("../assets/group-17172.png")}
              /> */}
              <View
                style={[styles.win10StarParent, styles.win10StarParentLayout]}
              >
                <Text style={[styles.win10Star, styles.questionPosition]}>
                  Win 10 star
                </Text>
                <Text
                  style={[
                    styles.answerAllQuestions,
                    styles.win10StarParentLayout,
                  ]}
                >
                  Answer all questions correctly
                </Text>
              </View>
            </View>
          </View>
          <Text style={[styles.briefExplanationAbout, styles.questionPosition]}>
            Brief explanation about this quiz
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  xboxMenuIconPosition: {
    height: 53,
    top: 0,
    position: "absolute",
  },
  iconParentLayout: {
    height: 38,
    position: "absolute",
  },
  quizFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  contentLayout: {
    
    width: 400,
    left: 0,
  },
  titleHeaderLayout: {
    height: 45,
    top: 0,
  },
  designPosition: {
    width: 172,
    left: 0,
    position: "absolute",
  },
  questionTypo: {
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
  },
  textTypo: {
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  parentPosition1: {
    top: 54,
    left: 0,
    position: "absolute",
  },
  tapTypo: {
    color: Color.black,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: 0,
  },
  groupLayout: {
    width: 247,
    position: "absolute",
  },
  pleaseReadTheTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  groupPosition: {
    top: 0,
    left: 0,
  },
  pointForALayout: {
    width: 183,
    position: "absolute",
  },
  questionPosition: {
    fontSize: FontSize.size_base,
    color: Color.black,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  pointForATypo: {
    color: Color.colorDarkgray,
    top: 21,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 0,
  },
  hour15MinParentLayout: {
    width: 158,
    position: "absolute",
  },
  win10StarParentLayout: {
    width: 190,
    position: "absolute",
  },
  androidLarge20Child: {
    top: 148,
    left: -2,
    width: 400,
    height: 454,
    position: "absolute",
  },
  androidLarge20Item: {
    borderRadius: 5,
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
  },
  quiz: {
    top: 60,
    left: 170,
    fontSize: 25,
    fontFamily: FontFamily.interRegular,
    color: Colornew.colorWhite,
    position: "absolute",
  },
  contentChild: {
    top: 61,
    borderRadius: 32,
    height: 668,
    position: "absolute",
    backgroundColor:Color.colorWhite,
  },
  uiUxDesign: {
    fontSize: FontSize.size_lg,
    top: 0,
    width: 172,
    left: 0,
    position: "absolute",
    textAlign: "left",
    color: Color.colorWhite,
  },
  get100Points: {
    top: 29,
    fontSize: 12,
    width: 98,
    left: 0,
  },
  uiUxDesignQuizParent: {
    height: 45,
    top: 0,
  },
  icon: {
    top: 1,
    width: 25,
    height: 22,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    left: 32,
    width: 30,
    fontSize: FontSize.size_lg,
    top: 0,
  },
  parent: {
    top: 10,
    left: 252,
    width: 62,
    height: 25,
    position: "absolute",
  },
  titleHeader: {
    width: 314,
    left: 23,
    position: "absolute",
  },
  pointAwardedFor: {
    width: 287,
    fontFamily: FontFamily.nunitoRegular,
    left: 22,
    color: Color.black,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupChild: {
    top: 6,
    width: 6,
    height: 6,
    left: 0,
    position: "absolute",
  },
  pointAwardedForACorrectAnParent: {
    width: 309,
    left: 0,
    top: 0,
  },
  tapOnOptions: {
    width: 270,
    fontFamily: FontFamily.nunitoRegular,
    left: 22,
    color: Color.black,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  tapOnOptionsToSelectTheCParent: {
    width: 292,
    height: 19,
  },
  tapOnThe: {
    width: 281,
    fontFamily: FontFamily.nunitoRegular,
    left: 22,
    color: Color.black,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  tapOnTheBookmarkIconToSaParent: {
    top: 89,
    width: 303,
    left: 0,
  },
  clickSubmitIf: {
    color: Color.black,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: 0,
    fontFamily: FontFamily.nunitoRegular,
    left: 22,
  },
  clickSubmitIfYouAreSureYParent: {
    top: 143,
    width: 269,
    left: 0,
  },
  groupParent: {
    height: 181,
    width: 309,
  },
  pleaseReadThe: {
    color: Color.black,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: 0,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    width: 309,
    left: 0,
    position: "absolute",
  },
  readingText: {
    top: 319,
    height: 235,
    width: 309,
    left: 23,
    position: "absolute",
  },
  indicator: {
    top: 77,
    left: 157,
    borderRadius: 10,
    width: 46,
    height: 4,
    backgroundColor: Color.color,
    position: "absolute",
  },
  groupIcon: {
    width: 40,
    height: 40,
    left: 0,
    position: "absolute",
  },
  question: {
    width: 92,
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
  },
  pointForA: {
    width: 183,
    position: "absolute",
  },
  questionParent: {
    left: 57,
    top: 0,
    height: 40,
  },
  groupView: {
    width: 240,
    height: 40,
    left: 0,
    position: "absolute",
  },
  hour15Min: {
    width: 102,
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
  },
  totalDurationOf: {
    color: Color.colorDarkgray,
    top: 21,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 0,
  },
  hour15MinParent: {
    left: 57,
    top: 0,
    height: 40,
  },
  groupParent1: {
    top: 56,
    width: 215,
    height: 40,
    left: 0,
    position: "absolute",
  },
  win10Star: {
    width: 85,
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
  },
  answerAllQuestions: {
    color: Color.colorDarkgray,
    top: 21,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 0,
  },
  win10StarParent: {
    height: 59,
    left: 57,
    top: 0,
  },
  groupParent2: {
    top: 112,
    height: 59,
    left: 0,
  },
  groupContainer: {
    top: 38,
    height: 171,
    left: 0,
  },
  briefExplanationAbout: {
    width: 243,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  briefExplanation: {
    top: 105,
    height: 209,
    left: 23,
  },
  content: {
    top: 102,
    height: 729,
    position: "absolute",
  },
  androidLarge20: {
    backgroundColor: "#03174c",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default StartQuiz;

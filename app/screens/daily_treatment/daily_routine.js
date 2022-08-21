import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomRatingBar from "../custom_classes/custom_rating_bar";
import InDeCount from "../custom_classes/idCount";
import Slider from "@react-native-community/slider";
import FlatButton from "../custom_classes/FlatButton";
import Icon from "react-native-vector-icons/FontAwesome";

function DailyRoutine({ navigation }) {
  const [sliderValue, setSliderValue] = useState();

  const getSliderTag = () => {
    if (sliderValue > 0 && sliderValue <= 1) {
      return "Light";
    } else if (sliderValue > 1 && sliderValue <= 2) {
      return "Moderate";
    } else if (sliderValue > 2 && sliderValue <= 3) {
      return "Vigorous";
    } else if (sliderValue > 3 && sliderValue <= 4) {
      return "Very Vigorous";
    } else {
      return "No workout";
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="green" />
      {/* Appbar Items */}
      <View style={styles.appbarContainer}>
        <View style={styles.appbarFlexBox}>
          <Icon
            name="arrow-left"
            color={"white"}
            size={20}
            onPress={() => navigation.goBack()}
          />

          <View style={{ marginLeft: 20 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                color: "white",
              }}
            >
              Daily Routine Log
            </Text>
            <Text style={{ fontSize: 12, color: "white" }}>
              Questions 1 out of 10
            </Text>
          </View>
        </View>
      </View>

      {/* Body Items */}
      <ScrollView style={styles.scrollViewStyle}>
        {/* Question One */}
        <View style={styles.Q_tileStyle}>
          <View style={styles.questioBoxStyle}>
            <Text style={styles.questionNO}>Q1: </Text>
            <Text style={styles.question}>
              How well did you sleep last night?
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Insights", { routeType: "Exercise" })
              }
            >
              <View style={styles.detailIconBoxStyle}>
                <Image
                  source={require("../../assets/ques.png")}
                  style={styles.detailIconStyle}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.ratingBarBox}>
            <CustomRatingBar
              moods={[
                "Awesome",
                "Good",
                "Just okay\n(agerage)",
                "Poor",
                "Extremely\npoor",
              ]}
            />
          </View>
        </View>
        {/* Question Two */}
        <View style={styles.Q_tileStyle}>
          <View style={styles.questioBoxStyle}>
            <Text style={styles.questionNO}>Q2: </Text>
            <Text style={styles.question}>
              How many hours of sleep did you get last night?
            </Text>
          </View>
          <View style={styles.ratingBarBox}>
            <InDeCount itemValue={"Hours"} />
          </View>
          <View style={styles.ratingBarBox}>
            <Text style={styles.recomendedStyle}>Recommended - 8 hours</Text>
            <Image
              source={require("../../assets/ques.png")}
              style={styles.detailIconStyle}
            />
          </View>
        </View>
        {/* Question Three */}
        <View style={styles.Q_tileStyle}>
          <View style={styles.questioBoxStyle}>
            <Text style={styles.questionNO}>Q3: </Text>
            <Text style={styles.question}>
              What is your stress level like today?
            </Text>
            <View style={styles.detailIconBoxStyle}>
              <Image
                source={require("../../assets/ques.png")}
                style={styles.detailIconStyle}
              />
            </View>
          </View>
          <View style={styles.ratingBarBox}>
            <CustomRatingBar
              moods={[
                "Not at all\nstressed",
                "Little bit\nstressed",
                "Moderately\nstressed",
                "Very\nstressed",
                "Extremely\nstressed",
              ]}
            />
          </View>
        </View>
        {/* Question Four */}
        <View style={styles.Q_tileStyle}>
          <View style={styles.questioBoxStyle}>
            <Text style={styles.questionNO}>Q4: </Text>
            <Text style={styles.question}>
              For how long did you exercise today?
            </Text>
            <View style={styles.detailIconBoxStyle}>
              <Image
                source={require("../../assets/ques.png")}
                style={styles.detailIconStyle}
              />
            </View>
          </View>
          <View style={styles.ratingBarBox}>
            <InDeCount itemValue={"minutes"} />
          </View>
          <View style={styles.ratingBarBox}>
            <Text style={styles.recomendedStyle}>
              Recommended - 30-40 minutes
            </Text>
            <Image
              source={require("../../assets/ques.png")}
              style={styles.detailIconStyle}
            />
          </View>
        </View>
        {/* Question Five */}
        <View style={styles.Q_tileStyle}>
          <View style={styles.questioBoxStyle}>
            <Text style={styles.questionNO}>Q5: </Text>
            <Text style={styles.question}>How intense was your workout?</Text>
            <View style={styles.detailIconBoxStyle}>
              <Image
                source={require("../../assets/ques.png")}
                style={styles.detailIconStyle}
              />
            </View>
          </View>
          <View>
            <Slider
              style={{
                width: "90%",
                height: 40,
                alignSelf: "center",
              }}
              onValueChange={(v) => setSliderValue(v)}
              minimumValue={0}
              maximumValue={4}
              minimumTrackTintColor="#75c98a"
              maximumTrackTintColor="#000000"
            />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ alignItems: "center", color: "red" }}>
              {getSliderTag()}
            </Text>
          </View>
        </View>
        {/* Question Six */}
        <View style={styles.Q_tileStyle}>
          <View style={styles.questioBoxStyle}>
            <Text style={styles.questionNO}>Q6: </Text>
            <Text style={styles.question}>
              How much water did you drink today?
            </Text>
            <View style={styles.detailIconBoxStyle}>
              <Image
                source={require("../../assets/ques.png")}
                style={styles.detailIconStyle}
              />
            </View>
          </View>
          <View style={styles.ratingBarBox}>
            <InDeCount itemValue={"glasses"} />
          </View>
          <View style={styles.ratingBarBox}>
            <Text style={styles.recomendedStyle}>
              1 Glass = 240 ml (8 fl oz)
            </Text>
            <Image
              source={require("../../assets/ques.png")}
              style={styles.detailIconStyle}
            />
          </View>
        </View>
        {/* Question Seven */}
        <View style={styles.Q_tileStyle}>
          <View style={styles.questioBoxStyle}>
            <Text style={styles.questionNO}>Q7: </Text>
            <Text style={styles.question}>
              How many bowel movements you have today?
            </Text>
            <View style={styles.detailIconBoxStyle}>
              <Image
                source={require("../../assets/ques.png")}
                style={styles.detailIconStyle}
              />
            </View>
          </View>
          <View style={styles.ratingBarBox}>
            <InDeCount />
          </View>
        </View>

        {/* Question Eight */}
        <View style={styles.Q_tileStyle}>
          <View style={styles.questioBoxStyle}>
            <Text style={styles.questionNO}>Q8: </Text>
            <Text style={styles.question}>
              Did you experience digestive discomfort such as bloating, gas, &
              abdominal pain?
            </Text>
            <View style={styles.detailIconBoxStyle}>
              <Image
                source={require("../../assets/ques.png")}
                style={styles.detailIconStyle}
              />
            </View>
          </View>
          <View style={styles.ratingBarBox}>
            <CustomRatingBar
              moods={[
                "Not at all",
                "Somewhat",
                "Moderately",
                "Very\nhigh",
                "Extremely\nHigh",
              ]}
            />
          </View>
        </View>
        {/* Question Nine */}
        <View style={styles.Q_tileStyle}>
          <View style={styles.questioBoxStyle}>
            <Text style={styles.questionNO}>Q9: </Text>
            <Text style={styles.question}>
              How would you rate today's itching intensity?
            </Text>
            <View style={styles.detailIconBoxStyle}>
              <Image
                source={require("../../assets/ques.png")}
                style={styles.detailIconStyle}
              />
            </View>
          </View>
          <View style={styles.ratingBarBox}>
            <CustomRatingBar
              moods={[
                "No itch",
                "Little bit",
                "Moderately",
                "High",
                "Very high",
              ]}
            />
          </View>
        </View>

        {/* Question Ten */}
        <View style={styles.Q_tileStyle}>
          <View style={styles.questioBoxStyle}>
            <Text style={styles.questionNO}>Q10: </Text>
            <Text style={styles.question}>
              How about psoriasis scaling and flaking?
            </Text>
            <View style={styles.detailIconBoxStyle}>
              <Image
                source={require("../../assets/ques.png")}
                style={styles.detailIconStyle}
              />
            </View>
          </View>
          <View style={styles.ratingBarBox}>
            <CustomRatingBar
              moods={[
                "No flaking",
                "Little bit",
                "Moderately",
                "High",
                "Very high",
              ]}
            />
          </View>
        </View>
        <TouchableOpacity>
          <FlatButton btnName={"Save"} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "flex-start",
  },

  Q_tileStyle: {
    borderRadius: 15,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
  },

  questioBoxStyle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
  },

  detailIconStyle: { height: 15, width: 15 },
  detailIconBoxStyle: { width: 40, alignSelf: "center", alignItems: "center" },

  appbarContainer: {
    width: "100%",
    // flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "green",
  },

  recomendedStyle: {
    fontSize: 13,
    fontWeight: "600",
    color: "green",
    marginRight: 10,
  },

  ratingBarBox: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  appbarFlexBox: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },

  scrollViewStyle: { width: "100%", padding: 5, backgroundColor: "#eee" },

  questionNO: {
    fontSize: 16,
    width: 45,
    fontWeight: "600",
    color: "green",
    marginTop: 10,
  },

  question: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "justify",
    marginTop: 10,
  },
});

export default DailyRoutine;

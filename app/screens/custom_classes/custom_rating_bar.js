import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";

const happyImg = require("../../assets/happy.png");
const smileImg = require("../../assets/smile.png");
const noReactionImg = require("../../assets/noReaction.png");
const sadImg = require("../../assets/sad.png");
const unhappyImg = require("../../assets/unhappy.png");

function CustomRatingBar({ moods }) {
  const [defaultRating, setdefaultRating] = useState();
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

  return (
    <View style={styles.customRatingBarStyle}>
      {maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => setdefaultRating(item)}
          >
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Image
                style={styles.starImgStyle}
                source={defaultRating >= item ? happyImg : unhappyImg}
              />
              <Text style={{ fontSize: 10, textAlign: "center" }}>
                {moods ? moods[key] : null}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  customRatingBarStyle: {
    width: "80%",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  starImgStyle: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
});

export default CustomRatingBar;

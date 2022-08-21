import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import colorPlate from "../../config/colors";
import Icon from "react-native-vector-icons/FontAwesome";

export default function MobileLoginForm({ navigation }) {
  return (
    <ImageBackground source={require("../../assets/bg.png")} resizeMode="cover">
      <View style={styles.appbarView}>
        <Icon
          name="arrow-left"
          size={20}
          onPress={() => navigation.navigate("Onboarding")}
        />
      </View>
      <View style={styles.screenStyle}>
        <View style={styles.loginCardStyle}>
          <View style={styles.logoContainer}>
            <Image
              resizeMode="contain"
              source={require("../../assets/app_logo.png")}
              style={styles.logoStyle}
            />
          </View>

          <Text style={styles.titleTextStyle}>Enter your mobile number</Text>
          <TextInput
            placeholder="+91 xxxx xxxxx"
            style={styles.textBoxStyle}
          ></TextInput>
          <TouchableOpacity onPress={() => navigation.navigate("OtpView")}>
            <View style={styles.buttonContainer}>
              <Text style={{ fontSize: 18, color: "white", fontWeight: "600" }}>
                Continue
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{ marginTop: 20, fontSize: 16, marginHorizontal: "10%" }}>
          We will send an otp on your entered phone number
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  appbarView: {
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: 50,
    position: "absolute",
  },

  screenStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  logoContainer: {
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  logoStyle: {
    width: "65%",
  },

  titleTextStyle: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 20,
    color: colorPlate.blackColor,
  },

  textBoxStyle: {
    fontSize: 18,
    marginVertical: 15,
    borderRadius: 20,
    paddingLeft: 15,
    backgroundColor: "#eee",
    padding: 10,
  },

  loginCardStyle: {
    elevation: 5,
    shadowOpacity: 0.3,
    borderRadius: 20,
    width: "80%",
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "white",
  },

  buttonContainer: {
    marginTop: 30,
    backgroundColor: colorPlate.primaryColor,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});

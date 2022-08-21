import React, { useRef } from "react";
import {
  ImageBackground,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colorPlate from "../../config/colors";

function OtpView({ navigation }) {
  const firstPin = useRef();
  const secondPin = useRef();
  const thirdPin = useRef();
  const fourthPin = useRef();
  const fifthPin = useRef();
  const sixthPin = useRef();
  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      resizeMode={"cover"}
    >
      <View style={{ height: "100%", width: "100%" }}>
        {/* On Scree back Button */}
        <View style={styles.appBarStyle}>
          <Icon
            name="arrow-left"
            size={20}
            onPress={() => navigation.goBack()}
          />
        </View>
        <ScrollView style={{ marginHorizontal: 20, marginVertical: 20 }}>
          {/* Screen Heading */}
          <Text style={styles.headingTextStyle}>Verify Mobile Number</Text>
          <Text style={styles.subheadingtextStyle}>
            Enter the 6-digit code sent to your mobile number
          </Text>

          {/* Text Pin Input */}
          <View style={styles.otpContainerStyle}>
            <View style={styles.otpBoxStyle}>
              <TextInput
                style={styles.otptextStyle}
                ref={firstPin}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(t) => {
                  t && secondPin.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBoxStyle}>
              <TextInput
                style={styles.otptextStyle}
                ref={secondPin}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(t) => {
                  t && thirdPin.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBoxStyle}>
              <TextInput
                style={styles.otptextStyle}
                ref={thirdPin}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(t) => {
                  t && fourthPin.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBoxStyle}>
              <TextInput
                style={styles.otptextStyle}
                ref={fourthPin}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(t) => {
                  t && fifthPin.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBoxStyle}>
              <TextInput
                style={styles.otptextStyle}
                ref={fifthPin}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(t) => {
                  t.length == 0
                    ? t && fifthPin.current.focus()
                    : t && sixthPin.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBoxStyle}>
              <TextInput
                style={styles.otptextStyle}
                ref={sixthPin}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(t) => {
                  t.length < 1 ? t && fifthPin.current.focus() : null;
                }}
              />
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterForm")}
            style={{ marginTop: 30 }}
          >
            <View style={styles.buttonStyle}>
              <Text style={{ fontSize: 18, fontWeight: "700", color: "white" }}>
                SUBMIT
              </Text>
            </View>
          </TouchableOpacity>

          {/* Re-Send code Button */}
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => {}} style={{ marginTop: 20 }}>
              <Text style={styles.textButtonStyle}>Re-Send Code</Text>
            </TouchableOpacity>
          </View>

          {/* Change Phone Number Button */}
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginTop: 20 }}
            >
              <Text style={styles.textButtonStyle}>Change Mobile Number</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colorPlate.primaryColor,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
  },

  headingTextStyle: {
    fontSize: 24,
    fontWeight: "700",
    color: "black",
    marginTop: "10%",
  },

  subheadingtextStyle: {
    fontSize: 16,
    fontWeight: "400",
    color: "black",
    marginTop: 20,
  },

  textButtonStyle: {
    fontSize: 16,
    fontWeight: "700",
    color: colorPlate.primaryColor,
    textDecorationLine: "underline",
  },

  appBarStyle: {
    width: "100%",
    alignItems: "flex-start",
    position: "relative",
    marginTop: 50,
    marginLeft: 20,
  },

  otpContainerStyle: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },

  otpBoxStyle: {
    borderRadius: 10,
    borderColor: colorPlate.primaryColor,
    backgroundColor: "white",
    borderWidth: 1.5,
    padding: 10,
  },

  otptextStyle: {
    fontSize: 20,
    color: "black",
    padding: 0,
    textAlign: "center",
  },
});

export default OtpView;

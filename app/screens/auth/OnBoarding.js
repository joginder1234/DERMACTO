import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

import colorPlate from "../../config/colors";

export default function OnBoardingScreen({ navigation }) {
  return (
    <ImageBackground source={require("../../assets/bg.png")} resizeMode="cover">
      <View style={styles.screenStyle}>
        <ScrollView>
          <View
            style={{
              alignItems: "center",
              marginHorizontal: "5%",
              marginTop: "30%",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
                fontWeight: "700",
                color: colorPlate.primaryColor,
              }}
            >
              Holistic healing of skin problems to help people reclaim their
              health, beauty and confidence
            </Text>
          </View>
          <View style={styles.logoContainer}>
            <Image
              animation="bounceInDown"
              duration="1000"
              resizeMode="contain"
              source={require("../../assets/app_logo.png")}
              style={styles.logoStyle}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("LoginForm")}
            style={styles.expandedBtn}
          >
            <View style={styles.phoneButtonStyle}>
              <Text style={styles.buttonTextStyle}>Continue with MOBILE</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("EmailLoginForm")}
            style={styles.expandedBtn}
          >
            <View style={styles.emailButtonStyle}>
              <Text style={styles.buttonTextStyle}>Continue with EMAIL</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity onPress={() => {}} style={styles.expandedBtn}>
            <View style={styles.googleButtonStyle}>
              <Text style={styles.buttonTextStyle}>Continue with GOOGLE</Text>
            </View>
          </TouchableOpacity>
          <View style={{ alignItems: "center", marginTop: "5%" }}>
            <Text style={{ fontSize: 14 }}>By continuing you agree to the</Text>
            <View style={styles.policyTextStyle}>
              <Text
                style={{
                  fontSize: 14,
                  color: colorPlate.chocoColor,
                  fontWeight: "bold",
                }}
              >
                Terms of Services
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginHorizontal: 8,
                }}
              >
                and
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: colorPlate.chocoColor,
                  fontWeight: "bold",
                }}
              >
                Privacy Policy
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    justifyContent: "center",
    alignItems: "stretch",
    width: "100%",
    height: "100%",
  },

  phoneButtonStyle: {
    backgroundColor: colorPlate.primaryColor,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
  },

  emailButtonStyle: {
    backgroundColor: colorPlate.preLightColor,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
  },
  googleButtonStyle: {
    backgroundColor: colorPlate.blackColor,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
  },

  expandedBtn: {
    marginHorizontal: "10%",
    marginVertical: 5,
  },

  buttonTextStyle: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  logoContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "7%",
  },
  logoStyle: {
    width: "65%",
  },

  dividerContainer: {
    flexDirection: "row",
    width: "100%",
    alignContent: "stretch",
  },

  divider: {
    marginVertical: 20,
    marginHorizontal: "5%",
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  policyTextStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
});

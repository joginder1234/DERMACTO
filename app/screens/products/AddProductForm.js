import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { BottomSheet } from "react-native-btr";
import { RadioButton } from "react-native-paper";
import FlatButton from "../custom_classes/FlatButton";
import CustomeAppbar from "../re_usable/Appbar";
import colors from "../../config/colors";
import ScheduleSelector2 from "./ScheduleSelector2";

function AddProductManually({ navigation, route }) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setIsVisible(!isVisible);
  };
  const [isSchedule, setSchedule] = useState(false);
  const toggleScheduleBottomView = () => {
    //Toggling the visibility state of the bottom sheet
    setSchedule(!isSchedule);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.primaryColor}
      />
      {/* Appbar Items */}
      <CustomeAppbar title={"Add Product Info"} navigation={navigation} />
      <ScrollView style={{ padding: 15, flex: 1 }}>
        <Text style={styles.textstyle}>Brand/Company Name *</Text>
        <TextInput placeholder="Type Brand Name..." style={styles.textinput} />
        <Text style={styles.textstyle}>Product Name *</Text>
        <TextInput
          placeholder="Type product name here..."
          style={styles.textinput}
        />
        <Text style={styles.textstyle}>Product Category *</Text>
        <TextInput
          placeholder="Select a category..."
          style={styles.textinput}
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.textstyle, { marginRight: 10 }]}>
            Product Photo
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "400" }}>Optional</Text>
        </View>
        <TouchableOpacity
          onPress={toggleBottomNavigationView}
          style={{
            width: 100,
            height: 100,
            alignSelf: "center",
            marginBottom: 30,
          }}
        >
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            <Image
              source={require("../../assets/camera.png")}
              style={{
                width: "60%",
                height: "60%",
                borderRadius: 20,
              }}
              resizeMode="center"
            />
          </View>
          <View
            style={{
              backgroundColor: colors.primaryColor,
              height: 30,
              width: 30,
              borderRadius: 100,
              position: "absolute",
              justifyContent: "center",
              alignSelf: "flex-end",
              alignItems: "center",
              bottom: -10,
              right: -10,
            }}
          >
            <Image
              source={require("../../assets/add.png")}
              style={{ width: 30, height: 30, tintColor: "white" }}
            />
          </View>
        </TouchableOpacity>
        <FlatButton
          btnName={"Add Product"}
          callBack={toggleScheduleBottomView}
        />

        {/* <TouchableOpacity onPress={toggleScheduleBottomView}>
          <View style={styles.button}>
            <Text>Add Product</Text>
          </View>
        </TouchableOpacity> */}
      </ScrollView>
      <BottomSheet
        visible={isVisible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={styles.bottomSheetContainer}>
          <View style={styles.imgselectioncontainer}>
            <Image
              source={require("../../assets/gallary.jpeg")}
              style={{ width: 30, height: 30, marginRight: 20 }}
            />
            <Text>From Gallery</Text>
          </View>
          <View
            style={{ width: "100%", backgroundColor: "black", height: 1 }}
          />
          <View style={styles.imgselectioncontainer1}>
            <Image
              source={require("../../assets/camera.png")}
              style={{ width: 30, height: 30, marginRight: 20 }}
            />
            <Text>Take a photo</Text>
          </View>
        </View>
      </BottomSheet>
      <BottomSheet
        visible={isSchedule}
        onBackButtonPress={toggleScheduleBottomView}
        onBackdropPress={toggleScheduleBottomView}
      >
        <View style={styles.bottomSheetContainer}>
          <View style={styles.bottomSheetappbarContainer}>
            <View style={styles.bottomSheetappbarFlexBox}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  color: "black",
                }}
              >
                Usage Schedule
              </Text>
            </View>
          </View>

          {/* Divider */}
          <View
            style={{
              width: "100%",
              height: 0.5,
              backgroundColor: "black",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 40,
              justifyContent: "space-evenly",
            }}
          >
            <View style={styles.buttonStyle}>
              <Image
                source={require("../../assets/sun.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ marginLeft: 5, fontSize: 15, fontWeight: "500" }}>
                Morning
              </Text>
            </View>
            <View style={styles.buttonStyle}>
              <Image
                source={require("../../assets/moon.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ marginLeft: 5, fontSize: 15, fontWeight: "500" }}>
                Night
              </Text>
            </View>
            <View style={styles.buttonStyle}>
              <Text style={{ marginLeft: 5, fontSize: 15, fontWeight: "500" }}>
                Both
              </Text>
            </View>
          </View>
          <ScheduleSelector2 isVisible={route.params.route === "tropical"} />
          <View
            style={[
              styles.buttonStyle,
              { alignSelf: "center", marginBottom: 40 },
            ]}
          >
            <Text style={{ fontSize: 15, fontWeight: "500" }}>Save</Text>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#eee",
  },
  appbarContainer: {
    width: "100%",
    alignItems: "flex-start",
    backgroundColor: colors.primaryColor,
  },
  appbarFlexBox: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  textstyle: {
    fontSize: 16,
    fontWeight: "600",
    paddingBottom: 5,
  },
  textinput: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 20,
    paddingLeft: 15,
    backgroundColor: "#fff",
    padding: 10,
  },
  button: {
    height: 40,
    borderRadius: 20,
    borderWidth: 0.5,
    marginVertical: 40,
    marginRight: 10,
    padding: 10,
    backgroundColor: "white",
    borderColor: "black",
    alignItems: "center",
  },
  bottomSheetContainer: {
    paddingBottom: 10,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 20,
  },
  imgselectioncontainer: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imgselectioncontainer1: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomSheetappbarContainer: {
    width: "100%",
    alignItems: "flex-start",
    backgroundColor: "white",
    borderRadius: 20,
  },
  bottomSheetappbarFlexBox: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  buttonStyle: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    alignItems: "center",
    borderColor: "black",
    marginLeft: 15,
    marginTop: 20,
    justifyContent: "center",
    width: 100,
  },
});

export default AddProductManually;

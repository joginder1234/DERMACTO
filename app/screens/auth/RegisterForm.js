import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colorPlate from "../../config/colors";

import SelectDropdown from "react-native-select-dropdown";
import CountryPicker from "react-native-country-picker-modal";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const skinCondition = [
  "eczema",
  "psoriasis",
  "acne",
  "rosacea",
  "ichthyosis",
  "vitiligo",
];

const genderList = ["Male", "Female", "Other"];

function RegisterForm({ navigation }) {
  const [country, setCountry] = useState();
  const [pickedDate, setPickDate] = useState("dd/mm/yyyy");
  const [selectedCondition, setCondition] = useState("");
  const [selectedGender, setGender] = useState("");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return (
    <View style={styles.pageviewStyle}>
      {/* On Scree back Button */}
      <View style={styles.appBarStyle}>
        <Icon name="arrow-left" size={20} onPress={() => navigation.goBack()} />
      </View>
      {/* Screen Body */}
      <ScrollView style={{ marginHorizontal: 20, marginVertical: 20 }}>
        <Text style={styles.headingStyle}>All Set!</Text>
        <Text style={styles.headingStyle}>
          Just a few details to customize your experience
        </Text>
        <View style={{ marginTop: 30 }} />
        <View>
          <Text style={{ fontSize: 16 }}>Display name / nick name</Text>
          <TextInput placeholder="john" style={styles.textBoxStyle}></TextInput>
        </View>

        <View>
          <Text style={{ fontSize: 16 }}>Skin Condition</Text>
          <SelectDropdown
            buttonStyle={{
              width: "100%",
              borderRadius: 20,
              marginTop: 5,
              marginBottom: 15,
            }}
            defaultButtonText="Select"
            dropdownIconPosition="right"
            renderDropdownIcon={(isOpened) => {
              return (
                <Icon
                  style={{ paddingRight: 10 }}
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#444"}
                  size={15}
                />
              );
            }}
            buttonTextStyle={{ textAlign: "left", fontSize: 16 }}
            data={skinCondition}
            onSelect={(item, i) => {
              setCondition(item);
              console.log(item);
            }}
            buttonTextAfterSelection={(item, i) => {
              return item;
            }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 16 }}>Gender</Text>
          <SelectDropdown
            buttonStyle={{
              width: "100%",
              borderRadius: 20,
              marginTop: 5,
              marginBottom: 15,
            }}
            defaultButtonText="Select"
            dropdownIconPosition="right"
            renderDropdownIcon={(isOpened) => {
              return (
                <Icon
                  style={{ paddingRight: 10 }}
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#444"}
                  size={15}
                />
              );
            }}
            buttonTextStyle={{ textAlign: "left", fontSize: 16 }}
            data={genderList}
            onSelect={(item, i) => {
              setGender(item);
              console.log(item);
            }}
            buttonTextAfterSelection={(item, i) => {
              return item;
            }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 16 }}>Date of Birth</Text>

          <TouchableOpacity onPress={showDatePicker}>
            <View style={styles.countryBoxStyle}>
              <Text style={{ fontSize: 16 }}> {pickedDate}</Text>
            </View>
          </TouchableOpacity>
          <DateTimePickerModal
            maximumDate={new Date(Date.now())}
            date={new Date(Date.now())}
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={(date) => {
              setPickDate(date.toLocaleDateString());
              hideDatePicker();
            }}
            onCancel={hideDatePicker}
          />
        </View>
        <View>
          <Text style={{ fontSize: 16 }}>Country of Living</Text>

          <CountryPicker
            containerButtonStyle={styles.countryBoxStyle}
            withCountryNameButton={"true"}
            onSelect={(item) => {
              setCountry(item.name);
              console.log(item.name);
              return item.name;
            }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 16 }}>Email Address</Text>
          <TextInput
            placeholder="xxx@email.com"
            style={styles.textBoxStyle}
          ></TextInput>
        </View>
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              "You will not be able to edit the below details after sign up.",
              "Skin Condition\n" +
                selectedCondition +
                "\n\nDate of birth(age)\n" +
                pickedDate +
                "\n\nGender\n" +
                selectedGender,
              [
                {
                  text: "Confirm",
                  onPress: () => navigation.navigate("BottomNavView"),
                },
                {
                  text: "Cancel",
                },
              ],
              { cancelable: true }
            )
          }
          style={{ marginTop: 30 }}
        >
          <View style={styles.buttonStyle}>
            <Text style={{ fontSize: 18, fontWeight: "700", color: "white" }}>
              Continue
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ alignItems: "center", marginTop: "5%" }}>
          <Text style={{ fontSize: 14 }}>By continuing you agree to the</Text>
          <View style={styles.policyTextStyle}>
            <Text style={styles.termsStyle}>Terms of Services</Text>
            <Text
              style={{
                fontSize: 14,
                marginHorizontal: 8,
              }}
            >
              and
            </Text>
            <Text style={styles.termsStyle}>Privacy Policy</Text>
          </View>
        </View>
      </ScrollView>
    </View>
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
  pageviewStyle: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  appBarStyle: {
    width: "100%",
    alignItems: "flex-start",
    position: "relative",
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  headingStyle: {
    fontSize: 24,
    fontWeight: "700",
  },

  textBoxStyle: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 20,
    paddingLeft: 15,
    backgroundColor: "#eee",
    padding: 10,
  },

  countryBoxStyle: {
    height: 47,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 20,
    paddingLeft: 15,
    backgroundColor: "#eee",
    padding: 10,
  },

  textContainerStyle: {
    marginTop: 20,
  },
  policyTextStyle: {
    flexDirection: "row",
    alignItems: "center",
  },

  termsStyle: {
    fontSize: 14,
    color: colorPlate.chocoColor,
    fontWeight: "bold",
  },
});

export default RegisterForm;

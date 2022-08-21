import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function MedicationTile({ navigation, route }) {
  const getImage = () => {
    if (route.params.count == 1) {
      return require("../../assets/cosmetics.png");
    } else if (route.params.count == 2) {
      return require("../../assets/medicine.png");
    } else {
      return require("../../assets/uvLight.png");
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

          <Text
            style={{
              fontSize: 18,
              marginLeft: 20,
              fontWeight: "700",
              color: "white",
            }}
          >
            {route ? route.params.title : null}
          </Text>
        </View>
      </View>

      {/* Body Items */}
      <ScrollView style={styles.scrollViewStyle}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AddProducts", {
              route: route.params.routeName,
            })
          }
        >
          <Image
            source={require("../../assets/add.png")}
            style={{
              width: 40,
              height: 40,
              resizeMode: "cover",
              tintColor: "green",
              alignSelf: "center",
            }}
          />
        </TouchableOpacity>

        <Image
          source={getImage()}
          style={{
            width: 80,
            height: 80,
            resizeMode: "cover",
            alignSelf: "center",
            marginTop: 60,
            marginBottom: 20,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: "green",
            marginBottom: 20,
          }}
        >
          List down all the oral medication and dietary supplements that you use
          to treat psoriasis.
        </Text>
        <Text style={{ fontSize: 19, fontWeight: "700", marginBottom: 20 }}>
          Add products by clicking the + button.
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "500" }}>
          During daily log, you will check adherence to this routine.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  appbarContainer: {
    width: "100%",
    alignItems: "flex-start",
    backgroundColor: "green",
  },
  appbarFlexBox: {
    flexDirection: "row",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  scrollViewStyle: {
    width: "100%",
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: "#eee",
  },
});

export default MedicationTile;

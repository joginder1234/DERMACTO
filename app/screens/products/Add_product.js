import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { FlatGrid } from "react-native-super-grid";
import Icon from "react-native-vector-icons/FontAwesome";
import FlatButton from "../custom_classes/FlatButton";
import { BottomSheet } from "react-native-btr";
import ProductSortBottomSheet from "./ProductFilters/ProductSortBottomSheet";
import CategoryBottomSheet from "./ProductFilters/CategoryBottomSheet";

function AddProduct({ navigation, route }) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setIsVisible(!isVisible);
  };

  const [catBottomsheet, SetCatBottomSheet] = useState(false);
  const togglecatBottomSheet = () => {
    //Toggling the visibility state of the bottom sheet
    SetCatBottomSheet(!catBottomsheet);
  };

  const [items, setitems] = useState([
    {
      Brandname: "CLEAN & CLEAR",
      ProductName: "Lemon Zesty Scrub",
      ProductImage: require("../../assets/cream.png"),
    },
    {
      Brandname: "CLEAN & CLEAR",
      ProductName: "Lemon Zesty Scrub",
      ProductImage: require("../../assets/cream.png"),
    },
    {
      Brandname: "CLEAN & CLEAR",
      ProductName: "Lemon Zesty Scrub",
      ProductImage: require("../../assets/cream.png"),
    },
    {
      Brandname: "CLEAN & CLEAR",
      ProductName: "Lemon Zesty Scrub",
      ProductImage: require("../../assets/cream.png"),
    },
    {
      Brandname: "CLEAN & CLEAR",
      ProductName: "Lemon Zesty Scrub",
      ProductImage: require("../../assets/cream.png"),
    },
    {
      Brandname: "CLEAN & CLEAR",
      ProductName: "Lemon Zesty Scrub",
      ProductImage: require("../../assets/cream.png"),
    },
    {
      Brandname: "CLEAN & CLEAR",
      ProductName: "Lemon Zesty Scrub",
      ProductImage: require("../../assets/cream.png"),
    },
    {
      Brandname: "CLEAN & CLEAR",
      ProductName: "Lemon Zesty Scrub",
      ProductImage: require("../../assets/cream.png"),
    },
  ]);

  const renderItems = () => <View>Hello everyone</View>;

  const renderHeadings = () => <View></View>;
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="green" />

      {/*  Sort Items Bottom Sheet View*/}
      <BottomSheet
        visible={isVisible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <ProductSortBottomSheet />
      </BottomSheet>

      {/* Category Items Bottom Sheet view */}
      <BottomSheet
        visible={isVisible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <CategoryBottomSheet />
      </BottomSheet>

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
            Add Product
          </Text>
        </View>
      </View>
      {/* Body Items */}

      <View style={{ padding: 8, flex: 1 }}>
        {/* Search bar */}
        <TextInput
          placeholder="Search products by product name or brand..."
          style={styles.textinput}
        />
        {/* Buttons */}
        <View style={{ width: "100%", flexDirection: "row" }}>
          {/* Button Sort */}
          <TouchableOpacity onPress={toggleBottomNavigationView}>
            <View style={styles.button}>
              <Text>Sort : Newest First</Text>
            </View>
          </TouchableOpacity>

          {/* Button Category */}
          <TouchableOpacity onPress={togglecatBottomSheet}>
            <View style={styles.button}>
              <Text>Category</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Grid View */}
        <FlatGrid
          style={{ flex: 1 }}
          itemDimension={130}
          data={items}
          spacing={10}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer, { backgroundColor: "white" }]}>
              <Image
                source={item.ProductImage}
                style={{
                  width: "60%",
                  height: 80,
                  resizeMode: "contain",
                }}
              />
              <Text>{item.Brandname}</Text>
              <Text style={{ fontSize: 15, fontWeight: "600" }}>
                {item.ProductName}
              </Text>
            </View>
          )}
        />

        <FlatButton
          callBack={() =>
            navigation.navigate("AddProductView", { route: route.params.route })
          }
          btnName={"Add Your Product Manually"}
        />
      </View>
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
    backgroundColor: "green",
  },
  appbarFlexBox: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  textinput: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "black",
  },
  button: {
    height: 40,
    borderRadius: 20,
    borderWidth: 0.5,
    marginVertical: 8,
    marginRight: 10,
    padding: 10,
    backgroundColor: "white",
    borderColor: "black",
    alignItems: "center",
  },

  itemContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 20,
    aspectRatio: 1,
    padding: 10,
  },
});

export default AddProduct;

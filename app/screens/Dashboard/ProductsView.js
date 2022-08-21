import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import colors from "../../config/colors";
import { FlatGrid } from "react-native-super-grid";

function ProductsView(props) {
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
  return (
    <View style={styles.screenViewStyle}>
      <View style={styles.appbarStyle}>
        <View style={styles.appbarTitleContainerStyle}>
          <Text style={styles.appbarTitleStyle}>Dermacto Products</Text>
        </View>
      </View>

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
    </View>
  );
}

const styles = StyleSheet.create({
  screenViewStyle: {
    width: "100%",
    height: "100%",
  },
  appbarStyle: {
    paddingVertical: 10,
    flexDirection: "row",
    width: "100%",
    paddingVertical: 10,
    backgroundColor: colors.primaryColor,
    position: "relative",
  },
  appLeadingStyle: {
    borderRadius: 100,
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  appbarTitleContainerStyle: {
    flexDirection: "row",
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  appbarTitleStyle: { fontSize: 18, fontWeight: "700", color: "white" },

  itemContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 20,
    aspectRatio: 1,
    padding: 10,
  },
});

export default ProductsView;

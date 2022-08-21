import React from "react";
import { BottomNavigation } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashBoardview from "../Dashboard/DashBoardview";
import ToolsView from "../Dashboard/ToolsView";
import ProductsView from "../Dashboard/ProductsView";
import InsightView from "../Dashboard/InsightView";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../config/colors";
import Analytics from "../insights/analytics";

const Tab = createBottomTabNavigator();

function BottomNavigationView(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.primaryColor,
        tabBarInactiveTintColor: "#CFD2CF",
      }}
      safeAreaInsets={{ bottom: 15 }}
    >
      <Tab.Screen
        name="Home"
        component={DashBoardview}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarLabelStyle: { fontSize: 15 },

          tabBarIcon: () => {
            <Icon name="home" />;
          },
        }}
      />
      <Tab.Screen
        name="Tools"
        component={ToolsView}
        options={{
          headerShown: false,
          tabBarLabel: "Tools",
          tabBarLabelStyle: { fontSize: 15 },
          tabBarIcon: ({ color, size }) => {
            <Icon name="tools" size={size} color={color}></Icon>;
          },
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsView}
        options={{
          headerShown: false,
          tabBarLabel: "Products",
          tabBarIcon: ({ color, size }) => {
            <Icon name="medical-bag" size={size} color={color}></Icon>;
          },
          tabBarLabelStyle: { fontSize: 15 },
        }}
      />
      <Tab.Screen
        name="Insights"
        component={Analytics}
        options={{
          headerShown: false,
          tabBarLabel: "Insights",
          tabBarIcon: ({ color, size }) => {
            <Icon name="chart-bar" size={size} color={color}></Icon>;
          },
          tabBarLabelStyle: { fontSize: 15 },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigationView;

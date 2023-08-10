import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
      <Text style={[styles.welcomeDashboard, styles.textTypo]}>
        <Text style={styles.welcome}>{`Welcome,
`}</Text>
        <Text style={styles.dashboard1}>Dashboard</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.gilroy,
    fontWeight: "600",
  },
  iconwifiLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: "center",
  },
  iconbattery: {
    marginLeft: 12,
  },
  iconwifiParent: {
    flexDirection: "row",
  },
  header: {
    top: 0,
    left: 0,
    width: 390,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.white,
  },
  welcome: {
    fontSize: 18,
    color: Color.plum,
  },
  dashboard1: {
    fontSize: 24,
    color: Color.textPrimary,
  },
  welcomeDashboard: {
    top: 77,
    left: 24,
    textAlign: "left",
    position: "absolute",
  },
  dashboard: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Dashboard;

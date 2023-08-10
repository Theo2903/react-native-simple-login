import { StyleSheet } from "react-native";
import {
  FontSize,
  Color,
  FontFamily,
  Padding,
  Border,
} from "../../GlobalStyles";

const s = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  containerCheckbox: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "gray",
    marginRight: 10,
  },
  checkedBox: {
    backgroundColor: "blue",
    borderColor: "blue",
  },
  label: {
    fontSize: 16,
    color: Color.textPlaceholder,
    fontFamily: FontFamily.gilroy,
    marginLeft: 4,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    color: Color.textPlaceholder,
    textAlign: "left",
  },
  checkbox: {
    borderColor: "#667085",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    height: 16,
    width: 16,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export { s };

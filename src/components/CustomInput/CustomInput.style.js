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
    alignSelf: "stretch",
    borderColor: "#a2a2a6",
    height: 43,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    marginTop: 6,
    borderWidth: 1,
    alignItems: "center",
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.white,
    alignItems: "center",
    flexDirection: "row",
  },
  image: { height: 16, width: 16, overflow: "hidden" },
  customInput: {
    fontFamily: FontFamily.gilroy,
    fontSize: FontSize.size_xs,
    color: Color.textPlaceholder,
    marginLeft: 10,
    fontWeight: "500",
    textAlign: "left",
    flex: 1,
  },
});

export { s };

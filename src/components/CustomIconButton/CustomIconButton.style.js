import { StyleSheet } from "react-native";

import {
  FontSize,
  Color,
  FontFamily,
  Padding,
  Border,
} from "../../GlobalStyles";

const s = StyleSheet.create({
  iconButtonContainer: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_lg,
    borderColor: "#ebe9f1",
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
  },
  icon: {
    width: 36,
    height: 36,
    overflow: "hidden",
  },
});

export { s };

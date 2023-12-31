import { StyleSheet } from "react-native";
import {
  FontSize,
  Color,
  FontFamily,
  Padding,
  Border,
} from "../../GlobalStyles";

const s = StyleSheet.create({
  label2: {
    color: Color.textPlaceholder,
  },
  label3: {
    marginLeft: 4,
    color: Color.blue,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  frameLayout: {
    overflow: "hidden",
    flex: 1,
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
  },
  title: {
    top: 110,
    fontSize: FontSize.size_9xl,
    color: Color.textPrimary,
    left: 24,
    textAlign: "center",
    fontFamily: FontFamily.gilroy,
    fontWeight: "600",
    position: "absolute",
  },
  header: {
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.gilroy,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  containerTextField: {
    marginTop: 18,
    width: "100%",
  },
  checkbox: {
    borderColor: "#667085",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  forgotPassword: {
    marginLeft: 139,
  },
  frameGroup: {
    marginTop: 17,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  frameParent: {
    top: 180,
    alignItems: "flex-end",
    left: 24,
    position: "absolute",
  },
  footerContainer: {
    top: 789,
    left: 107,
    flexDirection: "row",
    position: "absolute",
  },
  buttonLabel: {
    color: Color.white,
    fontFamily: FontFamily.gilroy,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    flex: 1,
  },
  button: {
    top: 427,
    backgroundColor: Color.plum,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_smi,
    justifyContent: "center",
    borderRadius: Border.br_7xs,
    alignItems: "center",
    width: "88%",
    left: 24,
    flexDirection: "row",
    position: "absolute",
  },
  orContinueWith: {
    marginLeft: 12,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    color: Color.textPlaceholder,
  },
  vectorContainer: {
    alignItems: "center",
    flexDirection: "row",
    top: 530,
    left: 38,
    width: 315,
    position: "absolute",
  },
  signupContainer: {
    paddingHorizontal: 15,
    top: 567,
    left: 63,
    flexDirection: "row",
  },
  login: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export { s };

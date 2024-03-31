import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingHorizontal: "5%",
    paddingTop: height * 0.2,
  },
  formContainer: {
    marginTop: height * 0.04,
  },
  loginTitle: {
    color: Colors.dark.text,
    fontSize: 28,
    fontFamily: "Basement-Grotesque",
  },
  loginSubtitle: {
    color: Colors.dark.text,
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
  },
  buttonForm: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.pallete.primary,
    padding: 12,
    borderRadius: 14,
    marginVertical: 10,
  },
  buttonFormText: {
    color: Colors.light.text,
    fontSize: 18,
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
  },
  forgetText: {
    color: Colors.pallete.primary,
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
    textAlign: "center",
    marginTop: 20,
  },
});

export default styles;

import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingHorizontal: "5%",
    paddingTop: height * 0.1,
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
    fontFamily: "Montserrat-SemiBold",
    textAlign: "center",
    marginTop: 10,
  },
  dividerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "10%",
  },
  divider: {
    height: 1,
    width: "40%",
    backgroundColor: Colors.pallete.lightGray,
  },
  dividerText: {
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    color: Colors.pallete.lightGray,
    marginHorizontal: 20,
  },
  beeBoxContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "15%",
  },
  beeBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.pallete.secondary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    borderWidth: 1,
    borderColor: "#3F3F45",
  },
  beeImg: {
    width: 25,
    height: 25,
  },
});

export default styles;

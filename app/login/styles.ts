import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingHorizontal: "2.5%",
    paddingVertical: "10%",
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
});

export default styles;

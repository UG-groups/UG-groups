import {
  View,
  Text,
  Pressable,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
//* Styling
import Colors from "../../constants/Colors";

const { width } = Dimensions.get("window");

const DATA = [
  {
    id: "0",
    title: "Ajedrez UG",
    img: require("../../assets/images/chess.jpg"),
  },
  {
    id: "1",
    title: "DCEA UG",
    img: require("../../assets/images/model_4.png"),
  },
  {
    id: "2",
    title: "Developers UG",
    img: require("../../assets/images/model_3.png"),
  },
  {
    id: "3",
    title: "Cineclub UG",
    img: require("../../assets/images/model_2.png"),
  },
  {
    id: "4",
    title: "El Algoritmo",
    img: require("../../assets/images/model_1.png"),
  },
];

export default function GroupBox() {
  return (
    <Pressable style={styles.container} onPress={() => console.log("Group")}>
      <View style={styles.content}>
        <FlatList
          data={DATA}
          horizontal
          renderItem={({ item }) => (
            <Box key={item.id} img={item.img} title={item.title} />
          )}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>
    </Pressable>
  );
}

function Box({ img, title }: { img: any; title: string }) {
  return (
    <View style={styles.boxContainer}>
      <Image style={styles.imgGroup} source={img} />
      <Text style={[styles.textLine, { color: "#fff", fontSize: 9 }]}>
        {title.length > 10 ? `${title.slice(0, 10)}...` : title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    borderRadius: 18,
    backgroundColor: Colors.pallete.secondary,
  },
  content: {
    height: 90,
    width: width * 0.9,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imgGroup: {
    width: 42,
    height: 42,
    borderRadius: 50,
    borderColor: "#3F3F45",
    borderWidth: 2,
  },
  textLine: {
    fontSize: 10,
    fontFamily: "Montserrat-Medium",
    textAlign: "center",
    marginTop: 10,
    color: Colors.pallete.primary,
  },
});

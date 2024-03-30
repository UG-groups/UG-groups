import {
  View,
  Text,
  Pressable,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
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

export default function GroupBox({ isAdmin }: { isAdmin: boolean }) {
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
        {isAdmin ? <CrateGroupCircle /> : <AllGroupsCircle />}
      </View>
    </Pressable>
  );
}

function Box({ img, title }: { img: any; title: string }) {
  return (
    <View style={styles.boxContainer}>
      <Image style={styles.imgGroup} source={img} />
      <Text style={[styles.textLine, { color: "#fff", fontSize: 9 }]}>
        {title.length > 10 ? `${title.slice(0, 10)}..` : title}
      </Text>
    </View>
  );
}

function AllGroupsCircle() {
  return (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <View style={styles.allGroups}>
        <Feather name="arrow-right" size={24} color="#fff" />
      </View>
      <Text style={[styles.textLine, { color: "#fff", fontSize: 9 }]}>
        Ver todos
      </Text>
    </View>
  );
}

function CrateGroupCircle() {
  return (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <View style={styles.allGroups}>
        <Feather name="plus" size={24} color="#fff" />
      </View>
      <Text style={[styles.textLine, { color: "#fff", fontSize: 9 }]}>
        Crear otro
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
    width: width * 0.95,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  imgGroup: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderColor: "#3F3F45",
    borderWidth: 1,
  },
  textLine: {
    fontSize: 10,
    fontFamily: "Montserrat-Medium",
    textAlign: "center",
    marginTop: 10,
    color: Colors.pallete.primary,
  },
  allGroups: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
});

import {
  Pressable,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Text, View, SafeAreaView, ScrollView } from "../../components/Themed";
import { FlashList } from "@shopify/flash-list";
import { useRouter } from "expo-router";
//* UI comps.
import BackButton from "../../components/atoms/BackButton";
import SearchBar from "../../components/molecules/SearchBar";

const { height, width } = Dimensions.get("window");

const items = [
  {
    id: 0,
    title: "Cine y Cultura",
    image: require("../../assets/images/model_2.png"),
    route: "/group/1",
  },
  {
    id: 1,
    title: "Club de Ajedrez UG",
    image: require("../../assets/images/chess.jpg"),
    route: "/group/2",
  },
  {
    id: 2,
    title: "Novedades DCEA",
    image: require("../../assets/images/model_4.png"),
    route: "/group/3",
  },
  {
    id: 3,
    title: "Programación",
    image: require("../../assets/images/model_3.png"),
    route: "/group/4",
  },
  {
    id: 4,
    title: "Cultura japonesa",
    image: { uri: "https://picsum.photos/id/195/200/300" },
    route: "/group/5",
  },
  {
    id: 5,
    title: "Novedades DCNE",
    image: { uri: "https://picsum.photos/id/24/200/300" },
    route: "/group/6",
  },
  {
    id: 6,
    title: "Data Science Club",
    image: { uri: "https://picsum.photos/id/2/200/300" },
    route: "/group/7",
  },
  {
    id: 7,
    title: "Ingeniería y Diseño",
    image: { uri: "https://picsum.photos/id/171/200/300" },
    route: "/group/8",
  },
];

export default function Search() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <ScrollView style={styles.grid} showsVerticalScrollIndicator={false}>
        <Pressable
          style={styles.bannerContainer}
          onPress={() => router.push("/group/0")}
        >
          <Text style={styles.bannerTitle}>Título Destacado</Text>
          <Image
            style={styles.banner}
            source={require("../../assets/images/model_1.png")}
          />
        </Pressable>
        <View>
          <FlashList
            data={items}
            renderItem={({ item }) => (
              <ImageItem
                key={item.id}
                title={item.title}
                image={item.image}
                route={item.route}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            estimatedItemSize={20}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ImageItem({
  title,
  image,
  route,
}: {
  title: string;
  image: ImageSourcePropType;
  route: string;
}) {
  const router = useRouter();

  return (
    <Pressable style={styles.imageContainer} onPress={() => router.push(route)}>
      <Text style={styles.cardText}>{title}</Text>
      <Image source={image} style={styles.image} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
  },
  grid: {
    width: "90%",
    height: height,
    marginHorizontal: "5%",
  },
  bannerContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    width: "100%",
    height: 205,
    marginTop: 5,
    resizeMode: "cover",
    borderRadius: 18,
    opacity: 0.9,
  },
  bannerTitle: {
    position: "absolute",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    fontFamily: "Basement-Grotesque",
  },
  imageContainer: {
    margin: 5,
  },
  cardText: {
    position: "absolute",
    zIndex: 1,
    width: "85%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    fontFamily: "Basement-Grotesque",
  },
  image: {
    width: width * 0.425,
    height: 205,
    marginTop: 5,
    resizeMode: "cover",
    borderRadius: 18,
    opacity: 0.9,
  },
});

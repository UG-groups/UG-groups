import { Pressable, Image, StyleSheet, Dimensions } from "react-native";
import { Text, View, SafeAreaView, ScrollView } from "../../components/Themed";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
//* UI comps.
import Post from "../../components/molecules/Post";

const { height } = Dimensions.get("window");

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ paddingTop: 30, paddingBottom: 65 }}>
          <ProfileInfo />
          <Posts />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Header() {
  return (
    <View style={styles.headerContainer}>
      <Pressable>
        <MaterialCommunityIcons name="account-edit" size={26} color="#fff" />
      </Pressable>
      <Text style={styles.headerTitle}>Perfil</Text>
      <Pressable>
        <Entypo name="dots-three-horizontal" size={24} color="#fff" />
      </Pressable>
    </View>
  );
}

function ProfileInfo() {
  return (
    <>
      <Image
        style={styles.profileBackground}
        source={require("../../assets/images/background_pattern.jpeg")}
      />
      <View style={styles.profileContent}>
        <Image
          style={styles.avatar}
          source={require("../../assets/images/cassy.jpeg")}
        />
        <View>
          <Text style={styles.userName}>Casandra Cruz</Text>
          <Text style={styles.nickName}>c.cruz@ugto.mx</Text>
        </View>
        <View style={{ marginVertical: 10, width: "80%" }}>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
        <View>
          <Text style={styles.degree}>Lic. Letras Españolas</Text>
          <Text style={styles.division}>DCSH</Text>
        </View>
      </View>
    </>
  );
}

function Posts() {
  return (
    <View style={styles.posts}>
      <Text style={styles.categoryTitle}>Publicaciones</Text>
      <View>
        <Post
          avatar={"0"}
          name={"Omar Purata"}
          studyField={"omar.purata@ugto.mx"}
        />
        <Post
          avatar={"0"}
          name={"Omar Purata"}
          studyField={"omar.purata@ugto.mx"}
        />
        <Post
          avatar={"0"}
          name={"Omar Purata"}
          studyField={"omar.purata@ugto.mx"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerContainer: {
    paddingVertical: 10,
    paddingHorizontal: "2.5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 15,
    fontFamily: "Basement-Grotesque",
  },
  profileBackground: {
    width: "100%",
    height: height / 7,
    opacity: 0.85,
  },
  profileContent: {
    height: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#000",
    marginVertical: 10,
  },
  userName: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Basement-Grotesque",
  },
  nickName: {
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
    color: "#ddd",
  },
  degree: {
    fontSize: 12,
    textAlign: "center",
    color: "rgba(255,255,255,0.6)",
    fontFamily: "Montserrat-SemiBold",
  },
  division: {
    fontSize: 12,
    textAlign: "center",
    color: "rgba(255,255,255,0.6)",
    fontFamily: "Montserrat-SemiBold",
  },
  categoryTitle: {
    fontFamily: "Basement-Grotesque",
    marginVertical: 10,
  },
  posts: {
    marginTop: 60,
    marginBottom: 15,
    paddingHorizontal: "2.5%",
  },
});

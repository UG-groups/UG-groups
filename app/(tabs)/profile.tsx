import { Pressable, Image, StyleSheet, Dimensions } from "react-native";
import { Text, View, SafeAreaView, ScrollView } from "../../components/Themed";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
//* UI comps.
import GroupBox from "../../components/atoms/GroupBox";
import Post from "../../components/molecules/Post";

const { height } = Dimensions.get("window");

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <View style={{ paddingTop: 30, paddingBottom: 65 }}>
          <ProfileInfo />
          <Categories />
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
          source={require("../../assets/images/fer.jpeg")}
        />
        <View>
          <Text style={styles.userName}>Fernando Contreras</Text>
          <Text style={styles.nickName}>corahama@ugto.mx</Text>
        </View>
        <View style={{ marginVertical: 10, width: "80%" }}>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
            enim cursus, vulputate nibh nec, fringilla risus.
          </Text>
        </View>
        <View>
          <Text style={styles.degree}>Lic. Sistemas de Información</Text>
          <Text style={styles.division}>DCEA</Text>
        </View>
      </View>
    </>
  );
}

function Categories() {
  return (
    <View style={styles.categories}>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.categoryTitle}>Grupos que sigues</Text>
        <GroupBox isAdmin={false} />
      </View>
      <View style={{ flexDirection: "column", marginTop: 15 }}>
        <Text style={styles.categoryTitle}>Grupos que administras</Text>
        <GroupBox isAdmin />
      </View>
    </View>
  );
}

function Posts() {
  return (
    <View style={styles.posts}>
      <Text style={styles.categoryTitle}>Publicaciones</Text>
      <View>
        <Post
          avatar={"0"}
          name={"Fernando Contreras"}
          studyField={"Sistemas de Información Administrativa"}
        />
        <Post
          avatar={"0"}
          name={"Fernando Contreras"}
          studyField={"Sistemas de Información Administrativa"}
        />
        <Post
          avatar={"0"}
          name={"Fernando Contreras"}
          studyField={"Sistemas de Información Administrativa"}
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
  categories: {
    marginTop: 85,
    marginHorizontal: "2.5%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  categoryTitle: {
    fontFamily: "Basement-Grotesque",
    marginTop: 5,
    marginBottom: 15,
  },
  posts: {
    marginVertical: 15,
    paddingHorizontal: "2.5%",
  },
});

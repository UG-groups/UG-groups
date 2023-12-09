import { Pressable, Image, StyleSheet } from "react-native";
import { Text, View, SafeAreaView, ScrollView } from "../../components/Themed";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
//* UI comps.
import GroupBox from "../../components/atoms/GroupBox";
import Post from "../../components/molecules/Post";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 65 }}>
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
    <View style={styles.profileContent}>
      <Image
        style={styles.avatar}
        source={require("../../assets/images/fer.jpeg")}
      />
      <View>
        <Text style={styles.userName}>Fernando Contreras</Text>
        <Text style={styles.nickName}>corahama</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.degree}>Lic. Sistemas de Información</Text>
        <Text style={styles.division}>DCEA</Text>
      </View>
    </View>
  );
}

function Categories() {
  return (
    <View style={styles.categories}>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.categoryTitle}>Grupos</Text>
        <GroupBox />
      </View>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.categoryTitle}>Siguiendo</Text>
        <GroupBox />
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
    paddingHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 15,
    fontFamily: "Basement-Grotesque",
  },
  profileContent: {
    height: 220,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
  userName: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Basement-Grotesque",
  },
  nickName: {
    fontSize: 11,
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
  },
  degree: {
    fontSize: 11,
    textAlign: "center",
    color: "rgba(255,255,255,0.6)",
    fontFamily: "Montserrat-SemiBold",
  },
  division: {
    fontSize: 11,
    textAlign: "center",
    color: "rgba(255,255,255,0.6)",
    fontFamily: "Montserrat-SemiBold",
  },
  categories: {
    marginVertical: 20,
    paddingHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryTitle: {
    fontFamily: "Basement-Grotesque",
    marginTop: 5,
    marginBottom: 15,
  },
  posts: {
    marginVertical: 10,
    paddingHorizontal: "5%",
  },
});

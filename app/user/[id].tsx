import React from "react";
import { Image, Pressable } from "react-native";
import { Text, View, ScrollView } from "../../components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView, MotiText } from "moti";
//* UI comps.
import BackButton from "../../components/atoms/BackButton";
import FollowButton from "../../components/atoms/FollowButton";
import Post from "../../components/molecules/Post";
//* Styling
import styles from "./styles";
import Colors from "../../constants/Colors";

export default function Profile() {
  return (
    <View style={styles.container}>
      <HeadContent />
      <View style={styles.body}>
        <FollowButton type="user" />
      </View>
      <ScrollView>
        <PostController />
        <View style={styles.postList}>
          <Post avatar="1" name={"Emilia Carranza"} studyField={"Economía"} />
          <Post
            avatar="0"
            name={"Fernando Contreras"}
            studyField={"Economía"}
          />
          <Post avatar="1" name={"Emilia Carranza"} studyField={"Economía"} />
          <Post avatar="1" name={"Emilia Carranza"} studyField={"Economía"} />
        </View>
      </ScrollView>
    </View>
  );
}

function HeadContent() {
  return (
    <View style={styles.header}>
      <View style={styles.btnContainer}>
        <BackButton />
      </View>
      <Image
        style={styles.profileImage}
        source={require("../../assets/images/cassy.jpeg")}
      />
      <View style={styles.headerContent}>
        <View style={styles.gradient}>
          <View
            style={{
              width: "80%",
              backgroundColor: "transparent",
              transform: [{ translateY: -40 }],
            }}
          >
            <Text style={styles.groupName}>Casandra Cruz</Text>
            <Text style={styles.career}>Lic. Letras Españolas</Text>
          </View>
          <View
            style={{
              backgroundColor: "transparent",
              transform: [{ translateY: -20 }],
            }}
          >
            <Text style={styles.groupDescription}>
              Il faut cultiver ton jardin.
            </Text>
          </View>
          <LinearGradient
            start={{ x: 0, y: 0.5 }}
            end={{ x: 0, y: 0.5 }}
            colors={["rgba(0,0,0,0.3)", "#000"]}
            style={{ height: 30 }}
          />
        </View>
      </View>
    </View>
  );
}

function PostController() {
  const [active, setActive] = React.useState("recents");

  const handleActive = (option: string) => {
    setActive(option);
  };

  return (
    <View style={styles.findControls}>
      <Pressable
        style={styles.optionContainer}
        onPress={() => handleActive("recents")}
      >
        <MotiText
          style={[
            styles.optionText,
            { color: active === "recents" ? "#fff" : Colors.pallete.inactive },
          ]}
        >
          Recientes
        </MotiText>
        {active === "recents" && <DotSelector selector={active} />}
      </Pressable>
      <Pressable
        style={styles.optionContainer}
        onPress={() => handleActive("posts")}
      >
        <MotiText
          style={[
            styles.optionText,
            { color: active === "posts" ? "#fff" : Colors.pallete.inactive },
          ]}
        >
          Publicaciones
        </MotiText>
        {active === "posts" && <DotSelector selector={active} />}
      </Pressable>
    </View>
  );
}

function DotSelector({ selector }: { selector: string }) {
  return (
    <MotiView
      style={styles.dot}
      from={{ transform: [{ translateX: selector === "recents" ? 90 : -90 }] }}
      animate={{ transform: [{ translateX: 0 }] }}
      transition={{ type: "spring" }}
    ></MotiView>
  );
}

import React from "react";
import { Image, Pressable } from "react-native";
import { Text, View, ScrollView } from "../../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView, MotiText } from "moti";
//* UI comps.
import BackButton from "../../components/atoms/BackButton";
import FollowButton from "../../components/atoms/FollowButton";
import Post from "../../components/molecules/Post";
//* Styling
import styles from "./styles";
import Colors from "../../constants/Colors";

export default function Group() {
  return (
    <View style={styles.container}>
      <HeadContent />
      <View style={styles.body}>
        <FollowButton type="group" />
      </View>
      <ScrollView>
        <PostController />
        <View style={styles.postList}>
          <Post
            avatar="0"
            name={"Luis Contreras"}
            studyField={"Sistemas de Información"}
          />
          <Post name={"Laura Carranza"} studyField={"Comercio Internacional"} />
          <Post name={"Emilia Carranza"} studyField={"Economía"} />
          <Post name={"Emilia Carranza"} studyField={"Economía"} />
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
        source={require("../../assets/images/chess.jpg")}
      />
      <View style={styles.headerContent}>
        <View style={styles.gradient}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: "55%",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "transparent",
                transform: [{ translateY: -50 }],
              }}
            >
              <Text style={styles.groupName}>Club de Ajedrez UG</Text>
            </View>
            <View
              style={{
                width: "45%",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "transparent",
                transform: [{ translateY: -40 }],
              }}
            >
              <View
                style={{ flexDirection: "row", backgroundColor: "transparent" }}
              >
                <Image
                  style={[styles.avatar, { transform: [{ translateX: 10 }] }]}
                  source={require("../../assets/images/fer.jpeg")}
                />
                <Image
                  style={[styles.avatar, { transform: [{ translateX: 0 }] }]}
                  source={require("../../assets/images/purata.jpeg")}
                />
                <Image
                  style={[styles.avatar, { transform: [{ translateX: -10 }] }]}
                  source={require("../../assets/images/jane.png")}
                />
                <Image
                  style={[styles.avatar, { transform: [{ translateX: -20 }] }]}
                  source={require("../../assets/images/cassy.jpeg")}
                />
                <Image
                  style={[styles.avatar, { transform: [{ translateX: -30 }] }]}
                  source={require("../../assets/images/queens_gambit.png")}
                />
              </View>
              <Text style={styles.members}>+ 100 miembros</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "transparent",
              transform: [{ translateY: -30 }],
            }}
          >
            <Text style={styles.groupDescription}>
              Grupo oficial de ajedrecistas para todos los campus
            </Text>
            <View style={styles.linkSection}>
              <Ionicons name="link" size={16} color={Colors.dark.text} />
              <Text style={styles.link}>ajedrez.ugto.mx/signin</Text>
            </View>
          </View>
          <LinearGradient
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
          Novedades
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

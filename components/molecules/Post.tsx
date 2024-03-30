import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
//* UI comps.
import VoteButton from "../atoms/VoteButton";
//* Styling
import Colors from "../../constants/Colors";

interface IUser {
  name: string;
  studyField: string;
  avatar?: string;
}

export default function Post({ avatar, name, studyField }: IUser) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "4%",
          }}
        >
          <Pressable
            style={styles.userSection}
            onPress={() => router.push("/user/1")}
          >
            <Image
              style={styles.userImage}
              source={
                avatar === "0"
                  ? require("../../assets/images/cassy.jpeg")
                  : require("../../assets/images/jane.png")
              }
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.studyField}>{studyField}</Text>
            </View>
          </Pressable>
          <Pressable
            style={[styles.badgeContainer, { backgroundColor: "#FF7E36" }]}
            onPress={() => router.push("/group/1")}
          >
            <Text style={styles.badgeText}>Campus DCEA</Text>
          </Pressable>
        </View>
        <View style={styles.postTextContainer}>
          <Text style={styles.postText}>
            Los invito a participar en el grupo de estudio de Economía Política.
            no se preocupen si son nuevos en el tema, el grupo está abierto a
            todos.
          </Text>
        </View>
        <View style={styles.postControls}>
          <View style={styles.voteControls}>
            <Pressable
              style={styles.upvote}
              onPress={() => {
                console.log("upvote");
              }}
            >
              <VoteButton iconName="up-arrow" />
              <Text style={styles.upvoteCounter}>24</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                console.log("downvote");
              }}
            >
              <VoteButton iconName="down-arrow" />
            </Pressable>
          </View>
          <Pressable style={styles.comment}>
            <VoteButton iconName="comment" />
          </Pressable>
          <View>
            <Text style={styles.tag}>#Tags #Tags</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 18,
    marginVertical: 7,
    backgroundColor: Colors.pallete.secondary,
  },
  content: {
    paddingVertical: 15,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  userSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  userImage: {
    width: 36,
    height: 36,
    borderRadius: 50,
  },
  userInfo: {
    flexDirection: "column",
    marginLeft: 5,
  },
  userName: {
    fontFamily: "Montserrat-SemiBold",
    color: Colors.dark.text,
  },
  studyField: {
    fontSize: 12,
    color: Colors.pallete.lightGray,
  },
  badgeContainer: {
    height: 25,
    paddingHorizontal: 9,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  badgeText: {
    fontFamily: "Montserrat-Medium",
    textAlign: "center",
    fontSize: 9,
    color: "#fff",
  },
  postTextContainer: {
    paddingHorizontal: "5%",
    paddingVertical: 15,
  },
  postControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "5%",
    paddingVertical: 5,
  },
  voteControls: {
    flexDirection: "row",
  },
  postText: {
    fontSize: 14,
    color: Colors.dark.text,
    fontFamily: "Montserrat-Regular",
  },
  upvote: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  comment: {
    flexDirection: "row",
    minWidth: "33.33%",
    justifyContent: "center",
  },
  upvoteCounter: {
    color: Colors.dark.text,
    fontSize: 11,
    fontFamily: "Montserrat-Medium",
  },
  tag: {
    fontSize: 11,
    fontFamily: "Montserrat-Medium",
    color: Colors.pallete.primary,
  },
});

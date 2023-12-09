import { StyleSheet, Dimensions, Share } from "react-native";
import { View, ScrollView, SafeAreaView } from "../../components/Themed";
import Animated from "react-native-reanimated";
import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from "react-native-shared-element";
//* UI comps.
import Header from "../../components/molecules/Header";
import Post from "../../components/molecules/Post";
import ImagePost from "../../components/molecules/ImagePost";

const screenHeight = Dimensions.get("window").height;

export default function TabOneScreen() {
  let startAncestor;
  let startNode;
  const position = new Animated.Value(0);

  return (
    <SafeAreaView>
      <Header />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Post name={"Casandra Cruz"} studyField={"Letras Españolas"} />
          <View ref={(ref) => (startAncestor = nodeFromRef(ref))}>
            <SharedElement onNode={(node) => (startNode = node)}>
              <ImagePost image={"https://picsum.photos/id/74/200/300"} />
            </SharedElement>
          </View>
          <Post avatar={"0"} name={"Omar Purata"} studyField={"Economía"} />
          <Post name={"Emilia Carranza"} studyField={"Lic. en Economía"} />
          <ImagePost image={"https://picsum.photos/id/64/200/300"} />
          <Post name={"Emilia Carranza"} studyField={"Lic. en Economía"} />
          <ImagePost image={"https://picsum.photos/id/1/200/300"} />
          <Post name={"Emilia Carranza"} studyField={"Lic. en Economía"} />
          <Post name={"Emilia Carranza"} studyField={"Lic. en Economía"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 20,
  },
  content: {
    paddingBottom: "38%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

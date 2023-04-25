import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
//* Colors
import Colors from "../../constants/Colors";

export default function Group() {
    return(
        <View style={styles.container}>
            <Text>Group</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    }
})
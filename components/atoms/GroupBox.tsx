import { View, Text, Pressable, StyleSheet } from "react-native";
//* Styling
import Colors from "../../constants/Colors";

export default function GroupBox() {
    return(
        <Pressable style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.textLine}>Ver todos(12)</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 75,
        borderRadius: 14,
        backgroundColor: Colors.pallete.secondary,
    },
    content: {},
    textLine: {
        fontSize: 10,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        color: Colors.pallete.primary,
    }
});
import { View, Text, Pressable, FlatList, Image, StyleSheet } from "react-native";
//* Styling
import Colors from "../../constants/Colors";
import image from '../../assets/images/jane.png';

export default function GroupBox() {
    return(
        <Pressable style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.imgGroup} source={image} />
                <Text style={styles.textLine}>Ver todos (12)</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 155,
        height: 80,
        borderRadius: 14,
        backgroundColor: Colors.pallete.secondary,
    },
    content: {
        height: 80,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgGroup: {
        width: 32,
        height: 32,
        borderRadius: 50,
        borderColor: Colors.pallete.secondary,
        border: 1
    },
    textLine: {
        fontSize: 10,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        marginTop: 10,
        color: Colors.pallete.primary,
    }
});
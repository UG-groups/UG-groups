import { Image, StyleSheet } from "react-native";
import { Text, View } from "../Themed";
//* Styling
import Colors from "../../constants/Colors";

export default function CommentCard(){
    return(
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Image style={styles.userImage} source={require('../../assets/images/avatar.png')} />
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>Aura Betancour</Text>
                    <Text style={styles.studyField}>Relaciones Industriales</Text>
                </View>
            </View>
            <Text style={styles.comment}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas vel condimentum risus. 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderTopWidth: 0.5,
        borderTopColor: Colors.pallete.gray,
        paddingVertical: 15
    },
    userContainer: {
        flexDirection: 'row',
    },
    userImage: {
        width: 34,
        height: 34,
        borderRadius: 50,
    },
    userInfo: {
        flexDirection: 'column',
        marginLeft: 5,
    },
    userName: {
        fontSize: 13,
        fontFamily: 'Montserrat-SemiBold',
        color: Colors.dark.text,
    },
    studyField: {
        fontSize: 11,
        color: Colors.pallete.lightGray
    },
    comment: {
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        marginVertical: 10
    }
})
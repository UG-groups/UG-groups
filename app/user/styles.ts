import { StyleSheet, Platform } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        width: '90%',
        marginHorizontal: '5%',
        marginTop: 50
    },
    header: {
        width: '100%',
        height: 330,
        justifyContent: 'space-between',
    },
    profileImage: {
        width: '100%',
        height: 330,
        resizeMode: 'cover',
        opacity: 0.85,
    },
    btnContainer: {
        position: 'absolute',
        zIndex: 1,
        marginTop: Platform.OS === "ios" ? '12%' : '10%',
        marginLeft: '5%',
        backgroundColor: 'transparent',
    },
    headerContent: {
        width: '100%',
        position: 'absolute',
        zIndex: 1,
        transform: [{ translateY: 310 }],
    },
    gradient: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: -1,
            height: -30,
        },
        shadowOpacity: 0.9,
        shadowRadius: 18,
        elevation: 24,
    },
    groupName: {
        fontSize: 20,
        fontFamily: 'Basement-Grotesque',
        letterSpacing: 0.5,
        marginHorizontal: 15,
    },
    career: {
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        marginHorizontal: 15,
        marginTop: 2,
        color: Colors.pallete.lightGray,
    },
    groupDescription: {
        fontFamily: 'Montserrat-Medium',
        marginHorizontal: 15
    },
    linkSection: {
        flexDirection: "row", 
        marginHorizontal: 15,
        marginVertical: 7
    },
    link: {
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        marginLeft: 5,
        color: Colors.pallete.link
    }
})

export default styles;
import { StyleSheet, Platform } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        width: '90%',
        marginHorizontal: '5%',
        marginTop: 50,
        marginBottom: 20,
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
    },
    findControls: {
        width: '90%',
        height: 50,
        marginHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    optionContainer: {
        height: 40,
        flexDirection: 'column',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 12.5,
        fontWeight: 'bold',
        fontFamily: 'Basement-Grotesque',
        letterSpacing: 0.25,
        marginHorizontal: 15,
    },
    dot: {
        width: 7,
        height: 7,
        borderRadius: 50,
        position: 'absolute',
        marginTop: 22,
        backgroundColor: Colors.pallete.primary,
    },
    postList: {
        width: '90%',
        marginHorizontal: '5%',
        marginBottom: Platform.OS === "ios" ? 32 : 40
    }
})

export default styles;
import { Platform, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    hero: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        opacity: 0.9
    },
    btnContainer: {
        position: 'absolute',
        zIndex: 1,
        marginTop: Platform.OS === "ios" ? '12%' : '10%',
        marginLeft: '5%',
        backgroundColor: 'transparent',
    },
    userContainer: {
        flexDirection: 'row',
        marginLeft: '2.5%',
        marginTop: 20,
    },
    userImage: {
        width: 38,
        height: 38,
        borderRadius: 50,
    },
    userInfo: {
        flexDirection: 'column',
        marginLeft: 8,
    },
    userName: {
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold',
        color: Colors.dark.text,
    },
    studyField: {
        fontSize: 13,
        color: Colors.pallete.lightGray
    },
    postTextContainer: {
        paddingHorizontal: '2.5%',
        paddingVertical: 15,
    },
    postText: {
        color: Colors.dark.text,
        fontFamily: 'Montserrat-Medium',
    },
    commentsText: {
        textAlign: 'center',
        fontFamily: 'Basement-Grotesque',
        marginVertical: 10
    },
    comments: {
        marginHorizontal: '2.5%',
        marginTop: 15,
        marginBottom: Platform.OS === 'ios' ? 32 : 40
    },
    inputContainer: {
        width: '95%',
        marginHorizontal: '2.5%',
        marginTop: 12,
        marginBottom: Platform.OS === 'ios' ? screenHeight * 0.04 : screenHeight * 0.05,
    },
    input: {
        width: '100%',
        height: 45,
        paddingHorizontal: 15,
        borderRadius: 14,
        fontFamily: 'Montserrat-Medium',
        color: Colors.dark.text,
        backgroundColor: Colors.pallete.lightDark,
    }
})

export default styles;
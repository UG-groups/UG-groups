import { Image, Pressable, StyleSheet } from 'react-native';
import { View, Text, ScrollView } from '../../components/Themed';
import { useRouter } from 'expo-router';
//* Styling
import Colors from '../../constants/Colors';

export default function PostScreen(){
    const router = useRouter();

    return(
        <ScrollView style={styles.container}>
            <Image style={styles.hero} source={require('../../assets/images/model_1.png')} />
            <Pressable style={styles.userContainer} onPress={() => router.push('/user/1')}>
                <Image style={styles.userImage} source={require('../../assets/images/queens_gambit.png')} />
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>Jane Lane</Text>
                    <Text style={styles.studyField}>Comercio Internacional</Text>
                </View>
            </Pressable>
            <View style={styles.postTextContainer}>
                    <Text style={styles.postText}>
                        Abro discusión sobre el arte generado por inteligencia artificial 🤖
                    </Text>
                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    hero: {
        width: '100%',
        height: 250,
        resizeMode: 'cover'
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
})
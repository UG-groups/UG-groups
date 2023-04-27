import { Image, Pressable, TextInput, Platform, StyleSheet } from 'react-native';
import { View, Text, ScrollView } from '../../components/Themed';
import { useRouter } from 'expo-router';
//* UI comps.
import BackButton from '../../components/atoms/BackButton';
import CommentCard from '../../components/molecules/CommentCard';
//* Styling
import Colors from '../../constants/Colors';

export default function PostScreen(){
    const router = useRouter();

    return(
        <>
                    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.btnContainer}>
                <BackButton />
            </View>
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
            <Text style={styles.commentsText}>Comentarios (5)</Text>
            <View style={styles.comments}>
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </View>
        </ScrollView>
        <TextBox />
        </>
    )
}

function TextBox(){
    return(
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input} 
                placeholder="Escribe un comentario..."
                placeholderTextColor={Colors.pallete.inactive}
            />
        </View>
    )
}

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
        marginBottom: 20
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
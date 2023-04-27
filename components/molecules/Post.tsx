import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
//* UI comps.
import VoteButton from '../atoms/VoteButton';
//* Styling
import Colors from '../../constants/Colors';

export default function Post() {
    const router = useRouter();

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Pressable style={styles.userSection} onPress={() => router.push("/user/1")}>
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
                <View style={styles.postControls}>
                    <View style={styles.voteControls}>
                        <Pressable style={styles.upvote} onPress={() => {console.log('upvote')}}>
                            <VoteButton iconName='up-arrow' />
                            <Text style={styles.upvoteCounter}>24</Text>
                        </Pressable>
                        <Pressable onPress={() => {console.log('downvote')}}>
                            <VoteButton iconName='down-arrow' />
                        </Pressable>
                    </View>
                    <Pressable style={styles.comment}>
                        <VoteButton iconName='comment' />
                    </Pressable>
                    <View>
                        <Text style={styles.tag}>#Tags #Tags</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 18,
        marginVertical: 7,
        backgroundColor: Colors.pallete.secondary,
    },
    content: {
        paddingVertical: 15,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    userSection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '5%'
    },
    userImage: {
        width: 36,
        height: 36,
        borderRadius: 50,
    },
    userInfo: {
        flexDirection: 'column',
        marginLeft: 5,
    },
    userName: {
        fontFamily: 'Montserrat-SemiBold',
        color: Colors.dark.text,
    },
    studyField: {
        fontSize: 12,
        color: Colors.pallete.lightGray
    },
    postTextContainer: {
        paddingHorizontal: '5%',
        paddingVertical: 15,
    },
    postControls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: '5%',
        paddingVertical: 5,
    },
    voteControls: {
        flexDirection: 'row',
    },
    postText: {
        fontSize: 12,
        color: Colors.dark.text,
        fontFamily: 'Montserrat-Medium',
    },
    upvote: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    },
    comment: {
        flexDirection: 'row', 
        minWidth: '33.33%', 
        justifyContent: 'center'
    },
    upvoteCounter: {
        color: Colors.dark.text, 
        fontSize: 11,
        fontFamily: 'Montserrat-Medium', 
    },
    tag: {
        fontSize: 11,
        fontFamily: 'Montserrat-Medium',
        color: Colors.pallete.primary,
    }
});
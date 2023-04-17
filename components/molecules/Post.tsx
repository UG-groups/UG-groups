import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import user from '../../assets/images/jane.png';
//* Styling
import Colors from '../../constants/Colors';

export default function Post() {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.userSection}>
                    <Image style={styles.userImage} source={user} />
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>Jane Doe</Text>
                        <Text style={styles.studyField}>Artes Visuales</Text>
                    </View>
                </View>
                <View style={styles.postTextContainer}>
                    <Text style={styles.postText}>
                        Abro discusión sobre el arte generado por inteligencia artificial 🤖
                    </Text>
                </View>
                <View style={styles.postTextContainer}>
                    <Text style={[styles.postText, { color: Colors.pallete.primary }]}>Moar content...</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 18,
        marginVertical: 10,
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
        fontWeight: 'bold',
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
    postText: {
        lineHeight: 16,
        color: Colors.dark.text,
    }
});
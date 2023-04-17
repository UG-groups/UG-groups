import React from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';
import { View, Text } from '../../components/Themed';
import { Link } from 'expo-router';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import logo from '../../assets/images/beegroups_logo.png';
//* Styling
import Colors from '../../constants/Colors';

export default function Header() {
    const [active, setActive] = React.useState('groups');

    const handleActive = (option: string) => {
        setActive(option);
    }

    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Pressable>
                    <MaterialCommunityIcons name="account-group" size={30} color={Colors.dark.text} />
                </Pressable>
                <Image style={styles.logo} source={logo} />
                <Pressable>
                    <Ionicons name="md-search" size={28} color={Colors.dark.text} />
                </Pressable>
            </View>
            <View style={styles.findControls}>
                <Pressable style={styles.optionContainer} onPress={() => handleActive('groups')}>
                    <Text style={styles.optionText}>Mis Grupos</Text>
                    {active === 'groups' && <View style={styles.dot}></View>}
                </Pressable>
                <Pressable style={styles.optionContainer} onPress={() => handleActive('discover')}>
                    <Text style={styles.optionText}>Descubrir</Text>
                    {active === 'discover' && <View style={styles.dot}></View>}
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.dark.background,
        paddingVertical: 10,
        paddingHorizontal: '5%',
    },
    subContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        height: 27,
        width: 80,
    },
    findControls: {
        width: '100%',
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },
    optionContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 15,
        fontWeight: 'bold',
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
});

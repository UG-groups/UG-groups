import React from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';
import { View, Text } from '../../components/Themed';
import { Link } from 'expo-router';
import { MotiView, MotiText } from 'moti';
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
                    <MotiText 
                        style={[styles.optionText, { color: active === 'groups' ? '#fff' : Colors.pallete.inactive }]}
                    >
                        Mis Grupos
                    </MotiText>
                    {active === 'groups' && <DotSelector selector={active} />}
                </Pressable>
                <Pressable style={styles.optionContainer} onPress={() => handleActive('discover')}>
                    <MotiText 
                        style={[styles.optionText, { color: active === 'discover' ? '#fff' : Colors.pallete.inactive }]}
                    >
                        Descubrir
                    </MotiText>
                    {active === 'discover' && <DotSelector selector={active} />}
                </Pressable>
            </View>
        </View>
    );
}

function DotSelector({ selector }: { selector: string }) {
    return(
        <MotiView 
            style={styles.dot}
            from={{ transform: [{ translateX: selector === 'groups' ? 90 : -90 }]}}
            animate={{ transform: [{ translateX: 0 }] }}
            transition={{ type: 'spring' }}>
        </MotiView>
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
        marginTop: 25,
    },
    optionContainer: {
        height: 40,
        flexDirection: 'column',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 16,
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

import { StyleSheet, Pressable, Image } from 'react-native';
import { View, Text } from '../../components/Themed';
import { Link } from 'expo-router';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import logo from '../../assets/images/beegroups_logo.png';
//* Styling
import Colors from '../../constants/Colors';

export default function Header() {
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
                <Pressable>
                    <Text style={styles.optionText}>Mis Grupos</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.optionText}>Descubrir</Text>
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
    },
    optionContainer: {
        borderBottomWidth: 5,
        borderRadius: 100,
        borderColor: Colors.pallete.primary,
    },
    optionText: {
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        marginHorizontal: 15,
    }
});

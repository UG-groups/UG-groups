import { Text, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//* Styling
import Colors from '../../constants/Colors';

export default function FollowButton({ type }: { type: string }){
    return(
        <Pressable style={styles.container}>
            {
                type === "group" 
                ? (
                    <>
                        <MaterialCommunityIcons name="account-group" size={22} color={Colors.light.text} />
                        <Text style={[styles.text, { marginHorizontal: 5 }]}>Unirse</Text> 
                    </>
                )
                : (
                    <>
                        <MaterialCommunityIcons name="bee" size={28} color={Colors.light.text} />
                        <Text style={styles.text}>Seguir</Text>
                    </>
                )
            }
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.pallete.primary,
    },
    text: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Basement-Grotesque'
    },
})
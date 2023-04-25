import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
//* Styling
import Colors from '../../constants/Colors';

export default function SearchBar(){
    const router = useRouter();

    return(
        <View style={styles.container}>
            <Pressable onPress={() => console.log('search')}>
                <Ionicons name="md-search" size={22} color={Colors.pallete.gray} />
            </Pressable>
            <TextInput 
                style={styles.input} 
                placeholder="Buscar por grupo o usuario..." 
                placeholderTextColor={Colors.pallete.gray}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 50,
        flexDirection: 'row',
        borderRadius: 15,
        paddingHorizontal: 10,
        marginHorizontal: "5%",
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: Colors.pallete.tertiary,
    },
    input: {
        width: "100%",
        height: 50,
        paddingLeft: 10,
        color: Colors.dark.text,
        fontFamily: 'Montserrat-Medium',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    }
});

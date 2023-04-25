import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
//* Styling
import Colors from '../../constants/Colors';

export default function SearchBar(){
    const router = useRouter();

    return(
        <View>
            <TextInput style={styles.input} placeholder="Buscar" />
            <Pressable onPress={() => console.log('search')}>
                <Ionicons name="md-search" size={28} color={Colors.dark.text} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    input: {}
});

import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//* Styling
import Colors from '../../constants/Colors';

export default function SearchBar(){
    return(
        <View>
            <TextInput style={styles.input} placeholder="Buscar" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    input: {}
});

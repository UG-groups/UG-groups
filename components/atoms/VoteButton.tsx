import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
//* Styling
import Colors from "../../constants/Colors";

export default function Post({ iconName }: { iconName: string }) {
    return(
        <View>
            {
                iconName === 'up-arrow' 
                ? <Ionicons name='arrow-up' size={21} color={Colors.dark.text} />
                : iconName === 'down-arrow'
                ? <Ionicons name='arrow-down' size={21} color={Colors.dark.text} />
                : iconName === 'comment'
                ? <Ionicons name='chatbox-outline' size={21} color={Colors.dark.text} />
                : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
});
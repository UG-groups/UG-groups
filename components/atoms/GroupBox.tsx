import { View, Text, Pressable, FlatList, Image, StyleSheet } from "react-native";
//* Styling
import Colors from "../../constants/Colors";

const DATA = [
    {id: '0', img: '../../assets/images/jane.png'},
    {id: '1', img: '../../assets/images/jane.png'},
    {id: '2', img: '../../assets/images/jane.png'},
    {id: '3', img: '../../assets/images/jane.png'},
    {id: '4', img: '../../assets/images/jane.png'},
]

export default function GroupBox() {
    return(
        <Pressable style={styles.container} onPress={() => console.log("Group")}>
            <View style={styles.content}>
                <View style={styles.imgParent}>
                    <FlatList 
                        data={DATA}
                        horizontal
                        renderItem={({item}) => (
                            <Image 
                                style={[styles.imgGroup, {marginLeft: item.id == '0' ? 0 : -10}]} 
                                source={require('../../assets/images/jane.png')} 
                            />
                        )}
                        keyExtractor={item => item.id}
                        scrollEnabled={false}
                    />
                </View>
                <Text style={styles.textLine}>Ver todos (12)</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 155,
        height: 80,
        borderRadius: 14,
        backgroundColor: Colors.pallete.secondary,
    },
    content: {
        height: 80,
        width: 155,
        paddingVertical: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgParent: {
        height: 32, 
        width: 155,
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center",
        paddingLeft: 20,
    },
    imgGroup: {
        width: 32,
        height: 32,
        borderRadius: 50,
        borderColor: Colors.pallete.secondary,
        borderWidth: 1,
        marginLeft: -10,
    },
    textLine: {
        fontSize: 10,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        marginTop: 10,
        color: Colors.pallete.primary,
    }
});
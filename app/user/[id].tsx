import { Image } from "react-native";
import { Text, View } from "../../components/Themed";
import { LinearGradient } from 'expo-linear-gradient';
//* UI comps.
import BackButton from "../../components/atoms/BackButton";
import FollowButton from "../../components/atoms/FollowButton";
//* Styling
import styles from "./styles";
import Colors from "../../constants/Colors";

export default function Profile() {
    return(
        <View style={styles.container}>
            <HeadContent />
            <View style={styles.body}>
                <FollowButton type="user" />
            </View>
        </View>
    );
}

function HeadContent(){
    return(
        <View style={styles.header}>
            <View style={styles.btnContainer}>
                <BackButton />
            </View>
            <Image style={styles.profileImage} source={require("../../assets/images/queens_gambit.png")} />
            <View style={styles.headerContent}>
                <View style={styles.gradient}>
                    <View style={{ width: '80%', backgroundColor: "transparent", transform: [{ translateY: -40 }] }}>
                        <Text style={styles.groupName}>Jane Lane</Text>
                        <Text style={styles.career}>Lic. Artes Visuales</Text>
                    </View>
                    <View style={{ backgroundColor: "transparent", transform: [{ translateY: -20 }] }}>
                        <Text style={styles.groupDescription}>Estudiante de dia, ajedrecista de tarde</Text>
                    </View>
                    <LinearGradient 
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 0, y: 0.5 }}
                        colors={['rgba(0,0,0,0.3)', '#000']}
                        style={{ height: 30 }}
                    />
                </View>
            </View>
        </View>
    )
}
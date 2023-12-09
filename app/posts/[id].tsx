import { Image, Pressable, TextInput } from 'react-native';
import { View, Text, ScrollView } from '../../components/Themed';
import { useRouter, useSearchParams } from 'expo-router';
import {
    SharedElement,
    SharedElementTransition,
    nodeFromRef
} from 'react-native-shared-element';
//* UI comps.
import BackButton from '../../components/atoms/BackButton';
import CommentCard from '../../components/molecules/CommentCard';
//* Styling
import styles from './styles';
import Colors from '../../constants/Colors';

export default function PostScreen(){
    const router = useRouter();
    //const { imageURL } = useSearchParams();
    let endAncestor;
    let endNode;

    return(
        <>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.btnContainer}>
                    <BackButton />
                </View>
                <View ref={ref => endAncestor = nodeFromRef(ref)}>
                    <SharedElement onNode={node => endNode = node}>
                        <Image style={styles.hero} source={require('../../assets/images/model_1.png')} />
                    </SharedElement>
                </View>
                <Pressable style={styles.userContainer} onPress={() => router.push('/user/1')}>
                    <Image style={styles.userImage} source={require('../../assets/images/queens_gambit.png')} />
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>Jane Lane</Text>
                        <Text style={styles.studyField}>Comercio Internacional</Text>
                    </View>
                </Pressable>
                <View style={styles.postTextContainer}>
                    <Text style={styles.postText}>
                        Abro discusión sobre el arte generado por inteligencia artificial 🤖
                    </Text>
                </View>
                <Text style={styles.commentsText}>Comentarios (5)</Text>
                <View style={styles.comments}>
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                </View>
            </ScrollView>
            <View>
                <TextBox />
            </View>
        </>
    )
}

function TextBox(){
    return(
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input} 
                placeholder="Escribe un comentario..."
                placeholderTextColor={Colors.pallete.inactive}
            />
        </View>
    )
}
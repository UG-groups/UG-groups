import { Image, ImageSourcePropType, StyleSheet, Dimensions } from 'react-native';
import { Text, View, SafeAreaView } from '../components/Themed';
import { FlashList } from '@shopify/flash-list';
//* UI comps.
import SearchBar from '../components/molecules/SearchBar';

const { height } = Dimensions.get('window');

const items = [
  {id: 1, title: "Cine y Cultura", image: require('../assets/images/model_2.png')},
  {id: 0, title: "Club de Ajedrez UG", image: require('../assets/images/chess.jpg')},
  {id: 2, title: "Novedades", image: require('../assets/images/model_1.png')},
  {id: 3, title: "Programación", image: require('../assets/images/model_3.png')},
]

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <View style={styles.grid}>
        <FlashList 
          data={items}
          renderItem={({ item }) => 
            <ImageItem key={item.id} title={item.title} image={item.image} />
          }
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          estimatedItemSize={20}
        />
      </View>
    </SafeAreaView>
  );
}

function ImageItem({ title, image }: { title: string, image: ImageSourcePropType }) {
  return (
    <View style={styles.imageContainer}>
      <Text style={styles.cardText}>{title}</Text>
      <Image source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    width: '90%',
    height: height,
    marginHorizontal: '5%',
  },
  imageContainer: {
    marginTop: 5,
  },
  cardText: {
    position: 'absolute',
    zIndex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    fontFamily: 'Basement-Grotesque',
  },
  image: {
    width: 160,
    height: 205,
    resizeMode: 'cover',
    borderRadius: 18,
    opacity: 0.9,
  }
});

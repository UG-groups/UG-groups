import { Image, ImageSourcePropType, StyleSheet, Dimensions } from 'react-native';
import { Text, View, SafeAreaView, ScrollView } from '../components/Themed';
import { FlashList } from '@shopify/flash-list';
//* UI comps.
import SearchBar from '../components/molecules/SearchBar';

const { height, width } = Dimensions.get('window');

const items = [
  {id: 1, title: "Cine y Cultura", image: require('../assets/images/model_2.png')},
  {id: 0, title: "Club de Ajedrez UG", image: require('../assets/images/chess.jpg')},
  {id: 2, title: "Novedades DCEA", image: require('../assets/images/model_4.png')},
  {id: 3, title: "Programación", image: require('../assets/images/model_3.png')},
]

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <ScrollView style={styles.grid}>
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerTitle}>Título Destacado</Text>
          <Image style={styles.banner} source={require('../assets/images/model_1.png')} />
        </View>
        <FlashList 
          data={items}
          renderItem={({ item }) => 
            <ImageItem key={item.id} title={item.title} image={item.image} />
          }
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          estimatedItemSize={20}
          scrollEnabled={false}
        />
      </ScrollView>
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
  bannerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: 205,
    marginTop: 5,
    resizeMode: 'cover',
    borderRadius: 18,
    opacity: 0.9,
  },
  bannerTitle: {
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    fontFamily: 'Basement-Grotesque',
  },
  imageContainer: {
    margin: 5,
  },
  cardText: {
    position: 'absolute',
    zIndex: 1,
    width: '85%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    fontFamily: 'Basement-Grotesque',
  },
  image: {
    width: width * 0.425,
    height: 205,
    marginTop: 5,
    resizeMode: 'cover',
    borderRadius: 18,
    opacity: 0.9,
  }
});

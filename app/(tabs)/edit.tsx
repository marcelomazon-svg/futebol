import { View, StyleSheet } from 'react-native';
import ImageViewer from '@/components/ImageViewer';

const PlaceholderImage = require('@/assets/images/imagemboa.jpg');

export default function edit() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource ={PlaceholderImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

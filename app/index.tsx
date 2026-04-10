import { Text, View, StyleSheet} from "react-native";
import{ Link } from 'expo-router'

export default function Index() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.text}> Tela inicial </Text>
      <Link href="/about" style={styles.button}>
       Ir para segunda tela
      </Link> 
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88a0f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
import { Text, View, StyleSheet} from "react-native";
import{ Link, Stack } from 'expo-router'

export default function NotFoundScreen() {
  return (
    <>
        <Stack.Screen options={{ title: 'Oops! Não encontrado'}} />
        <View style={styles.container}>
            <Link href="/" style={styles.button}>
                Voltar para tela inicial!
            </Link>
        </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#053d28',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
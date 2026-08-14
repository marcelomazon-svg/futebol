import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useBuscaCep } from '../../hooks/useBuscaCep';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function BuscaCEP() {
  const { cep, setCep, endereco, buscarCEP } = useBuscaCep();

  function handleBuscar() {
    buscarCEP();
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>

        {/* Ícone de estádio */}
        <MaterialCommunityIcons
          name="stadium"
          size={65}
          color="#abda04"
          style={styles.icon}
        />

        <Text style={styles.tex}>Localize seu Estádio</Text>

        <TextInput
          style={styles.textinput}
          value={cep}
          onChangeText={setCep}
          placeholder="Digite o CEP"
          keyboardType="numeric"
          placeholderTextColor="#ccc"
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
        />

        <Text style={styles.title}>{cep}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleBuscar}
        >
          <Ionicons
            name="search"
            size={18}
            color="#033b02"
            style={{ marginRight: 8 }}
          />

          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>

        {endereco.logradouro !== '' && (
          <View style={styles.result}>

            <View style={styles.resultRow}>
              <Ionicons
                name="location-outline"
                size={16}
                color="#abda04"
                style={styles.resultIcon}
              />

              <Text style={styles.title}>
                Rua: {endereco.logradouro}
              </Text>
            </View>

            <View style={styles.resultRow}>
              <Ionicons
                name="home-outline"
                size={16}
                color="#abda04"
                style={styles.resultIcon}
              />

              <Text style={styles.title}>
                Bairro: {endereco.bairro}
              </Text>
            </View>

            <View style={styles.resultRow}>
              <Ionicons
                name="business-outline"
                size={16}
                color="#abda04"
                style={styles.resultIcon}
              />

              <Text style={styles.title}>
                Cidade: {endereco.localidade}
              </Text>
            </View>

            <View style={styles.resultRow}>
              <Ionicons
                name="flag-outline"
                size={16}
                color="#abda04"
                style={styles.resultIcon}
              />

              <Text style={styles.title}>
                Estado: {endereco.uf}
              </Text>
            </View>

          </View>
        )}

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#033b02',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  textinput: {
    width: '70%',
    borderWidth: 2,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 10,
    color: '#fff',
    backgroundColor: '#022701',
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#abda04',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: '#033b02',
    fontWeight: 'bold',
    fontSize: 16,
  },

  result: {
    marginTop: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },

  title: {
    color: '#fff',
  },

  icon: {
    marginBottom: 10,
  },

  tex: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 20,
  },

  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },

  resultIcon: {
    marginRight: 6,
  },
});
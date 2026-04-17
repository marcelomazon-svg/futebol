import { Text, View, StyleSheet, FlatList, Image } from "react-native";

export default function AboutScreen() {

  const jogos = [
    {
      dia: "Sábado",
      partidas: [
        {
          id: 1,
          casa: "Flamengo",
          fora: "Vasco",
          hora: "16:00",
          logoCasa: "https://logodetimes.com/times/flamengo/logo-flamengo-256.png",
          logoFora: "https://upload.wikimedia.org/wikipedia/commons/1/1e/CR_Vasco_da_Gama_logo.svg",
        },
        {
          id: 2,
          casa: "Palmeiras",
          fora: "Santos",
          hora: "18:30",
          logoCasa: "https://logodetimes.com/times/palmeiras/logo-palmeiras-256.png",
          logoFora: "https://logodetimes.com/times/santos/logo-santos-256.png",
        },
        {
          id: 3,
          casa: "Grêmio",
          fora: "Internacional",
          hora: "21:00",
          logoCasa: "https://logodetimes.com/times/gremio/logo-gremio-256.png",
          logoFora: "https://logodetimes.com/times/internacional/logo-internacional-256.png",
        },
      ]
    },
    {
      dia: "Domingo",
      partidas: [
        {
          id: 4,
          casa: "São Paulo",
          fora: "Corinthians",
          hora: "11:00",
          logoCasa: "https://logodetimes.com/times/sao-paulo/logo-sao-paulo-256.png",
          logoFora: "https://logodetimes.com/times/corinthians/logo-corinthians-256.png",
        },
        {
          id: 5,
          casa: "Fluminense",
          fora: "Botafogo",
          hora: "16:00",
          logoCasa: "https://logodetimes.com/times/fluminense/logo-fluminense-256.png",
          logoFora: "https://logodetimes.com/times/botafogo/logo-botafogo-256.png",
        },
        {
          id: 6,
          casa: "Cruzeiro",
          fora: "Atlético-MG",
          hora: "18:30",
          logoCasa: "https://logodetimes.com/times/cruzeiro/logo-cruzeiro-256.png",
          logoFora: "https://logodetimes.com/times/atletico-mineiro/logo-atletico-mineiro-256.png",
        },
        {
          id: 7,
          casa: "Bahia",
          fora: "Fortaleza",
          hora: "20:30",
          logoCasa: "https://logodetimes.com/times/bahia/logo-bahia-256.png",
          logoFora: "https://logodetimes.com/times/fortaleza/logo-fortaleza-256.png",
        },
        {
          id: 8,
          casa: "Athletico-PR",
          fora: "Cuiabá",
          hora: "18:00",
          logoCasa: "https://logodetimes.com/times/athletico-paranaense/logo-athletico-paranaense-256.png",
          logoFora: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Cuiab%C3%A1_EC_logo.png",
        },
        {
          id: 9,
          casa: "Goiás",
          fora: "Coritiba",
          hora: "19:00",
          logoCasa: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Goias_Esporte_Clube_logo.svg",
          logoFora: "https://logodetimes.com/times/coritiba/logo-coritiba-256.png",
        },
      ]
    }
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Jogos da Semana</Text>

      <FlatList
        data={jogos}
        keyExtractor={(item) => item.dia}
        renderItem={({ item }) => (
          <View style={styles.bloco}>

            <Text style={styles.dia}>{item.dia}</Text>

            {item.partidas.map((jogo) => (
              <View key={jogo.id} style={styles.jogo}>

                <View style={styles.time}>
                  <Image source={{ uri: jogo.logoCasa }} style={styles.logo} />
                  <Text style={styles.texto}>{jogo.casa}</Text>
                </View>

                <Text style={styles.hora}>{jogo.hora}</Text>

                <View style={styles.time}>
                  <Text style={styles.texto}>{jogo.fora}</Text>
                  <Image source={{ uri: jogo.logoFora }} style={styles.logo} />
                </View>

              </View>
            ))}

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#073b00',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  titulo: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  bloco: {
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff30',
    paddingBottom: 10,
  },
  dia: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  jogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    width: 110,
    justifyContent: 'center',
  },
  logo: {
    width: 22,
    height: 22,
  },
  texto: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  hora: {
    color: '#fff',
    fontWeight: 'bold',
    width: 60,
    textAlign: 'center',
  },
});
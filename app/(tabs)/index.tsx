import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { useEffect, useState } from "react";


type Time = {
  posicao: number;
  nome: string;
  pontos: number;
  logo: string;
};

export default function Index() {

  
  const [tabela, setTabela] = useState<Time[]>([]);

  useEffect(() => {
    const dadosFake: Time[] = [
      { posicao: 1, nome: "Palmeiras", pontos: 26, logo: "https://logodetimes.com/times/palmeiras/logo-palmeiras-256.png" },
      { posicao: 2, nome: "Flamengo", pontos: 20, logo: "https://logodetimes.com/times/flamengo/logo-flamengo-256.png" },
      { posicao: 3, nome: "São Paulo", pontos: 20, logo: "https://logodetimes.com/times/sao-paulo/logo-sao-paulo-256.png" },
      { posicao: 4, nome: "Grêmio", pontos: 20, logo: "https://logodetimes.com/times/gremio/logo-gremio-256.png" },
      { posicao: 5, nome: "Botafogo", pontos: 20, logo: "https://logodetimes.com/times/botafogo/logo-botafogo-256.png" },
      { posicao: 6, nome: "Fluminense", pontos: 18, logo: "https://logodetimes.com/times/fluminense/logo-fluminense-256.png" },
      { posicao: 7, nome: "Athletico-PR", pontos: 17, logo: "https://escudos-worldsoccer.com/escudos/athletico-pr.png" },
      { posicao: 8, nome: "Atletico-MG", pontos: 15, logo: "https://logodetimes.com/times/atletico-mineiro/logo-atletico-mineiro-256.png" },
      { posicao: 9, nome: "Internacional", pontos: 15, logo: "https://logodetimes.com/times/internacional/logo-internacional-256.png" },
      { posicao: 10, nome: "Fortaleza", pontos: 13, logo: "https://logodetimes.com/times/fortaleza/logo-fortaleza-256.png" },
      { posicao: 11, nome: "Bragantino", pontos: 12, logo: "https://logodetimes.com/times/red-bull-bragantino/logo-red-bull-bragantino-256.png" },
      { posicao: 12, nome: "Cuiabá", pontos: 10, logo: "https://logodetimes.com/times/cuiaba/logo-cuiaba-256.png" },
      { posicao: 13, nome: "Cruzeiro", pontos: 10, logo: "https://logodetimes.com/times/cruzeiro/logo-cruzeiro-256.png" },
      { posicao: 14, nome: "Vasco", pontos: 10, logo: "https://escudos-worldsoccer.com/escudos/vasco.png" },
      { posicao: 15, nome: "Bahia", pontos: 9, logo: "https://logodetimes.com/times/bahia/logo-bahia-256.png" },
      { posicao: 16, nome: "Santos", pontos: 9, logo: "https://logodetimes.com/times/santos/logo-santos-256.png" },
      { posicao: 17, nome: "Goiás", pontos: 8, logo: "https://logodetimes.com/times/goias/logo-goias-256.png" },
      { posicao: 18, nome: "Coritiba", pontos: 6, logo: "https://logodetimes.com/times/coritiba/logo-coritiba-256.png" },
      { posicao: 19, nome: "Ceará", pontos: 6, logo: "https://logodetimes.com/times/ceara/logo-ceara-256.png" },
      { posicao: 20, nome: "América-MG", pontos: 5, logo: "https://logodetimes.com/times/america-mineiro/logo-america-mineiro-256.png" },
    ];

    setTabela(dadosFake);
  }, []);

  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Brasileirão Série A</Text>

      <FlatList
        data={tabela}
        keyExtractor={(item) => item.posicao.toString()}
        renderItem={({ item }: { item: Time }) => (
          <View style={styles.linha}>

            <View style={styles.timeContainer}>
              <Text style={styles.posicao}>{item.posicao}</Text>

              <Image 
                source={{ uri: item.logo }} 
                style={styles.logo} 
              />

              <Text style={styles.nome}>{item.nome}</Text>
            </View>

            <Text style={styles.pontos}>{item.pontos} pts</Text>

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
    marginBottom: 20,
    fontWeight: 'bold',
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff30',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  posicao: {
    color: '#fff',
    width: 20,
  },
  logo: {
    width: 28,
    height: 28,
  },
  nome: {
    color: '#fff',
    fontSize: 16,
  },
  pontos: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
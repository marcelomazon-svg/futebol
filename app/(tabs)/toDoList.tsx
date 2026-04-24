import { useTarefas } from '@/hooks/useTarefas';
import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
    const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefas();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de jogadores</Text>

            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input}
                placeholder= "Digite um time..."
                value={novaTarefa}
                onChangeText={setNovaTarefa}
                />
                <Button title="Adicionar" onPress= {adicionarTarefa} color = '#fff' />
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tarefaContainer}>
                        <Text style={styles.tarefaTexto}>{item.texto}</Text>
                        <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                            <Text style={styles.remover}> X </Text>
                        </TouchableOpacity>
                    </View>    
                    )}
                />    
        </View>
    );
}

const styles = StyleSheet.create({
    container:{ flex: 1, padding: 20, backgroundColor: '#073b00' },
    titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color:'#fff'},
    inputContainer: { flexDirection: 'row', marginBottom: 10, color: '#fff'},
    input:{flex: 1, borderWidth: 1, borderColor: '#042200', padding: 10, borderRadius: 5,marginRight: 10, color: '#ffffff' },
    tarefaContainer:{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#95c48f', padding: 15,
        marginBottom: 5, borderRadius: 5, shadowColor: '#fff', shadowOpacity: 0.1, shadowRadius: 3, elevation: 2},
    tarefaTexto: { fontSize: 16 },
    remover : {fontSize: 18, color: 'green'},    
});
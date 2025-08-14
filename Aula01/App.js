import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image,Button,Alert } from 'react-native';
import { SafeAreaView, } from 'react-native-safe-area-context';

export default function App() {
  return (

    <SafeAreaView style={estilos.container}>
      <ScrollView style={estilos.scroll}>

        <View style={estilos.header}>

          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }} style={estilos.imagem}
          />


          <View>
            <Text style={estilos.titulo}>Olá, Aluno</Text>
          </View>
        </View>

        <Text style={estilos.secao}>Menu</Text>
        <View style={estilos.botoes}>
          <View style={estilos.botao}>
            <Text style={estilos.textoBotao}>NOTAS</Text>
          </View>
          <View style={estilos.botao}>
            <Text style={estilos.textoBotao}>AULAS</Text>
          </View>
          <View style={estilos.botao}>
            <Text style={estilos.textoBotao}>AVISOS</Text>
          </View>
        </View>

        <Text style={estilos.secao}>Próximas atividades</Text>

        <View style={estilos.atividades}>
          <Text>Trabalho de Matemática</Text>
          <Text>Entrega: 20/08</Text>
        </View>

        <View style={estilos.atividades}>
          <Text>Prova de Física (Importante)</Text>
          <Text>Data: 22/08</Text>
        </View>

        <View style={estilos.atividades}>
          <Text>Leitura de História</Text>
          <Text>Cap. 3 e 4</Text>
        </View>

        <View style={estilos.atividades}>
          <Text>Leitura de História</Text>
          <Text>Cap. 5 e 6</Text>
        </View>

        <View style={estilos.atividades}>
          <Text>Leitura de História</Text>
          <Text>Cap. 7 e 8</Text>
        </View>

        <View style={estilos.atividades}>
          <Text>Leitura de História</Text>
          <Text>Cap. 9 e 10</Text>
        </View>

        <View >
          <View>

<Button
          title="Press me"
          color="#0a0a0aff"
          accessibilityLabel="Botão"
          onPress={() => Alert.alert('Teste')}
        />

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}
      

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scroll: {
    padding: 20,
  },
  atividades: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 15,
  },
  imagem: {
    width: 50,
    height: 50,
    borderRadius: 25,
       borderWidth: 5,
  },
  secao: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  botoes: {
    flexDirection: 'row',
    gap: 10,
  },
  botao: {
    backgroundColor: '#040f1aff',
    padding: 10,
    borderRadius: 25,
    flex: 1,
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
});
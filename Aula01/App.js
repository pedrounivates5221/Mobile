import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    
      <SafeAreaView style={estilos.container}>
        <ScrollView style={estilos.scroll}>
          
          <View style={estilos.header}>
            <View style={estilos.circulo}></View>
            <View>
              <Text style={estilos.titulo}>Olá, Estudante</Text>
              <Text>Bem-vindo ao seu painel</Text>
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
          
          <View style={estilos.card}>
            <Text>Trabalho de Matemática</Text>
            <Text>Entrega: 20/08</Text>
          </View>

          <View style={estilos.card}>
            <Text>Prova de Física (Importante)</Text>
            <Text>Data: 22/08</Text>
          </View>

          <View style={estilos.card}>
            <Text>Leitura de História</Text>
            <Text>Cap. 3 e 4</Text>
          </View>
          
          <Text style={estilos.secao}>Chamada para ação</Text>
          
          <View style={estilos.card}>
            <Text>Adquira um novo curso e continue aprendendo!</Text>
            <View style={estilos.botao}>
              <Text style={estilos.textoBotao}>COMPRAR CURSO</Text>
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
  circulo: {
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
    borderRadius: 25,
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
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 0,
    flex: 1,
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
});
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CinemasBeloHorizonte = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilme, setSelectedFilme] = useState(null);
  const navigation = useNavigation();

  const filmes = [
    {
      nome: 'Animais Fantásticos: Os Segredos de Dumbledore',
      sinopse: 'O professor Albus Dumbledore sabe que o poderoso bruxo das trevas Gellert Grindelwald está se movendo para assumir o controle do mundo bruxo. Incapaz de detê-lo sozinho, ele confia a Newt Scamander um plano contra o inimigo.',
      imagem: 'https://m.media-amazon.com/images/S/pv-target-images/94d299d381ded85afac95ba386ef5557b6e737800be59f5337b017af05df339d.jpg',
      id: 1,
    },
    {
      nome: 'Godzilla e Kong: O Novo Império',
      sinopse: 'Godzilla e o todo-poderoso Kong enfrentam uma ameaça colossal escondida nas profundezas do planeta, desafiando a sua própria existência e a sobrevivência da raça humana',
      imagem: 'https://cinemax.pt/wp-content/uploads/2024/01/godzila.jpg',
      id: 2,
    },
    {
      nome: 'Kung Fu Panda 4',
      sinopse: 'Uma poderosa feiticeira que muda de forma coloca os olhos no Cajado da Sabedoria. Po de repente percebe que precisa de ajuda e logo descobre que heróis podem ser encontrados nos lugares mais inesperados.',
      imagem: 'https://br.web.img3.acsta.net/pictures/23/12/13/18/13/4592801.jpg',
      id: 3,
    },
  ];

  const handleFilmePress = (filme) => {
    setSelectedFilme(filme);
    setModalVisible(true);
  };

  const handleCompraPress = () => {
    console.log('Filme comprado:', selectedFilme);
    setModalVisible(false);
    navigation.navigate('SelecionarAssento');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {filmes.map((filme, index) => (
        <View key={index}>
          <View style={styles.filmeContainer}>
            <TouchableOpacity onPress={() => handleFilmePress(filme)}>
              <View style={styles.cartazContainer}>
                <Image source={{ uri: filme.imagem }} style={styles.imagem} />
              </View>
              <Text style={styles.titulo}>{filme.nome}</Text>
              <Text>{filme.sinopse}</Text>
              <TouchableOpacity style={styles.verDetalhesButton} onPress={() => handleFilmePress(filme)}>
                <Text style={styles.verDetalhes}>Ver Detalhes</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          {index < filmes.length - 1 && <View style={styles.divider} />}
        </View>
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{selectedFilme?.nome}</Text>
            <Image source={{ uri: selectedFilme?.imagem }} style={styles.modalImage} />
            <Text>{selectedFilme?.sinopse}</Text>
            <Text style={styles.moreInfo}> 
              'Mais informações'
            </Text>
            <View style={styles.buttonContainer}>
              <View style={styles.customButton}>
                <Button title="Reservar Ingresso" color='#4DCEC1' onPress={handleCompraPress} />
              </View>
              <View style={styles.customButton}>
                <TouchableOpacity
                  style={{ ...styles.openButton, backgroundColor: '#4DCEC1' }}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.textStyle}>FECHAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
  },
  customButton: {
    marginTop: 10,
    backgroundColor: '#4DCEC1',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 100,
    marginBottom: 7,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  filmeContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  cartazContainer: {
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color:'#4DCEC1',
  },
  verDetalhesButton: {
    backgroundColor: '#4DCEC1',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  verDetalhes: {
    color: 'white',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4DCEC1',
  },
  modalImage: {
    width: 300,
    height: 400,
    marginBottom: 10,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 30,
    padding: 10,
    marginBottom: 7,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#CCCCCC',
    marginVertical: 10,
  },
});
export default CinemasBeloHorizonte;

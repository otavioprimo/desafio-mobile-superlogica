import React, { useState, useEffect } from 'react';
import { Modal, Text } from 'react-native';
import { Feather } from 'react-native-vector-icons';

import { Container, Content, Photo, Name, Favorite, Header, Button, Epsodes } from './styles';
import { getFavoriteById, getFavorites, toggleFavorite } from '../../storage';

const CharacterModal = (props) => {

    const { modalVisible, changeCharacter } = props;
    let character = {
        id: false,
        name: '',
        image: false,
        episode: [],
        ...changeCharacter
    };
    const [ favorited, setFavorited ] = useState(false);

    useEffect(() => {
      let storage = async () => {
        let data: any = await getFavoriteById(character.id);
        setFavorited(data);
      }
      storage();
    });
    
    const handleFavorite = async () => {
      await toggleFavorite(character.id);
      setFavorited( favorited ? false : true );
    }

    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <Container>
            <Content>

              {character.image ? 
                <Photo 
                    source={{ uri: character.image }}
                />
              : <></>}

              <Header>
                <Favorite
                  style={favorited ? {backgroundColor: '#FAF074'} : ''}
                  onPress={handleFavorite}
                >
                  <Feather
                    style={[{fontSize: 24}, favorited ? { color: '#DF894F' } : {color: '#666666'}]}
                    name='star'
                  />
                </Favorite>

                <Name>{character.name}</Name>
                </Header>
              
                <Epsodes>Nº de epsódios: {character.episode.length}</Epsodes>
              
              
              <Button
                onPress={() => props.closeModal()}
              >
                <Text style={{fontWeight: 'bold', color: '#ffffff'}}>Voltar</Text>
              </Button>
            </Content>
          </Container>
        </Modal>
    );
}

export default CharacterModal;

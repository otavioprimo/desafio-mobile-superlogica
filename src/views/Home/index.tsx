import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, Text } from 'react-native';
import { Feather } from 'react-native-vector-icons';
import { Container, Title, ClickMeButton, List, Header, HeaderText, Filter, FilterText, SearchInput, SearchButton, FavoriteButton, ErroMessage } from './styles';

import exampleSlice from '../../redux/reducers/example';
import * as api from '../../graphql';
import { getFavorites } from '../../storage';

import CharacterModal from '../../components/CharacterModal';
import CharacterListItem from '../../components/CharacterListItem';

interface Origin {
  name?: String
}

interface Location {
  name?: String
}

interface Character {
  name: String
  origin?: Origin
  location?: Location
  status?: String
  species?: String
  type?: String
  gender?: String
}

interface CharacterListOptions {
  results: Array<Character>
}

interface CharacterList {
  characters: CharacterListOptions
};

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [isPaged, setIsPaged] = useState(true);
    
  useEffect(() => {
    api.getCharacters({page: 1})
      .then(({characters: {results, info: {next}}}) => {
        setCharacters(results);
        setPage(next);
      });
  }, []);
 
  const addPageContent = async () => {    
    api.getCharacters({page: page})
    .then(({characters: {results}}) => {
      setCharacters([...characters, ...results]);
    });
  }

  const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const loadCharacters = async () => {
    
    if ( filterText !== '' ) { 
      await api.getCharactersByName(filterText)
        .then(({characters: {results}}) => {
          setIsPaged(true);
          setCharacters(results);
        })
        .catch(err => {
          setIsPaged(1);
          setCharacters([]);
        });
    } else {
      Alert.alert('O campo de nome é obrigatório.');
    }
  };

  const getCharactersByFavoriteList = async () => {
    let characters = await getFavorites();
    await api.getCharactersByIds(characters)
    .then(({charactersByIds}) => {
      setIsPaged(false);
      setCharacters(charactersByIds);
    });
  }

  const renderItem = ({item}: any) => {
    return (
      <CharacterListItem
        item={item}
        onPress={() => {
          setSelectedCharacter(item);
          setModalVisible(true);
        }}
      />
    );
  };

  const errorMessage = characters.length == 0 
    ? <ErroMessage>Nenhum personagem encontrado.</ErroMessage>
    : <></>;

  return (
    <Container>
      <Header>
        <HeaderText>Lista de personagens</HeaderText>
        <FavoriteButton
          onPress={getCharactersByFavoriteList}
        >
          <Feather
              style={{fontSize: 24, color: '#DF894F'}}
              name='star'
          />
        </FavoriteButton>
      </Header>
      
      <Filter>
        <FilterText>
          Buscar por nome:
        </FilterText>
        
        <SearchInput
            onChangeText={(value: any) => setFilterText(value)}
            value={filterText}
        />
        
        <SearchButton
          onPress={loadCharacters}
        >
          <Feather
              style={{fontSize: 24, color: '#ffffff'}}
              name='search'
          />
        </SearchButton>
      </Filter>

      <SafeAreaView>
        {errorMessage}
        
        <List
          data={characters}
          renderItem={renderItem}
          keyExtractor={uuidv4}
          onEndReached={() => isPaged ? addPageContent() : ''}
          onEndReachedThreshold={0.1}
        />
        
      </SafeAreaView>

      {modalVisible ? 
      <CharacterModal 
        changeCharacter={selectedCharacter} 
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
      /> 
      : <></>}
    </Container>
  )
}

export default Home;
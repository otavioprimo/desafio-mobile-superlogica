import React from 'react';
import { Feather } from 'react-native-vector-icons';

import { Item, Photo, Name, Icon } from './styles';

const CharacterListItem = ({ item, onPress }) => (
    <Item onPress={onPress}>
      { item.image ? <Photo
        source={{
          uri: item.image
        }}
      /> : <></> }
      
      <Name>{item.name}</Name>
      <Icon>
        <Feather
          style={{fontSize: 24, color: '#666666'}}
          name='eye'
        />
      </Icon>
    </Item>
  );

export default CharacterListItem;
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

//Libs
import axios from 'axios';

//Components
import ListItem from '../../components/ListItem';

//Style
import {
    Container,
    Title
} from './styles';

export function Home(){

    const baseURL = 'https://rickandmortyapi.com/api';

    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(()=>{
        loadApi();
    }, []);

    async function loadApi(){
        if(loading) return;
        setLoading(true);
        const response = await axios.get(`${baseURL}/character`);
        setData([ ...response.data.results ]);
        setLoading(false);
    }
    

  return(
    <Container>
        <Title>The Rick and Morty</Title>
    
        <FlatList 
            data={ data }
            renderItem={({ item, index }) => <ListItem data={item} /> }
            keyExtractor={ item => String(item.id) }
        />

    </Container>
  )
}
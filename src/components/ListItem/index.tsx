import React, { useState } from 'react';
import { Modal } from 'react-native';

import { ButtonFavorite } from '../ButtonFavorite';

import { 
    List,
    ListText,
    ListTextImage,

    ModalWindow,
    ModalButton,
    ModalBody,
    ModalBodyImage,
    ModalBodyText,
    
    TextBold,
}from './styles';

export default function ListItem({ data }){

    const [ modalVisible, setModalVisible ] = useState(false);

    return(
        <List >
            <ListTextImage source={{ uri: data.image }}  /> 

            <ListText onPress={()=>setModalVisible(true)} data={data}>
                { data.name }  
            </ListText>

            <ListText>
                <ButtonFavorite /> 
            </ListText>
            
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                //Android - back button
                onRequestClose={()=>setModalVisible(false)}
            >

            <ModalWindow>
                <ModalButton title="Close Modal" onPress={()=>setModalVisible(false)} />

                <ModalBody>

                    <ModalBodyImage source={{ uri: data.image }} />

                    <ModalBodyText> 
                        <TextBold>Name character: </TextBold>
                        { data.name } 
                    </ModalBodyText>        

                    <ModalBodyText>
                        <TextBold>Status:</TextBold>
                        { data.status } - { data.species }
                    </ModalBodyText>

                    <ModalBodyText>
                        <TextBold>Last known location: </TextBold>
                        { data.location.name }
                    </ModalBodyText>

                </ModalBody>                
            </ModalWindow>
            </Modal>
        </List>        
    )
}

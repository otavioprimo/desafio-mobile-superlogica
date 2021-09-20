import styled from "styled-components/native";

export const List = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    align-items: center;

    background-color: #3C3E44;

    padding: 10px 20px;
    margin-top: 10px;
    border-radius: 30px;
`;

export const ListTextImage = styled.Image`
    width: 30px;
    height: 30px;   
    margin-right: 15px;
`;

export const ListText = styled.Text`
    flex: 1;    
    align-items: center;

    color:#fff;
    font-size: 16px;
`;

export const ModalWindow = styled.View`
        width: 90%;
        height: auto;
        background-color: rgba(0,0,0,0.7);

        padding:25px;
        margin:20px;    
`;

export const ModalButton = styled.Button``;


export const ModalBody = styled.View`
    padding-top: 20px;
`;

export const ModalBodyImage = styled.Image`
    width: 100px;
    height: 100px;
`;

export const ModalBodyText = styled.Text`
        color:#fff;
        font-size:16px;
`;

export const TextBold = styled.Text`
    color: lightblue;
    font-weight: bold;
`;
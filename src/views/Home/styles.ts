import styled from "styled-components/native";

export const Header = styled.View`
  width: 100%;
  min-width: 100%;
  min-height: 210px;
  padding: 155px 15px 15px 15px;
  background-color: #DF894F;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const HeaderText = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

export const FavoriteButton = styled.TouchableOpacity`
  padding: 8px;
  border-radius: 20px;
  background-color: #FAF074;
`;

export const Filter = styled.View`
  width: 100%;
  background-color: #B5631C;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const FilterText = styled.Text`
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  margin: 0 10px;
  background-color: #ffffff;
  border: 2px solid #ffffff;
  padding: 9px 5px;
  border-radius: 3px;
`;

export const SearchButton = styled.TouchableOpacity`
  padding: 7px;
  border-radius: 3px;
  background-color: #DF894F;
`;

export const Container = styled.View`
  padding: 30px 0 0 0;
  flex: 1;
  background-color: #03ADC5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.FlatList`
  padding: 20px 15px 0 15px;
`;

export const CharacterListItem = styled.TouchableOpacity`
  flex: 1;
`;

export const ClickMeButton = styled.TouchableOpacity`
  flex: 1;
`;

export const Title = styled.Text``;

export const ErroMessage = styled.Text`
  color: #ffffff;
  font-size: 15px;
  margin-top: 50px;
`;
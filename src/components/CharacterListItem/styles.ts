import styled from "styled-components/native";

export const Item = styled.TouchableOpacity`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  background-color: #efefef;
  border-radius: 50px;
  overflow: hidden;
`;

export const Photo = styled.Image`
  width: 80px;
  max-width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const Name = styled.Text`
  flex 1;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 0 12px;
`;

export const Icon = styled.Text`
  width: 80px;
  max-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
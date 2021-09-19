import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const Content = styled.View`
  margin: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 60px 35px 20px 35px;
  align-items: center;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 20;
  position: relative;
  display: flex;
`;

export const Photo = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border-width: 4px;
  border-color: #ffffff;
  position: absolute;
  top: -40%;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const Name = styled.Text`
  font-size: 24px;
`;

export const Favorite = styled.TouchableOpacity`
  font-size: 24px;
  margin-right: 10px;
  padding: 2px;
  border-radius: 20px;
`;

export const Button = styled.Pressable`
  padding: 16px;
  background-color: #9ECB3D;
  border-radius: 40px;
`;

export const Epsodes = styled.Text`
  font-size: 18px;
  margin-bottom: 18px;
`;
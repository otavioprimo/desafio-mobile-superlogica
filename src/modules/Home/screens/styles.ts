import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  width: 100%;
  background-color: ${"#333"};
`;

export const List = styled.FlatList``;

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ActivityIndicator,
  Text,
  View,
  FlatList,
  StyleSheet,
} from "react-native";
import { Card, DrawerModal } from "../../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container } from "./styles";

const Home: React.FC = () => {
  const baseURL = "https://rickandmortyapi.com/api";
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [page, setPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getCharacters();
  }, []);

  async function getCharacters() {
    if (loading) return;

    setLoading(true);

    const response = await axios.get(`${baseURL}/character/?page=${page}`);

    setData([...data, ...response.data.results]);
    setPage(page + 1);
    setLoading(false);
  }

  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={(item: any) => <Card data={item} setModalVisible={setModalVisible} />}
        onEndReached={getCharacters}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={<FooterComponent load={loading} />}
      />
      <DrawerModal
        data={data}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </Container>
  );
};

function ListItem({ data }: any) {
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
}

function FooterComponent({ load }: any) {
  if (!load) return null;

  return (
    <View>
      <ActivityIndicator size={25} color="#121212" />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#333",
  },
});

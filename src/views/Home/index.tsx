import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ActivityIndicator,
  Text,
  View,
  FlatList,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import { Card } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={(item: any) => <Card data={item} setModalVisible={setModalVisible} />}
        onEndReached={getCharacters}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={<FooterComponent load={loading} />}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end'
          }}
        >
          <View
            style={{
              position: 'relative',
              bottom: 0,
              backgroundColor: "white",
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              padding: 32,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Text
              style={{
                marginBottom: 15,
                textAlign: "center",
              }}
            >
              Hello World!
            </Text>
            <Pressable
              style={[
                {
                  borderRadius: 20,
                  padding: 10,
                  elevation: 2,
                  backgroundColor: "#8BCF21",
                },
              ]}
              onPress={() => setModalVisible(false)}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Fechar
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
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

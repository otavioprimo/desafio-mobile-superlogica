import AsyncStorage from "@react-native-async-storage/async-storage";

export async function toggleFavorite(id: string) {
    let favorites = await getFavorites() || [];

    if ( ! favorites || favorites.length == 0 ) return;

    let indexOf = favorites.indexOf(id);

    if ( indexOf === -1 ) {
        favorites.push(id);
    } else {
        favorites.splice(indexOf, 1);
    }
    
    try {
        await AsyncStorage.setItem(
            'RickyAndMortyFavorites',
            favorites.join(',')
        );
    } catch (err) {
        console.log(err);
    }
    
}

export async function setFavorite(favoriteList: String[]) {
    try {
        await AsyncStorage.setItem(
            'RickyAndMortyFavorites',
            favoriteList.join(',')
        );
    } catch (err) {
        console.log(err);
    }
}

export async function getFavoriteById(id: string) {
    let storage = await getFavorites()
        .then(res => res.indexOf(id) === -1 ? false : true)
        .catch(console.log);

    return storage;
}

export async function getFavorites() {

    const getAsyncStorage = async () => {
      try {
        let favoritesStorage = await AsyncStorage.getItem('RickyAndMortyFavorites') || "";
        return favoritesStorage;
      } catch(err) {
        console.log(err);
        return '';
      }
    };

    let response: String = await getAsyncStorage();
    return response.split(',');
}
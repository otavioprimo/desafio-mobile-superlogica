import React,{ useState, useEffect } from 'react';
import { Button, View } from 'react-native';

export function ButtonFavorite(){

    const [ favorite, setFavorite ] = useState(false);

    const handleFavorite = () => {
        setFavorite(!favorite);
    }

    return(
        <View>
            <Button 
                title={favorite ? '⭐' : '☆' }
                color= "#24282F"
                onPress={handleFavorite}
            />
        </View>
    );
}
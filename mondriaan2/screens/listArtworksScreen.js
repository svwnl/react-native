import React from "react";
import {SafeAreaView, FlatList, Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useArtwork} from '../hooks/useArtwork';

function ListArtworksScreen({navigation, clearArtwork, getArtworks, getSelectedArtwork, setSelectedArtwork}) {

    const onSelectCanvas = (artworkId) => {
        setSelectedArtwork(artworkId)
        navigation.navigate('Canvas', {
            artworkId: artworkId,
        });
    };

    const Item = ({artworkId}) => (
        <TouchableOpacity
            style={{backgroundColor: 'green', paddingVertical: 10}}
            onPress={() => onSelectCanvas(artworkId)}>
        <View style={styles.item}>
            <Text style={styles.title}>Artwork #{artworkId}</Text>
        </View>
        </TouchableOpacity>
    );

    const renderItem = ({item}) => (
        <Item artworkId={item.id}/>
    );

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>ListArtworks Screen {JSON.stringify(getSelectedArtwork())}</Text>
            <Button
                title="Go to canvas"
                onPress={() => {
                    navigation.navigate('Canvas', {
                        artworkId: getSelectedArtwork(),
                    });
                }}
            />
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={getArtworks()}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ListArtworksScreen;

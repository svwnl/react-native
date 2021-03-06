import React from "react";
import {Button, Text, View} from "react-native";
import Canvas from "../components/Canvas";

function CanvasScreen({route, navigation, setArtwork, getArtwork}) {

    const {artworkId} = route.params;

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Canvas Screen</Text>
            <Text>artwork id:: {JSON.stringify(getArtwork)}</Text>
            <Canvas artworkId={artworkId} setArtwork={setArtwork} getArtwork={getArtwork}/>
            <Button title="Go to artwork list" onPress={() => navigation.navigate('ListArtworks')}/>
        </View>
    );
}

export default CanvasScreen;

import React, { useState } from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Tile from "./Tile";

function Canvas({artworkId, getArtwork, setArtwork}) {

    const [canvas, setCanvas] = useState([{colorKey: 0}, {colorKey: 1}, {colorKey: 2}, {colorKey: 3}]);

    const setColorKey = (tileId, colorKey) => {
        let canvasArray = [...canvas];
        canvasArray[tileId].colorKey = colorKey;
        setCanvas(canvasArray);
    };

    const getColorKey = (tileId) => {
        return canvas[tileId].colorKey;
    };

    const initCanvas = () => {
        let artWork = getArtwork;
        if(artWork) {
            setCanvas(artWork.canvas);
        }
    }

    return (
        <View>
            <View>
                <Tile colorKey={getColorKey(0)} tileId={0} updateColor={setColorKey}/>
                <Tile colorKey={getColorKey(1)} tileId={1} updateColor={setColorKey}/>
                <Tile colorKey={getColorKey(2)} tileId={2} updateColor={setColorKey}/>
                <Tile colorKey={getColorKey(3)} tileId={3} updateColor={setColorKey}/>
            </View>

            <Button title="Save artwork" onPress={() => setArtwork(canvas, artworkId)} />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        fontSize: 32,
    },
});

export default Canvas;

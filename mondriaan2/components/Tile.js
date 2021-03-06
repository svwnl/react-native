import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const colors = [
    '#d3d4d2',
    '#dd422b',
    '#ecc052',
    '#013e72',
    '#0a0b04',
    '#b8bfc6',
];

const nextColor = (updateColor, tileId, colorKey) => {
    colorKey = colorKey + 1;
    if(colorKey > colors.length) { colorKey = 0 }
    updateColor(tileId, colorKey);
};

const getColor = (key) => {
    return colors[key]
};

const Tile = props => (
    <TouchableOpacity
        style={[styles.tileWrapper, { backgroundColor: getColor(props.colorKey)}]}
        onPress={() => nextColor(props.updateColor, props.tileId, props.colorKey)}>
        <View style={styles.card}>
            <Text>tile: {JSON.stringify(props.tileId)}</Text>
            <Text style={styles.cardText}>color key: {JSON.stringify(props.colorKey)}</Text>
            <Text style={styles.cardText}>{JSON.stringify(getColor(props.colorKey))}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    tileWrapper: {

    },
    card: {
        margin: 5,
        padding: 10,
        width: '200',
        height: 100,
        alignItems: 'flex-start',

        borderColor: '#050a01',
        borderWidth: 10
    },
    cardText: {
        color: '#ffffff',
        fontSize: 12
    }
});

export default Tile;

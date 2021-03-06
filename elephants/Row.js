import React from 'react'
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native'

const Row = props => (
    <TouchableOpacity style={styles.row} onPress={() => props.onSelectElephant(props)}>
        <View style={styles.th}><Image style={styles.image} source={{uri: props.image}}/></View>
        <View styles={styles.td}>
            <Text style={[styles.td, styles.h4]}>{props.name}</Text>
            <Text style={styles.td}>{props.species}</Text>
            <Text style={styles.td}>{props.sex}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderColor: '#000000'
    },
    th: {
        width: 80,
        height: 80,
    },
    td: {
        flex: 1,
        paddingLeft: 9,
        fontSize: 12,
        color: '#c2c2c2',
    },
    h4: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'stretch',
    },
});

export default Row

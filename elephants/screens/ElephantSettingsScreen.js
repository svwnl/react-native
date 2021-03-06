import React from 'react'
import {Button, Picker, StyleSheet, Text, View} from 'react-native'
import {connect} from "react-redux";
import {updateSettings} from '../redux/actions'
import store from "../redux/store";
import {Ionicons} from 'react-native-vector-icons';

class ElephantSettingsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Filter elephants',
        tabBarIcon: ({focused, tintColor}) => (
            <Ionicons name={`ios-options`} size={25} color={tintColor}/>
        ),
    };

    setSpecies = value => {
        store.dispatch(updateSettings({species: value}));
    };

    setSex = value => {
        store.dispatch(updateSettings({sex: value}));
    };

    reset = () => {
        store.dispatch(updateSettings({sex: null, species: null}));
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, paddingTop: 9}}>
                    <Text style={styles.label}>Species</Text>
                    <Picker
                        selectedValue={this.props.settings.species}
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                        onValueChange={(itemValue, itemIndex) => this.setSpecies(itemValue)}
                    >
                        <Picker.Item label="Select..." value=""/>
                        <Picker.Item label="African" value="African"/>
                        <Picker.Item label="African Bush Elephant" value="African Bush Elephant"/>
                        <Picker.Item label="Hybrid Elephant" value="Hybrid Elephant"/>
                        <Picker.Item label="Asian" value="Asian"/>
                    </Picker>
                </View>
                <View style={{flex: 1, paddingTop: 9}}>
                    <Text style={styles.label}>Gender</Text>
                    <Picker
                        selectedValue={this.props.settings.sex}
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                        onValueChange={(itemValue, itemIndex) => this.setSex(itemValue)}
                    >
                        <Picker.Item label="Select..." value=""/>
                        <Picker.Item label="Female" value="Female"/>
                        <Picker.Item label="Male" value="Male"/>
                    </Picker>
                </View>
                <View><Button title="Clear" onPress={this.reset}/></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f365e',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 9,
    },
    label: {
        fontWeight: '600',
        fontSize: 18,
        color: '#000000',
        textAlign: 'center',
        paddingBottom: 9
    },
    picker: {
        width: 100,
        backgroundColor: '#0f365e',
        color: '#ffffff',
        height: 30,
        borderColor: '#ffffff'
    },
    pickerItem: {
        color: '#ffffff',
        backgroundColor: '#0f365e',
    }
});

const mapStateToProps = state => ({
    settings: state.settings,
});

export default connect(mapStateToProps)(ElephantSettingsScreen)

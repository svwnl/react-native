import React from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'
import FlatListElephants from "../FlatListElephants";
import {connect} from "react-redux";
import {Ionicons} from 'react-native-vector-icons';

class ElephantListScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'List elephants',
        tabBarIcon: ({tintColor}) => (
            <Ionicons name={`ios-recording`} size={25} color={tintColor}/>
        ),
    };

    onSelectElephant = (elephant) => {
        this.props.navigation.navigate('ElephantDetails', {elephant: elephant})
    };

    filtered = (elephants, settings) => {
        return elephants.filter(function (elephant) {
            return (!this.sex || elephant.sex === this.sex) && (!this.species || elephant.species === this.species);
        }, settings);
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatListElephants style={{flex: 1}}
                                   elephants={this.filtered(this.props.elephants, this.props.settings)}
                                   onSelectElephant={this.onSelectElephant}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f365e',
    },
});

const mapStateToProps = state => ({
    elephants: state.elephants,
    settings: state.settings,
});

export default connect(mapStateToProps)(ElephantListScreen)

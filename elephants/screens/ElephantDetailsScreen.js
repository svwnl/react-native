import React from 'react'
import {Image, Linking, StyleSheet, Text, View} from 'react-native'

export default class ElephantDetailsScreen extends React.Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: navigation.getParam('elephant').name,
    });

    elephant = this.props.navigation.getParam('elephant');

    getPage = (link) => {
        return link.substring(link.lastIndexOf('/') + 1);
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 2}}>
                    <Image source={{uri: this.elephant.image}} style={styles.image}/>
                </View>
                <View style={{flex: 1, paddingTop: 9}}>
                    <View style={styles.tr}>
                        <Text style={styles.th}>Affiliation</Text>
                        <Text style={styles.td}>{this.elephant.affiliation}</Text>
                    </View>
                    <View style={styles.tr}>
                        <Text style={styles.th}>Species</Text>
                        <Text style={styles.td}>{this.elephant.species}</Text>
                    </View>
                    <View style={styles.tr}>
                        <Text style={styles.th}>Sex</Text>
                        <Text style={styles.td}>{this.elephant.sex}</Text>
                    </View>
                    <View style={styles.tr}>
                        <Text style={styles.th}>Dob / dod</Text>
                        <Text style={styles.td}>{this.elephant.dob} / {this.elephant.dod}</Text>
                    </View>
                    <View style={styles.tr}>
                        <Text style={styles.th}>Wikipedia</Text>
                        <Text style={[styles.td, styles.a]}
                              onPress={() => Linking.openURL(this.elephant.wikilink)}>
                            {this.getPage(this.elephant.wikilink)}
                        </Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <View style={styles.tr}>
                        <Text style={[styles.td, styles.p]}>{this.elephant.note}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    a: {
        color: '#4696ec'
    },
    container: {
        flex: 1,
        backgroundColor: '#19365b',
    },
    tr: {
        flexDirection: 'row',
        flex: 1,
        paddingHorizontal: 9
    },
    td: {
        flex: 2,
        fontSize: 18,
        color: '#c2c2c2',
    },
    p: {
        color: '#ffffff'
    },
    th: {
        fontWeight: '600',
        flex: 1,
        fontSize: 18,
        color: '#ffffff',
    },
    image:
        {
            resizeMode: 'cover',
            width: '100%',
            height: '100%'
        }
});

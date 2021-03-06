import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Canvas from "./components/Canvas";
import CanvasScreen from "./screens/CanvasScreen";
import ListArtworksScreen from "./screens/ListArtworksScreen";
import {useArtwork} from './hooks/useArtwork';

const Stack = createStackNavigator();

function App() {

    const [setArtwork, getArtwork, clearArtwork, getArtworks, getSelectedArtwork, setSelectedArtwork] = useArtwork();

    const MyListArtworksScreen = (props) => {
        return (
            <ListArtworksScreen {...props} clearArtwork={clearArtwork} getArtworks={getArtworks}
                                getSelectedArtwork={getSelectedArtwork} setSelectedArtwork={setSelectedArtwork}/>
        );
    }

    const MyCanvasScreen = (props) => {
        return (
            <CanvasScreen {...props} setArtwork={setArtwork} getArtwork={getArtwork}/>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListArtworks">
                <Stack.Screen name="ListArtworks" component={MyListArtworksScreen} options={{title: 'List artworks'}}/>
                <Stack.Screen name="Canvas" component={MyCanvasScreen} options={{title: 'Canvas'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

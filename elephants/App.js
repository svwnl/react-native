import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import store from './redux/store'
import ElephantDetailsScreen from "./screens/ElephantDetailsScreen";
import ElephantListScreen from "./screens/ElephantListScreen";
import ElephantSettingsScreen from "./screens/ElephantSettingsScreen";
import {addElephant, updateSettings} from './redux/actions'

const MainTabs = createBottomTabNavigator(
    {
        ElephantList: ElephantListScreen,
        ElephantSettings: ElephantSettingsScreen,
    },
    {
        tabBarOptions: {
            activeTintColor: '#4696ec',
        },
    }
);

const AppNavigator = createStackNavigator({
        Main: MainTabs,
        ElephantDetails: ElephantDetailsScreen,
    },
    {
        initialRouteName: 'Main',
        navigationOptions: {
            headerTitle: 'Elephants on Wikipedia',
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor: '#195ba0',
            }
        }
    }
);

export default class App extends React.Component {
    fetchElephants = async () => {
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://elephant-api.herokuapp.com/elephants'
        // Sending the request through a CORS proxy:
        // fetch(proxyUrl + targetUrl)
        fetch(targetUrl)
            .then(blob => blob.json())
            .then(data => {
                    //console.table(data);
                    store.dispatch(updateSettings({err: 'success'}));
                    data.filter((e) => (e.index)).map(e => store.dispatch(addElephant(e)));
                }
            )
            .catch(e => {
                store.dispatch(updateSettings({err: JSON.stringify(e)}));
                console.log(e);
                return e;
            });
    };

    componentDidMount() {
        this.fetchElephants()
    }

    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        );
    }
}

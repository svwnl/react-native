import React from 'react'
import {FlatList} from 'react-native'

import Row from './Row'

export default function FlatListElephants(props) {

    const renderItem = ({item}) => <Row {...item} onSelectElephant={props.onSelectElephant}/>;

    return (<FlatList renderItem={renderItem} keyExtractor={item => 'index' + item.index} data={props.elephants}/>)
}

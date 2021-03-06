import {createStore} from 'redux'

import {updateSettings} from './actions'
import reducer from './reducer'

const store = createStore(reducer);

store.dispatch(updateSettings({sex: '', species: ''}))

export default store

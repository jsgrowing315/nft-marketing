import { combineReducers } from 'redux'
import { History } from 'history';
import { connectRouter } from 'connected-react-router'

import favorites, { FavoritesState } from './favorites'
import selectedSubCategories, { SelectedSubCategoriesState } from './selectedSubCategories'
import configStatus, { ConfigStatus } from './config'

const rootReducer = (history: History) =>
    combineReducers({
        favorites,
        selectedSubCategories,
        configStatus,
        router: connectRouter(history)
    })

export interface State {
    favorites: FavoritesState,
    selectedSubCategories:SelectedSubCategoriesState,
    configStatus:ConfigStatus,
}

export default rootReducer

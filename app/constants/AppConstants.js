import pkg from '../../package'

export const DEBUG = (process.env.NODE_ENV !== 'production')
export const APP_TITLE = pkg.name

export const ITEMS_GET_SUCCESS = 'ITEMS_GET_SUCCESS'
export const ITEMS_GET_ERROR = 'ITEMS_GET_ERROR'
export const ITEMS_UPDATED = 'ITEMS_UPDATED'

export const SET_API_URL = 'set api url'

export const SET_CITIES_INDEX = 'set cities index'
export const CITIES_INDEX_UPDATED = 'cities index updated'

export const SET_CITIES = 'set cities'

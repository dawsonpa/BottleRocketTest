import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { createSelector } from  'reselect';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  restaurantRequest: null,
  restaurantSuccess: ['restaurants'],
  restaurantFailure: null,
  setSelectedRestaurantId: ['selectedRestaurantId']
})

export const RestaurantTypes = Types;
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  restaurants: [],
  fetching: null,
  error: null,
  selectedRestaurantId: null,
})

/* ------------- Selectors ------------- */

const getSelectedRestaurantId = state  => state.selectedRestaurantId;
const getRestaurants = state => state.restaurants;

export const RestaurantSelectors = {
  getRestaurants,
  getSelectedRestaurant: createSelector(
    getSelectedRestaurantId,
    getRestaurants,
    (id, restaurants) => restaurants.filter(restaurant => restaurant.clientId === id)
  )
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
  state.merge({ fetching: true, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { restaurants } = action
  return state.merge({ fetching: false, error: null, restaurants })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, restaurants: [] })
export const setSelectedRestaurantId = (state, action) => {
  const { selectedRestaurantId } = action
  return state.merge({ selectedRestaurantId })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESTAURANT_REQUEST]: request,
  [Types.RESTAURANT_SUCCESS]: success,
  [Types.RESTAURANT_FAILURE]: failure,
  [Types.SET_SELECTED_RESTAURANT_ID]: setSelectedRestaurantId

})

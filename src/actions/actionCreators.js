import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  DELETE_SERVICE_REQUEST,
  DELETE_SERVICE_FAILURE,
  REMOVE_SERVICE,
//  EDIT_SERVICE_REQUEST,
//  EDIT_SERVICE_FAILURE,
//  EDIT_SERVICE_SUCCESS,
  CHANGE_SERVICE_FIELD,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_FAILURE,
  ADD_SERVICE_SUCCESS,
} from './actionTypes';

export const fetchServicesRequest = () => ({
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesFailure = error => ({
  type: FETCH_SERVICES_FAILURE,
  payload: {
    error,
  },
});

export const fetchServicesSuccess = items => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: {
    items,
  },
});

export const deleteServiceRequest = id => ({
  type: DELETE_SERVICE_REQUEST,
  payload: {
    id,
  },
});

export const deleteServiceFailure = error => ({
  type: DELETE_SERVICE_FAILURE,
  payload: {
    error,
  },  
});

export const removeService = id => ({
  type: REMOVE_SERVICE,
  payload: {
    id,
  },
});

export const changeServiceField = (name, value) => ({
  type: CHANGE_SERVICE_FIELD,
  payload: {
    name,
    value,
  },
});

export const addServiceRequest = (name, price) => ({
  type: ADD_SERVICE_REQUEST,
  payload: {
    name,
    price,
  },
})

export const addServiceFailure = error => ({
  type: ADD_SERVICE_FAILURE,
  payload: {
    error,
  },
});

export const addServiceSuccess = () => ({
  type: ADD_SERVICE_SUCCESS,
});

export const fetchServices = async dispatch => {
  dispatch(fetchServicesRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchServicesSuccess(data));
  } catch (e) {
    dispatch(fetchServicesFailure(e.message));
  }
}

export const deleteService = async (dispatch, id) => {
  dispatch(deleteServiceRequest(id));
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(removeService(id));
  } catch (e) {
    dispatch(deleteServiceFailure(e.message));
  }
}

export const addService = async (dispatch, name, price) => {
  dispatch(addServiceRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price }),
    })
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(addServiceSuccess());
  } catch (e) {
    dispatch(addServiceFailure(e.message));
  }
  fetchServices(dispatch);
}


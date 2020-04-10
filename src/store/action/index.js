import * as actionTypes from './actionTypes';

const axios = require('axios');


export const fetchAddressStart = () => {
  return {
    type: actionTypes.FETCH_ADDRESS_START
  }
}

export const fetchAddressFail = () => {
  return {
    type: actionTypes.FETCH_ADDRESS_FAIL
  }
}

export const fetchAddressSuccess = (address) =>  {
  return {
    type: actionTypes.FETCH_ADDRESS_SUCCESS,
    address: address
  }
}

export const addAddress = (address) => {
  return {
    type: actionTypes.ADD_ADDRESS,
    address: address
  }
}

export const editAddress = (id) => {
  return {
    type: actionTypes.EDIT_ADDRESS,
    id: id
  }
}

export const removeAddress = (id) => {
  return {
    type: actionTypes.EDIT_ADDRESS,
    id: id
  }
}

export const editCellphone = (phoneNumber) => {
  return {
    type: actionTypes.EDIT_CELLPHONE,
    phoneNumber: phoneNumber
  }
}

export const sortColumn = (name) => {
  return {
    type: actionTypes.SORT_COLUMN,
    name: name
  }
}

export const initAddressBook = () => {
  return dispath => {
    dispath(fetchAddressStart());
    axios.get('./data/address.json')
    .then( response => {
      dispath(fetchAddressSuccess(response));
    })
    .catch( error => {
      dispath(fetchAddressFail());
    })
  }
}
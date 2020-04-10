import * as actionTypes from '../action/index';

const initialState = {
  address: null,
  error: false
};

const setAddress = (state, action) => {
  return {
    address: {
      name: action.address.name,
      location: action.address.location,
      office: action.address.office,
      phone: {
        cell: action.address.cell,
        office: action.address.office
      }
    }
  }   
}

const fetchAddressFail = () => {
  return {
    error: true
  }
}

const reducer = (state = initialState, action) => {
  switch( action.type) {
    case actionTypes.fetchAddressSuccess:
      return this.setAddress(state, action); 
    case actionTypes.fetchAddressFail:
      return this.fetchAddressFail();
  }
}

export default reducer;
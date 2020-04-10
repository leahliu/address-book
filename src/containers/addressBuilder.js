import React, {Component} from 'react';
import { connect } from 'react-redux';
import AddressHeader from '../components/address/addressHeader'
import AddressList from '../components/address/addressList';
import * as actions from '../store/action/index'
import Error from '../components/error/error';

class AddressBuilder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {address} = this.props;
    return (
      <React.Fragment>
        <AddressHeader/>
        {address ?
          <AddressList {...address}/>
          :
          <Error messages="Please try it later"/>
        }     
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    address: state.address
  }
}

const mapDispathToProps = dispatch => {
  return {
    onInitAddressBook: () => dispatch(actions.initAddressBook()),
    onCellPhoneEdit: (phoneNumber) => dispatch(actions.editCellphone(phoneNumber)),
    onAddressRemoved: (id) => dispatch(actions.removeAddress(id)),
    onAddressAdded: (address) => dispatch(actions.addAddress(address))
  }
}

export default connect(mapStateToProps, mapDispathToProps)(AddressBuilder);
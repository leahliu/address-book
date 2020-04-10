import React, {Component} from 'react';
import AddressHeader from './address/addressHeader';
import AddressList from './address/addressList';
import Error from './error/error';

class Address extends Component {
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
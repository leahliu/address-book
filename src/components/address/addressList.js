import React, {Component} from 'react';

class AddressList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount()  {
    this.props.initAddressBook();
  }

  render()  {
    return (
      <div className="AddressList">
      
      </div>
    )  
  }
}

export default AddressList;

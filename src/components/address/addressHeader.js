import React from 'react';

const AddressHeader = (props) => (
  <ul className="AddressHeader">
    <li></li>
    <li>ID</li>
    <li>Name</li>
    <li>Location</li>
    <li>Office</li>
    <li>
      <div>Phone</div>
      <div>
        <span>Cell</span>
        <span>Office</span>
      </div>
    </li>
    <li>Action</li>
  </ul>
);

export default AddressHeader;
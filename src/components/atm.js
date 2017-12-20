import React from 'react';
import './atm.css';
function Atm(props) {
  const { address, bankName, properties } = props;
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{bankName}</h3>
      </div>
      <ul className="list-group">
        <div className="atm-details">
          <div>{address.formattedAddress}</div>
        </div>
      </ul>
    </div>
  );
}

export default Atm;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Atm from './atm';

class AtmList extends Component {
  render() {
    const atms = this.props.atms.map((atm, i) =>
      <Atm
        address={atm.address}
        properties={atm.properties}
        bankName={atm.ownerBusName}
        key={i}
      />
    );

    return (
      <div>
        {atms}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    atms: state.app.atms
  }
}

export default connect(mapStateToProps)(AtmList);

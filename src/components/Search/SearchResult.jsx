import * as PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Link } from 'gatsby';

class SearchResult extends Component {
  static propTypes = {
    transmitter: PropTypes.shape({
      antennaHeight: PropTypes.string,
      areaServed: PropTypes.string,
      state: PropTypes.string,
      band: PropTypes.string,
      frequency: PropTypes.string,
      onAirID: PropTypes.string,
      callsign: PropTypes.string,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }).isRequired,
  }

  render() {
    const {
      antennaHeight,
      antennaPattern,
      areaServed,
      bSL,
      band,
      callsign,
      distance,
      easting,
      frequency,
      hoursofOperation,
      id,
      latitude,
      licenceArea,
      licenceAreaID,
      licenceNumber,
      longitude,
      maximumCMF,
      maximumERP,
      northing,
      onAirID,
      polarisation,
      purpose,
      siteId,
      siteName,
      state,
      status,
      technicalSpecificationNumber,
      transmitterPower,
      zone,
    } = this.props.transmitter;

    return (
      <div className="transmitter">
        <Link to={`/transmitters/${id}/`}>
          <h5>
            {callsign}
            {' '}
            {frequency}
            {band}
          </h5>
          <p>
            { siteName }
,
            {' '}
            { areaServed }
,
            {' '}
            { state }
          </p>
          <p>
Distance:
            { distance.toFixed(2) }
km
          </p>
          <p>
            <span className="badge badge-primary">{ purpose }</span>
          </p>
        </Link>
      </div>
    );
  }
}

export default SearchResult;

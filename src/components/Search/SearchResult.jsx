import * as PropTypes from 'prop-types';
import React from 'react';

import { Link } from 'gatsby';

const SearchResult = ({ transmitter }) => {
  const {
    // antennaHeight,
    // antennaPattern,
    areaServed,
    // bSL,
    band,
    callsign,
    distance,
    // easting,
    frequency,
    // hoursofOperation,
    id,
    // latitude,
    // licenceArea,
    // licenceAreaID,
    // licenceNumber,
    // longitude,
    // maximumCMF,
    // maximumERP,
    // northing,
    // onAirID,
    // polarisation,
    purpose,
    // siteId,
    siteName,
    state,
    // status,
    // technicalSpecificationNumber,
    // transmitterPower,
    // zone,
  } = transmitter;

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
};

SearchResult.propTypes = {
  transmitter: PropTypes.shape({
    antennaHeight: PropTypes.string,
    areaServed: PropTypes.string,
    band: PropTypes.string,
    callsign: PropTypes.string,
    distance: PropTypes.number,
    frequency: PropTypes.string,
    id: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    onAirID: PropTypes.string,
    purpose: PropTypes.string,
    siteName: PropTypes.string,
    state: PropTypes.string,
  }).isRequired,
};

export default SearchResult;

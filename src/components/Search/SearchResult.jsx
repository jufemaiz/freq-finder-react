import * as PropTypes from "prop-types"
import React, { Component } from "react"

import { Link } from "gatsby"

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
    const { band,
            onAirID,
            areaServed,
            callsign,
            frequency,
            purpose,
            polarisation,
            antennaHeight,
            antennaPattern,
            maximumERP,
            maximumCMF,
            transmitterPower,
            technicalSpecificationNumber,
            licenceNumber,
            siteId,
            siteName,
            zone,
            easting,
            northing,
            latitude,
            longitude,
            state,
            bSL,
            licenceArea,
            licenceAreaID,
            hoursofOperation,
            status,
            distance } = this.props.transmitter;

    return (
      <div className="transmitter">
        <h5>{callsign} {frequency}{band}</h5>
        <p>{ siteName }, { areaServed }, { state }</p>
        <p>Distance: { distance.toFixed(2) }km</p>
        <p>
          <span className="badge badge-default">{ purpose }</span>
        </p>
      </div>
    );
  }
}

export default SearchResult

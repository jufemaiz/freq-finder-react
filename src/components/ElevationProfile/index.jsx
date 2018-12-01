import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const GOOGLE_API_KEY = 'AIzaSyAuUwqWGIlroxZGbQqWxccO4Nll24udLTg';

class ElevationProfile extends Component {
  static propTypes = {
    location1: PropTypes.shape.isRequired,
    location2: PropTypes.shape.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      elevationProfile: [],
      scriptElement: null,
    };

    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  componentDidMount() {
    if (!window.google) {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=${GOOGLE_API_KEY}`;
      const x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      this.setState({ scriptElement: s });
      // Below is important.
      // We cannot access google.maps until it's finished loading
      s.addEventListener('load', this.onScriptLoad());
    } else {
      this.onScriptLoad();
    }
  }

  componentWillUnmount() {
    const { scriptElement } = this.state;
    if (scriptElement !== null) {
      scriptElement.removeEventListener('load', this.onScriptLoad);
    }
  }

  onScriptLoad() {
    // Load up the elevation here
    const { location1, location2 } = this.props;
    const path = [
      {
        lat: location1.latitude,
        lng: location1.longitude,
      },
      {
        lat: location2.latitude,
        lng: location2.longitude,
      },
    ];

    const elevationService = new window.google.maps.ElevationService();
    const elevationRequest = {
      path,
      samples: 256,
    };

    const elevations = new Promise((resolve, reject) => {
      if (!elevationService) {
        reject(new Error('ElevationService not supported'));
      }

      elevationService.getElevationAlongPath(elevationRequest, (results) => {
        resolve(results);
      }, () => {
        reject(new Error('Permission denied'));
      });
    });

    elevations.then((results) => {
      this.setState({
        elevationProfile: results,
      });
    });
  }

  render() {
    const { elevationProfile } = this.state;
    const elevationProfileHeight = elevationProfile.map(el => parseFloat(el.elevation.toFixed(2)));

    const data = {
      labels: new Array(256),
      datasets: [{
        borderColor: '#673ab7',
        borderWidth: 1,
        radius: 0,
        label: 'Elevation Profile',
        fill: false,
        lineTension: 0,
        data: elevationProfileHeight,
      }],
    };

    const options = {
      legend: {
        display: false,
      },
      xAxes: [{
        display: false,
        gridLines: {
          display: false,
        },
        labels: {
          show: false,
        },
      }],
      yAxes: [{
        display: false,
        gridLines: {
          display: false,
        },
        labels: {
          show: false,
        },
      }],
    };

    return (
      <div className="elevation-profile" style={{ marginTop: `20px` }}>
        <Line data={data} options={options} height={100} />
      </div>
    );
  }
}

export default ElevationProfile;

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const API = 'https://maps.googleapis.com/maps/api/elevation/json?key=AIzaSyAuUwqWGIlroxZGbQqWxccO4Nll24udLTg&samples=256&path=';

class ElevationProfile extends Component {
  static propTypes = {
    location1: PropTypes.shape.isRequired,
    location2: PropTypes.shape.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      elevationProfile: [],
    };
  }

  componentDidMount() {
    const { location1, location2 } = this.props;
    const latlng = [
      `${location1.latitude},${location1.longitude}`,
      `${location2.latitude},${location2.longitude}`,
    ];

    fetch(API + latlng.join('|'))
      .then(response => response.json())
      .then(data => this.setState({ elevationProfile: data.results }));
  }

  render() {
    const { elevationProfile } = this.state;
    const elevationProfileHeight = elevationProfile.map(el => el.elevation);

    const data = {
      datasets: [{
        label: 'Elevation Profile',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: elevationProfileHeight,
      }],
    };

    const options = {
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
      <div className="elevation-profile">
        <Line data={data} options={options} />
      </div>
    );
  }
}

export default ElevationProfile;

import React from 'react';
import { Router } from '@reach/router';
import Layout from '../../../components/Layout';
import StationsPage from './stations.jsx';
import StationPage from './station.jsx';

const Stations = () => (
  <Layout>
    <Router>
      <StationsPage path="/stations" />
      <StationPage path="/stations/:stationID" />
    </Router>
  </Layout>
);

export default Stations;

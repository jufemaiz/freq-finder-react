import React from 'react';
import { Router } from '@reach/router';
import Layout from '../../../components/Layout';
import TransmittersPage from './transmitters.jsx';
import TransmitterPage from './transmitter.jsx';

const Transmitters = () => (
  <Layout>
    <Router>
      <TransmittersPage path="/transmitters" />
      <TransmitterPage path="/transmitters/:transmitterID" />
    </Router>
  </Layout>
);

export default Transmitters;

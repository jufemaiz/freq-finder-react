import PropTypes from 'prop-types';
import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/Layout';
import Stations from './components/Stations';
import Transmitters from './components/Transmitters';

const App = () => (
  <Layout>
    <Router>
      <PublicRoute path="/app/stations" component={Stations} />
      <PublicRoute path="/app/transmitters" component={Transmitters} />
    </Router>
  </Layout>
);

function PublicRoute(props) {
  const { children } = props;
  return <div>{ children }</div>;
}
PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;

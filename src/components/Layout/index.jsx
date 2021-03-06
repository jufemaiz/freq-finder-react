import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import { StaticQuery, graphql } from 'gatsby';

import Header from '../Header';
import Footer from '../Footer';

import '../../scss/base.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container">
          {children}
        </div>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

import React from 'react';

import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import '../../scss/base.scss';

const Footer = () => (
  <div id="footer">
    <Container>
      <Row>
        <Col>
          <p>
            Data presented comes from the
            <a href="http://acma.gov.au/WEB/HOMEPAGE/PC=HOME">The Australian Communications and Media Authority</a>
            under
            <a href="http://www.acma.gov.au/WEB/STANDARD/pc=PC_312132">Creative Commons License</a>
            .
          </p>
          <p>
            Developed by
            <em className="author">Joel Courtney</em>
            for his own amusement.
          </p>
          <p className="copyright">&copy; 2011</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;

import { useState } from 'react';
import { Container, Col, Row, Button } from 'reactstrap';

import "./LandingPage.css";

const LandingPage = () => {
  const [ btnSize, setBtnSize ] = useState('lg');
  
  window.addEventListener("resize", function(){
    adjustBtnSize();
  });

  function adjustBtnSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 900) {
      setBtnSize('lg');
    }
    if (screenWidth > 600 && screenWidth < 900) {
      setBtnSize(' ');
    }
    if (screenWidth > 0 && screenWidth < 600) {
      setBtnSize('sm');
    }
  };

  return (
    <Container fluid className="landingPic">
      <Row className="landing-btn-row">
        <Col xs={{offset: 7, size: 3}} sm={{offset: 8, size: 2}}>
          <Button size={btnSize} color="danger" href="/home/" >
            Browse Products
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default LandingPage
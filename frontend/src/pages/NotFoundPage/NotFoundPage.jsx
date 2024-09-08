import { Link } from "react-router-dom";
import CustomNavbar from "../../components/CustomNavBar";
import Categories from "../../components/Categories";
import { Row, Col, List } from "reactstrap";

const NotFoundPage = () => {
  return (
    <div>
      <CustomNavbar />
      <Categories /> 
      <Row className="mt-5 text-center">
        <Col>
          <img
            src={"../images/browser-error-404-icon.svg"}
            width="100%"
            className="coffee-card-img"
          />
        </Col>
      </Row>
      <Row className="text-center">
        <Col col="12">
          <h1 className="mt-5">The requested page cannot be found</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs="12" md={{ size: 6, offset: 3 }}>
          <List className="mb-0">
            <li><h4 className="mb-0">If you reached this error page by typing an address into your web browser, please verify that the spelling is correct and try reloading the page.</h4></li>
            <li className="mt-3"><h4><span>Or, you may wish to return to the </span><Link to="/home">Home</Link><span> page.</span></h4></li>
          </List>
        </Col>  
      </Row>
    </div>
  )
}

export default NotFoundPage
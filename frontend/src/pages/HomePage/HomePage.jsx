import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import {
  Row,
  Col,
  CardImg,
  Card,
  Button,
  CardTitle,
  CardGroup,
  CardBody
} from "reactstrap";
import CustomNavBar from "../../components/CustomNavBar";
import Categories from "../../components/Categories";
import coffeeCategoryImg from "../../assets/images/coffee-category-image.jpg";
import teaCategoryImg from "../../assets/images/tea-category-image.jpg";
import accessoriesCategoryImg from "../../assets/images/accessories-category-img.jpg";


import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <CustomNavBar wishItemsCount="0" cartItemsCount={0}/>
      <Categories />
        <Container fluid className="home-container">
        <CardGroup className="m-4">
              <Card className="m-2">
                <Link to="/coffees">
                  <CardImg
                    top
                    alt="coffee-category-img"
                    src={coffeeCategoryImg}
                    id="coffee-category-img"
                  />
                </Link>
                <CardBody>
                  <CardTitle>
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <h5 className="mb-0">Coffee Collections</h5>
                      </Col>
                      <Col xs="auto" className="text-start">
                      <Link to="/coffees">
                        <Button className="ml-3" color="danger">
                          Shop Now !
                        </Button>
                      </Link>
                      </Col>
                    </Row>
                  </CardTitle>
                </CardBody>
              </Card>
              <Card  className="m-2">
                <Link to="/teas">
                  <CardImg
                    top
                    alt="tea-category-img"
                    src={teaCategoryImg}
                    id="tea-category-img"
                  />
                </Link>
                <CardBody>
                  <CardTitle>
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <h5 className="mb-0">Tea Collections</h5>
                      </Col>
                      <Col xs="auto" className="text-start">
                      <Link to="/teas">
                        <Button className="ml-3" color="danger">
                          Shop Now !
                        </Button>
                      </Link>
                    </Col>
                    </Row>
                  </CardTitle>
                </CardBody>
              </Card>
              <Card  className="m-2">
                <Link to="/accessories">
                  <CardImg
                    top
                    alt="accessories-category-img"
                    src={accessoriesCategoryImg}
                    id="accessories-category-img"
                  />
                </Link>
                <CardBody>
                  <CardTitle>
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <h5 className="mb-0">Accessories</h5>
                      </Col>
                      <Col xs="auto" className="text-start">
                        <Link to="/accessories">
                          <Button className="ml-3" color="danger">
                            Shop Now !
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </CardTitle>
                </CardBody>
              </Card>
            </CardGroup>   
        </Container>
    </div>
  )
}

export default HomePage

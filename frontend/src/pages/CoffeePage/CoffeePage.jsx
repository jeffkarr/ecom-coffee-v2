import { useState, useEffect } from 'react'
import CustomNavbar from "../../components/CustomNavBar";
import Categories from "../../components/Categories";
import Wrapper from "../../components/Wrapper";
import { Container } from "reactstrap";
import { Card, CardImg, CardBody, Button } from "reactstrap";
import { Row, Col, Form, Input } from "reactstrap";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import "./CoffeePage.css";

const CoffeePage = () => {
  const [coffees, setCoffees] = useState([]);
  const [coffeeQty, setCoffeeQty] = useState(1);
  const [isScreenExtraSmall, setIsScreenExtraSmall] = useState(false);
  
  useEffect( () => {

    const fetchCoffeeItems = async () => {
      try {
        const res = await fetch('http://localhost:4100/coffeeItems');
        const data = await res.json();
        console.log('--- coffeeItems response data ---');
        console.log(data);

        setCoffees(data.rows);
      } catch (error) {
        console.log('Error fetching coffeeItems', error);
        setCoffees([]);
      }
    }
    fetchCoffeeItems();

    function handleResize() {
      const screenIsXs = window.matchMedia('(max-width: 576px)').matches;
      setIsScreenExtraSmall( screenIsXs );
      // console.log(`screen size is ${dimensions} isScreenExtraSmall ${screenIsXs}`);
    }
  
    window.addEventListener('resize', handleResize);
    return _ => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setCoffeeQty(e.target.value);
  };
 
  const onAddCoffeeToCart = (e) => {
    e.preventDefault();
    let cartCoffeeItemId = e.target.id;
    let cartCoffeeItemQty = coffeeQty;
    let tempCartItem = coffees.filter(coffeeItem => coffeeItem.id === cartCoffeeItemId);
    let cartId = Math.floor(Math.random() * 1000) + 1;
    let newCartItem = {
      cartId: cartId,
      itemId: tempCartItem[0].id,
      category: tempCartItem[0].category,
      name: tempCartItem[0].name,
      price: tempCartItem[0].price,
      description: tempCartItem[0].description,
      image: tempCartItem[0].image,
      quantity: cartCoffeeItemQty
    };
    onAddCoffeeToCart(newCartItem);
    setCoffeeQty(1);
  }

  const onAddCoffeeToWish = (e) => {
    e.preventDefault();
    let wishCoffeeItemId = e.target.id;
    let wishCoffeeItemQty = coffeeQty;
    let tempWishItem = coffees.filter(coffeeItem => coffeeItem.id === wishCoffeeItemId);
    let wishId = Math.floor(Math.random() * 1000) + 1;
    let newWishItem = {
      wishId: wishId,
      itemId: tempWishItem[0].id,
      category: tempWishItem[0].category,
      name: tempWishItem[0].name,
      price: tempWishItem[0].price,
      description: tempWishItem[0].description,
      image: tempWishItem[0].image,
      quantity: wishCoffeeItemQty
    };
    this.props.onAddCoffeeToWish(newWishItem);
    setCoffeeQty(1);
  }

  return (
    <div>
      <CustomNavbar />
      <Categories />    
      <Wrapper >
        { coffees.length > 0 ?
          coffees.map( (item) => (
            <>
            { isScreenExtraSmall ? 
              <div > 
                <Col xl="4" md="6">
                  <Card key={item.id} className="coffee-card">
                    <div>
                      <CardImg
                        src={item.image}
                        className="coffee-card-img"
                      />
                    </div>
                    <div>
                      <CardBody className="text-center coffee-card-body">
                        <div className="card-body-title-area">
                          <h5>{item.name}</h5>
                        </div>
                        <div className="card-body-description-area">
                          <p>
                            <small>{item.description}</small>
                          </p>
                        </div>
                        <div className="card-body-price-area">
                          <h5>$ {item.price} USD</h5>
                        </div>
                      </CardBody>
                    </div>  
                    <Form>
                      <Container fluid className="p-0">
                        <Row className="coffee-qty-area">
                          <p className="mx-3 pt-2 pl-5">
                            <b>Quantity</b>
                          </p>
                          <Col>
                            <Input
                              className="coffee-qty-select"
                              name="coffeeQty"
                              type="select"
                              onChange={handleChange}
                            >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Input>
                          </Col>
                        </Row>
                        <Row className="coffee-btns-area">
                          <Col xs="12" sm="6" className="align-items-center my-2">
                            <Button
                              onClick={onAddCoffeeToWish}
                              name="wishBtn"
                              id={item.id}
                              color="dark"
                              className="btn btn-sm"
                            >
                              <FaHeart className="mx-2"/>
                              Wish List
                            </Button>
                          </Col>
                          <Col xs="12" sm="6" className="align-items-center my-2">
                            <Button
                              onClick={onAddCoffeeToCart}
                              name="cartBtn"
                              id={item.id}
                              color="danger"
                              className="btn btn-sm"
                            >
                              <FaShoppingCart className="mx-2"/>
                              Add to Cart
                            </Button>
                          </Col>
                        </Row>
                      </Container>
                    </Form>
                  </Card>
                </Col>
              </div>
              :
              <div className="wrapper-container"> 
                <Col xl="4" md="6">
                  <Card key={item.id} className="coffee-card">
                    <div>
                      <CardImg
                        src={item.image}
                        className="coffee-card-img"
                      />
                    </div>
                    <div>
                      <CardBody className="text-center coffee-card-body">
                        <div className="card-body-title-area">
                          <h5>{item.name}</h5>
                        </div>
                        <div className="card-body-description-area">
                          <p>
                            <small>{item.description}</small>
                          </p>
                        </div>
                        <div className="card-body-price-area">
                          <h5>$ {item.price} USD</h5>
                        </div>
                      </CardBody>
                    </div>  
                    <Form>
                      <Container fluid className="p-0">
                        <Row className="coffee-qty-area">
                          <p className="mx-3 pt-2 pl-5">
                            <b>Quantity</b>
                          </p>
                          <Col>
                            <Input
                              className="coffee-qty-select"
                              name="coffeeQty"
                              type="select"
                              onChange={handleChange}
                            >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Input>
                          </Col>
                        </Row>
                        <Row className="coffee-btns-area">
                          <Col xs="12" sm="6" className="align-items-center my-2">
                            <Button
                              onClick={onAddCoffeeToWish}
                              name="wishBtn"
                              id={item.id}
                              color="dark"
                              className="btn btn-sm"
                            >
                              <FaHeart className="mx-2"/>
                              Wish List
                            </Button>
                          </Col>
                          <Col xs="12" sm="6" className="align-items-center my-2">
                            <Button
                              onClick={onAddCoffeeToCart}
                              name="cartBtn"
                              id={item.id}
                              color="danger"
                              className="btn btn-sm"
                            >
                              <FaShoppingCart className="mx-2"/>
                              Add to Cart
                            </Button>
                          </Col>
                        </Row>
                      </Container>
                    </Form>
                  </Card>
                </Col>
              </div>
            }
            </>
          ))
        :
          <h6 className="mt-5">No items to display.</h6>
        }
      </Wrapper> 
    </div>
  )
}

export default CoffeePage
import { useState, useEffect } from 'react';

import CustomNavbar from "../../components/CustomNavBar";
import Categories from "../../components/Categories";
import Wrapper from "../../components/Wrapper";
import { Container } from "reactstrap";
import { Card, CardBody, Button } from "reactstrap";
import { Row, Col, Form, Input } from "reactstrap";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import { fetchWishItems } from "../../actions/wishActions";
import { addAccessoryToCart } from "../../actions/cartActions";
import { addAccessoryToWish } from "../../actions/wishActions";

import "./AccessoriesPage.css";

const AccessoriesPage = () => {
  const [accessoryQty, setAccessoryQty] = useState(1);
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {

    const fetchAccessoryItems = async () => {
      try {
        const res = await fetch('http://localhost:4100/getAccessoryItems');
        const data = await res.json();
        console.log('--- accessoryItems response data ---');
        console.log(data.rows);

        setAccessories(data.rows);
      } catch (error) {
        console.log('Error fetching accessoryItems', error);
        setaccessorys([]);
      }
    }
    fetchAccessoryItems();

  }, []);


  const handleChange = () => {
    setAccessoryQty(accessoryQty);
  };

  const onAddAccessoryToCart = (e) => {
    // e.preventDefault();
    // let cartAccessoryItemId = e.target.id;
    // let cartAccessoryItemQty = accessoryQty;
    // let tempCartItem = accessories.filter(accessoryItem => accessoryItem.id === cartAccessoryItemId);
    // let cartId = Math.floor(Math.random() * 1000) + 1;
    // let newCartItem = {
    //   cartId: cartId,
    //   itemId: tempCartItem[0].id,
    //   category: tempCartItem[0].category,
    //   name: tempCartItem[0].name,
    //   price: tempCartItem[0].price,
    //   description: tempCartItem[0].description,
    //   image: tempCartItem[0].image,
    //   quantity: cartAccessoryItemQty
    // };
    // onAddAccessoryToCart(newCartItem);
    // setAccessoryQty(1);
  };

  const onAddAccessoryToWish = (e) => {
    // e.preventDefault();
    // let wishAccessoryItemId = e.target.id;
    // let wishAccessoryItemQty = accessoryQty;
    // let tempWishItem = accessories.filter(accessoryItem => accessoryItem.id === wishAccessoryItemId);
    // let wishId = Math.floor(Math.random() * 1000) + 1;
    // let newWishItem = {
    //   wishId: wishId,
    //   itemId: tempWishItem[0].id,
    //   category: tempWishItem[0].category,
    //   name: tempWishItem[0].name,
    //   price: tempWishItem[0].price,
    //   description: tempWishItem[0].description,
    //   image: tempWishItem[0].image,
    //   quantity: wishAccessoryItemQty
    // };
    // onAddAccessoryToWish(newWishItem);
    // setAcceesoryQty(1);
  };


  return (
    <div>
      <CustomNavbar />
      <Categories />
      <Wrapper>
      {accessories.length > 0 ?
        accessories.map(item => (
          <>
            <Card key={item.id} className="accessory-card mt-5">
              <div className="m-3">
                <div className="accessory-img-container">
                  <img
                    src={item.image}
                    alt={item.image}
                    width="100%"
                    className="accessory-card-img"
                  />
                </div>
                <div>
                  <CardBody className="text-center">
                    <Row>
                      <Col>
                        <h5>{item.name}</h5>
                      </Col>
                    </Row>
                    <Row className="accessory-description-area">
                      <Col>
                        <p>{item.description}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h5>$ {item.price} USD</h5>
                      </Col>
                    </Row>
                  </CardBody>
                </div>
                <Form>
                  <Container>
                    <Row className="accessory-qty-area">
                      <p>
                        <b>Quantity</b>
                      </p>
                    </Row>
                    <Row>
                      <Col className="px-0">
                        <Input
                          className="accessory-qty-select"
                          name="accessoryQty"
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
                    <Row className="accessory-btn-area text-center mt-3">
                      <Col xs="12" sm="6" className="align-items-center my-2">
                        <Button
                          onClick={onAddAccessoryToWish}
                          name="wishBtn"
                          id={item.id}
                          color="danger"
                          className="btn btn-sm"
                        >
                          <FaHeart className="mx-2" />
                          Wish List
                        </Button>
                      </Col>
                      <Col xs="12" sm="6" className="align-items-center my-2">
                        <Button
                          onClick={onAddAccessoryToCart}
                          name="cartBtn"
                          id={item.id}
                          color="danger"
                          className="btn btn-sm"
                        >
                          <FaShoppingCart className="mx-2" />
                          Add to Cart
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </Form>
              </div>
            </Card>
          </>
        ))
        :
        <h6 className="mt-5"> No items to display.</h6>
      }
      </Wrapper>
    </div>
  )
}

export default AccessoriesPage
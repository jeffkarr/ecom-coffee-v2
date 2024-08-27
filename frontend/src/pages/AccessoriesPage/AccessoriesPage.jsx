import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CustomNavbar from "../../components/CustomNavBar";
import Categories from "../../components/Categories";
import Wrapper from "../../components/Wrapper";
import { Container, Card, CardBody, Button, Row, Col, Form, Input } from "reactstrap";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import { accessoryCartAdd } from '../../slices/cartSlice';
import { accessoryWishAdd } from '../../slices/wishSlice';

import "./AccessoriesPage.css";

const AccessoriesPage = () => {
  const [accessoryQty, setAccessoryQty] = useState(1);
  const [accessories, setAccessories] = useState([]);

  const dispatch = useDispatch();

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
        setAccessories([]);
      }
    }
    fetchAccessoryItems();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setAccessoryQty(e.target.value);
  };

  const onAddAccessoryToCart = (e) => {
    e.preventDefault();
    const cartAccessoryItemId = e.target.id;
    const cartAccessoryItemQty = accessoryQty;
    const tempCartItem = accessories.filter(accessoryItem => accessoryItem.id === cartAccessoryItemId);
    const cartId = Math.floor(Math.random() * 1000) + 1;
    const newCartItem = {
      cartId: cartId,
      itemId: tempCartItem[0].id,
      category: tempCartItem[0].category,
      name: tempCartItem[0].name,
      price: tempCartItem[0].price,
      description: tempCartItem[0].description,
      image: tempCartItem[0].image,
      quantity: cartAccessoryItemQty
    };
    dispatch(accessoryCartAdd(newCartItem));
    setAccessoryQty(1);
  };

  const onAddAccessoryToWish = (e) => {
    e.preventDefault();
    const wishAccessoryItemId = e.target.id;
    const wishAccessoryItemQty = accessoryQty;
    const tempWishItem = accessories.filter(accessoryItem => accessoryItem.id === wishAccessoryItemId);
    const wishId = Math.floor(Math.random() * 1000) + 1;
    const newWishItem = {
      wishId: wishId,
      itemId: tempWishItem[0].id,
      category: tempWishItem[0].category,
      name: tempWishItem[0].name,
      price: tempWishItem[0].price,
      description: tempWishItem[0].description,
      image: tempWishItem[0].image,
      quantity: wishAccessoryItemQty
    };
    dispatch(accessoryWishAdd(newWishItem))
    setAccessoryQty(1);
  };

  return (
    <div>
      <CustomNavbar />
      <Categories />
      <Wrapper>
      {accessories.length > 0 ?
        accessories.map(item => (
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
        ))
      :
        <h6 className="mt-5"> No items to display.</h6>
      }
      </Wrapper>
    </div>
  )
}

export default AccessoriesPage
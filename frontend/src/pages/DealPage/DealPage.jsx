import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import CustomNavbar from "../../components/CustomNavBar";
import Categories from "../../components/Categories";
import Wrapper from "../../components/Wrapper";
import { Container } from "reactstrap";
import { Card, CardBody, Button } from "reactstrap";
import { Row, Col, Form, Input } from "reactstrap";
import { FaHeart, FaShoppingCart } from "react-icons/fa"; 

import { dealCartAdd } from '../../slices/cartSlice';
import { dealWishAdd } from '../../slices/wishSlice';

import "./DealPage.css";

const DealPage = ( ) => {
  const [dealQty, setDealQty] = useState(1);
  const [deals, setDeals] = useState([]);

  const dispatch = useDispatch();

  useEffect( () => {
    const fetchDealItems = async () => {
      try {
        const res = await fetch('http://localhost:4100/getDealItems');
        const data = await res.json();
        console.log('--- dealItems response data ---');
        console.log(data.rows);

        setDeals(data.rows);
      } catch (error) {
        console.log('Error fetching dealItems', error);
        setDeals([]);
      }
    }
    fetchDealItems();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setDealQty(e.target.value);
  };

  const onAddDealToCart= (e) => {
    e.preventDefault();
    const cartDealItemId = e.target.id;
    const cartDealItemQty = dealQty;
    const tempCartItem = deals.filter(dealItem => dealItem.id === cartDealItemId);
    const cartId = Math.floor(Math.random() * 1000) + 1;
    const newCartItem = {
      cartId: cartId,
      itemId: tempCartItem[0].id,
      category: tempCartItem[0].category,
      name: tempCartItem[0].name,
      price: tempCartItem[0].price,
      description: tempCartItem[0].description,
      image: tempCartItem[0].image,
      quantity: cartDealItemQty
    };
    dispatch(dealCartAdd(newCartItem));
    setDealQty(1);
  }

  const onAddDealToWish = (e) => {
    e.preventDefault();
    const wishDealItemId = e.target.id;
    const wishDealItemQty = dealQty;
    const tempWishItem = deals.filter(dealItem => dealItem.id === wishDealItemId);
    const wishId = Math.floor(Math.random() * 1000) + 1;
    const newWishItem = {
      wishId: wishId,
      itemId: tempWishItem[0].id,
      category: tempWishItem[0].category,
      name: tempWishItem[0].name,
      price: tempWishItem[0].price,
      description: tempWishItem[0].description,
      image: tempWishItem[0].image,
      quantity: wishDealItemQty
    };
    dispatch(dealWishAdd(newWishItem))
    setDealQty(1);
  }

  return (
    <div>
      <CustomNavbar />
      <Categories />
      <Wrapper >
      { deals.length > 0 ?
        deals.map(item => (
          <Card key={item.id} className="deal-card mt-5">
            <div className="m-3">
              <div className="deal-img-container">
                <div className="deal-overlay"></div>
                <div className="deal-logo">Hot Deal !</div>
                <img
                  src={item.image}
                  alt={item.image}
                  width="100%"
                  className="deal-card-img"
                />
              </div>
              <div>
                <CardBody className="text-center">
                  <Row>
                    <Col>
                      <h5>{item.name}</h5>
                    </Col>
                  </Row>
                  <Row className="deal-description-area">
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
                  <Row className="deal-qty-area">
                    <p>
                      <b>Quantity</b>
                    </p>
                  </Row>
                  <Row>
                    <Col className="px-0">
                      <Input
                        className="deal-qty-select"
                        name="dealQty"
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
                  <Row className="deal-btn-area text-center mt-3">
                    <Col xs="12" sm="6" className="align-items-center my-2">
                      <Button
                        onClick={onAddDealToWish}
                        name="wishBtn"
                        id={item.id}
                        color="danger"
                        className="btn btn-sm"
                      >
                        <FaHeart className="mx-2"/>
                        Wish List
                      </Button>
                    </Col>
                    <Col xs="12" sm="6" className="align-items-center my-2">
                      <Button
                        onClick={onAddDealToCart}
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


export default DealPage

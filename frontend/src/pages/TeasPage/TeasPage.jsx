import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CustomNavbar from "../../components/CustomNavBar";
import Categories from "../../components/Categories";
import Wrapper from "../../components/Wrapper";
import { Container } from "reactstrap";
import { Card, CardBody, Button } from "reactstrap";
import { Row, Col, Form, Input } from "reactstrap";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import { teaCartAdd } from '../../slices/cartSlice';
import { teaWishAdd } from '../../slices/wishSlice';

import "./TeasPage.css";

const TeasPage = () => {
  const [teaQty, setTeaQty] = useState(1);
  const [teas, setTeas] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTeaItems = async () => {
      try {
        const res = await fetch('http://localhost:4100/getTeaItems');
        const data = await res.json();
        console.log('--- teaItems response data ---');
        console.log(data.rows);

        setTeas(data.rows);
      } catch (error) {
        console.log('Error fetching teaItems', error);
        setTeas([]);
      }
    }
    fetchTeaItems();
  }, []);


  const handleChange = (e) => {
    e.preventDefault();
    setTeaQty(e.target.value);
  };

  const onAddTeaToCart = (e) => {
    e.preventDefault();
    const cartTeaItemId = e.target.id;
    const cartTeaItemQty = teaQty;
    const tempCartItem = teas.filter( teaItem => teaItem.id === cartTeaItemId );
    const cartId = Math.floor(Math.random() * 1000) + 1;
    const newCartItem = {
      cartId: cartId,
      itemId: tempCartItem[0].id,
      category: tempCartItem[0].category,
      name: tempCartItem[0].name,
      price: tempCartItem[0].price,
      description: tempCartItem[0].description,
      image: tempCartItem[0].image,
      quantity: cartTeaItemQty
    };
    dispatch(teaCartAdd(newCartItem));
    setTeaQty(1);
  };

  const onAddTeaToWish = (e) => {
    e.preventDefault();
    const wishTeaItemId = e.target.id;
    const wishTeaItemQty = teaQty;
    const tempWishItem = teas.filter( teaItem => teaItem.id === wishTeaItemId );
    const wishId = Math.floor(Math.random() * 1000) + 1;
    const newWishItem = {
      wishId: wishId,
      itemId: tempWishItem[0].id,
      category: tempWishItem[0].category,
      name: tempWishItem[0].name,
      price: tempWishItem[0].price,
      description: tempWishItem[0].description,
      image: tempWishItem[0].image,
      quantity: wishTeaItemQty
    };
    dispatch(teaWishAdd(newWishItem))
    setTeaQty(1);
  }

  return (
    <div>
      <CustomNavbar />
      <Categories />
      <Wrapper>
        {teas.length > 0 ?
          teas.map(item => (
            <Card key={item.id} className="tea-card mt-5">
              <div className="m-3">
                <div className="tea-img-container">
                  <img
                    src={item.image}
                    alt={item.image}
                    width="100%"
                    className="tea-card-img"
                  />
                </div>
                <div>
                  <CardBody className="text-center">
                    <Row>
                      <Col>
                        <h5>{item.name}</h5>
                      </Col>
                    </Row>
                    <Row className="tea-description-area">
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
                    <Row className="tea-qty-area">
                      <p>
                        <b>Quantity</b>
                      </p>
                    </Row>
                    <Row>
                      <Col className="px-0">
                        <Input
                          className="tea-qty-select"
                          name="teaQty"
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
                    <Row className="tea-btn-area text-center mt-3">
                      <Col xs="12" sm="6" className="align-items-center my-2">
                        <Button
                          onClick={onAddTeaToWish}
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
                          onClick={onAddTeaToCart}
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

export default TeasPage
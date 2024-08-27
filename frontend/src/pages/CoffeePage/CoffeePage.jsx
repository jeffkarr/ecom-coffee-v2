import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import CustomNavbar from "../../components/CustomNavBar";
import Categories from "../../components/Categories";
import Wrapper from "../../components/Wrapper";
import { Container } from "reactstrap";
import { Card, CardBody, Button } from "reactstrap";
import { Row, Col, Form, Input } from "reactstrap";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import { coffeeCartAdd } from '../../slices/cartSlice';
import { coffeeWishAdd } from '../../slices/wishSlice';

import "./CoffeePage.css";

const CoffeePage = () => {
  const [coffees, setCoffees] = useState([]);
  const [coffeeQty, setCoffeeQty] = useState(1);
  
  const dispatch = useDispatch();

  useEffect( () => {

    const fetchCoffeeItems = async () => {
      try {
        const res = await fetch('http://localhost:4100/coffeeItems');
        const data = await res.json();
        setCoffees(data.rows);

      } catch (error) {
        console.log('Error fetching coffeeItems', error);
        setCoffees([]);
      }
    }
    fetchCoffeeItems();

  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setCoffeeQty(e.target.value);
  };
 
  const onAddCoffeeToCart = (e) => {
    e.preventDefault(e);
    const cartCoffeeItemId = e.target.id;
    const cartCoffeeItemQty = coffeeQty;
    const tempCartItem = coffees.filter(coffeeItem => coffeeItem.id === cartCoffeeItemId);
    const cartId = Math.floor(Math.random() * 1000) + 1;
    const newCartItem = {
      cartId: cartId,
      itemId: tempCartItem[0].id,
      category: tempCartItem[0].category,
      name: tempCartItem[0].name,
      price: tempCartItem[0].price,
      description: tempCartItem[0].description,
      image: tempCartItem[0].image,
      quantity: cartCoffeeItemQty
    };

    dispatch(coffeeCartAdd(newCartItem))

    setCoffeeQty(1);
  }

  const onAddCoffeeToWish = (e) => {
    e.preventDefault();
    const wishCoffeeItemId = e.target.id;
    const wishCoffeeItemQty = coffeeQty;
    const tempWishItem = coffees.filter(coffeeItem => coffeeItem.id === wishCoffeeItemId);
    const wishId = Math.floor(Math.random() * 1000) + 1;
    const newWishItem = {
      wishId: wishId,
      itemId: tempWishItem[0].id,
      category: tempWishItem[0].category,
      name: tempWishItem[0].name,
      price: tempWishItem[0].price,
      description: tempWishItem[0].description,
      image: tempWishItem[0].image,
      quantity: wishCoffeeItemQty
    };
    dispatch(coffeeWishAdd(newWishItem))
    setCoffeeQty(1);
  }

  return (
    <div>
      <CustomNavbar />
      <Categories />    
      <Wrapper >
        { coffees.length > 0 ?
          coffees.map( item => (
            <Card key={item.id} className="coffee-card mt-5">
              <div className="m-4">
                <div className="coffee-image-container">
                  <img
                    src={item.image}
                    width="100%"
                    className="coffee-card-img"
                  />
                </div>
                <div>
                  <CardBody className="text-center coffee-card-body">
                    <Row>
                      <Col>
                        <h5>{item.name}</h5>
                      </Col>
                    </Row>
                    <Row className="coffee-description-area">
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
                    <Row className="coffee-qty-area">
                      <p><b>Quantity</b></p>
                      <Col className="px-0">
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
                    <Row className="coffee-btns-area text-center mt-3">
                      <Col xs="12" sm="6" className="align-items-center my-2">
                        <Button
                          onClick={onAddCoffeeToWish}
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
              </div>
            </Card>
          ))
        :
          <h6 className="mt-5">No items to display.</h6>
        }
      </Wrapper> 
    </div>
  )
}

export default CoffeePage
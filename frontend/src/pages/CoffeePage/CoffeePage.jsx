import { useState, useEffect } from 'react'
import CustomNavbar from "../../components/CustomNavBar";
import Categories from "../../components/Categories";
import Wrapper from "../../components/Wrapper";
import { Container } from "reactstrap";
import { Card, CardBody, Button } from "reactstrap";
import { Row, Col, Form, Input } from "reactstrap";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import "./CoffeePage.css";

const CoffeePage = () => {
  const [coffees, setCoffees] = useState([]);
  const [coffeeQty, setCoffeeQty] = useState(1);
  
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
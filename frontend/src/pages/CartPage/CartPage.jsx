
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import CustomNavbar from "../../components/CustomNavBar";
import Categories from "../../components/Categories";

import { Button, Container, Form, Input, Row, Col, Navbar, Table } from "reactstrap";
import { FaRegTrashAlt  } from "react-icons/fa";

import { getCartCosts, removeCartItem, cartCheckout } from '../../slices/cartSlice';
import { wishCheckout } from '../../slices/wishSlice';

import "./CartPage.css";

const CartPage = () => {

  const dispatch = useDispatch();

  const cartItemsList = useSelector( state => state.cart.cartItems, shallowEqual);

  const cartCosts = useSelector( cartItemsList => getCartCosts(cartItemsList));

  const onSendOrder = () => {
    dispatch(cartCheckout());
    dispatch(wishCheckout()); 
    alert("Thank you for your order !");
  };

  const onRemoveCartItem = (e) => {
    e.preventDefault();
    let removeCartId = e.currentTarget.id;
    dispatch(removeCartItem(removeCartId))
  }

  return (
    <div>
      <CustomNavbar />
      <Categories />
      <Container fluid>
        <Navbar color="light" light id="shoppingNav">
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h2 id="shopping">Your Shopping Cart</h2>
          </Col>
        </Navbar>
        <Container fluid>
          <Row>
            <Col lg="7" className="cart-area">
              <Container>
                <h2 className="mb-4 text-center">Your Order</h2>
                <div>
                  <Table striped responsive >
                    { cartItemsList.length === 0  ?
                      <tbody />
                    :
                      <thead>
                        <tr className="text-center">
                          <th />
                          <th>Item</th>
                          <th>Quantity</th>
                          <th>Item Price ($)</th>
                          <th>Cost ($)</th>
                        </tr>
                      </thead>
                    }
                    { cartItemsList.length === 0  ?
                      <tbody className="text-center">
                        <tr>
                          <td>
                            <h5 className="mt-3">No items in cart.</h5>
                          </td>
                        </tr>
                      </tbody>
                    :
                      <tbody>
                        { 
                          cartItemsList.map( item => (
                            <tr className="text-center align-middle" key={item.cartId}>
                              <th scope="row">
                                <Button color="light" size="md" id={item.cartId} onClick={onRemoveCartItem}>
                                  <FaRegTrashAlt id={item.cartId} />
                                </Button>
                              </th>
                              <td>
                                <p className="pt-2">{item.name}</p>
                              </td>
                              <td>
                                <p className="pt-2">{item.quantity}</p>
                              </td>
                              <td>
                                <p className="pt-2">{item.price}</p>
                              </td>
                              <td>
                                <p className="pt-2">
                                  {(parseInt(item.price) * parseInt(item.quantity)).toFixed(2)}
                                </p>
                              </td>
                            </tr>
                          ))
                        } 
                      </tbody>
                    }
                    {cartItemsList.length === 0 ? 
                      <tbody /> 
                    : 
                      <tbody>
                        <tr className="text-center">
                          <th />
                          <th />
                          <th />
                          <th>Subtotal ($)</th>
                          <td>{(cartCosts.subtotal).toFixed(2)}</td>
                        </tr>
                        <tr className="text-center">
                          <th />
                          <th />
                          <th />
                          <th> + Shipping Fee ($)</th>
                          <td> 10.00</td>
                        </tr>
                        <tr className="text-center">
                          <th />
                          <th />
                          <th />
                          <th> Your Total Cost ($)</th>
                          <td>
                            {(cartCosts.total).toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    }
                  </Table>
                </div>
              </Container>
            </Col>
            <Col lg="5" className="billingForm">
              <Container>
                <h2 className="mb-4 text-center">Billing Information</h2>
                <Form>
                  <Input type="text" name="first-name" id="firstName" placeholder="First Name" />
                  <br />
                  <Input type="text" name="last-name" id="lastName" placeholder="Last Name" />
                  <br />
                  <Input type="email" name="email" id="email" placeholder="Email" />
                  <br />
                  <Input type="text" name="address" id="address" placeholder="Address" />
                  <br />
                  <Input type="text" name="city" id="city" placeholder="City" />
                  <br />
                  <Input type="text" name="state" id="state" placeholder="State" />
                  <br />
                  <Input type="text" name="zipcode" id="zipcode" placeholder="ZIP code" />
                  <br />
                  <Input type="text" name="telephone" id="telephone" placeholder="Telephone Number" />
                </Form>
                <div className="ml-4 mt-3">
                  <Input type="checkbox" id="create-account" /> Create New Account ?
                  </div>
                <h2 className="mt-4 mb-2 text-center">
                  Shipping Information
                  </h2>
                <div className="ml-4">
                  <Input type="checkbox" id="shipping-address" /> Ship to a different address ?
                  </div>
                <Input type="textarea" name="notes" id="shipping-notes" className="mt-4" placeholder="Any Special Instructions?" />
                <div className="text-center">
                  <Button color="danger" className="mt-4" onClick={onSendOrder}>
                    Place Order
                    </Button>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default CartPage
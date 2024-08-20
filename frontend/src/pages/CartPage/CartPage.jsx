import { useState } from 'react';

import CustomNavbar from "../../components/CustomNavBar";
import Categories from "../../components/Categories";

import { Button, Container, Form, Input, Row, Col, Navbar, Table } from "reactstrap";

import "./CartPage.css";

const CartPage = () => {
  const [cartListItems, setCartListItems] = useState([]);

  const onSendOrder = () => {
    alert("Thank you for your order !");
    //TODO: rework this to use Alert component
  };

  const onRemoveCartItem = (e) => {
    e.preventDefault();
    // let removeCartId = e.target.id;
    // this.props.onRemoveCartItem(removeCartId);
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
                  <Table striped className="table-responsive-md">
                    {!cartListItems.length ?
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
                    {!cartListItems.length ?
                      <tbody className="text-center">
                        <tr>
                          <td>
                            <h5 className="mt-3">No items in cart.</h5>
                          </td>
                        </tr>
                      </tbody>
                    :
                      <tbody>
                        {cartListItems.map(item => {
                          return 
                            <tr className="text-center" key={item.cartId}>
                            <th scope="row">
                              <div className="trash-can-div">
                                Remove
                                  </div>
                              <Button size="sm" data-toggle="tooltip" data-placement="top" title="Remove Item" id={item.cartId} className="remove-cart-item-btn" onClick={onRemoveCartItem}>
                                <i className="fas fa-trash" id={item.cartId} />
                              </Button>
                            </th>
                            <td className="table-item-name">
                              <p>{item.name}</p>
                            </td>
                            <td>
                              <p>{item.quantity}</p>
                            </td>
                            <td>
                              <p>{item.price}</p>
                            </td>
                            <td>
                              <p>
                                {(item.price * item.quantity).toFixed(
                                  2
                                )}
                              </p>
                            </td>
                          </tr>;
                        })}
                      </tbody>
                    }
                    {!cartListItems.length ? 
                      <tbody /> 
                    : <tbody>
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
                <h2 className="mb-4 text-center">
                  Billing Information
                  </h2>
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
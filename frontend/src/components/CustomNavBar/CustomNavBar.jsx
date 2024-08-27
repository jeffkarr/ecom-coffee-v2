import { useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Badge } from "reactstrap";
import { Row, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FaCoffee, FaHeart, FaShoppingCart } from "react-icons/fa";

import { getCartCosts } from '../../slices/cartSlice';

import "./CustomNavBar.css"

const CustomNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartModal, setCartModal] = useState(false); 
  const [wishModal, setWishModal] = useState(false);

  const cartItemsCount = useSelector( state => state.cart.cartItems.length, shallowEqual);

  const cartItemsList = useSelector( state => state.cart.cartItems, shallowEqual);

  const cartCosts = useSelector( cartItemsList => getCartCosts(cartItemsList));

  const wishItemsCount = useSelector( state => state.wish.wishItems.length, shallowEqual);

  const wishListItems = useSelector( state => state.wish.wishItems, shallowEqual);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); 
  }
  const toggleWishModal = () => {
    setWishModal(!wishModal);
  };
  const toggleCartModal = () => {
    setCartModal(!cartModal);
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" className="ml-1">
          <FaCoffee className="mx-2"/>
          Karr's Coffee & Tea Company
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <NavbarToggler onClick={toggleNavbar} />
          <Nav className="ml-auto" navbar>
            <NavItem className="align-item-center">
              <NavLink onClick={toggleWishModal} className="mr-3">
                <Row>
                  <FaHeart color='red' /> 
                  <Badge color="dark" className="ml-2 mt-1">
                    {wishItemsCount}
                  </Badge>
                </Row>
                <Row><p className="text-white mb-0">Your Wishlist</p></Row>
              </NavLink>
            </NavItem>
            <NavItem className="align-item-center">
              <NavLink onClick={toggleCartModal} className="mx-5">
                <Row>
                  <FaShoppingCart color='white'/>
                  <Badge color="dark" className="ml-2 mt-1">
                    {cartItemsCount}
                  </Badge>
                </Row>
                <Row><p className="text-white mb-0">Your Cart</p></Row>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Modal isOpen={wishModal} toggle={toggleWishModal}>
        <ModalHeader toggle={toggleWishModal}>
          Your Wish List
        </ModalHeader>
        <ModalBody>
          {wishListItems.length > 0 ?
            (
              <Table borderless className="wish-modal-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Item Price($)</th>
                    <th>Cost($)</th>
                  </tr>
                </thead>
                <tbody>
                  {wishListItems.map(item => (
                    <tr key={item.wishId}>
                      <td>
                        <p>{item.name}</p>
                      </td>
                      <td className="text-center">
                        <p>{item.quantity}</p>
                      </td>
                      <td>
                        <p>{item.price}</p>
                      </td>
                      <td>
                        <p>{(item.quantity * item.price).toFixed(2)}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )
            :
            (
              <h6 className="mt-3">No items on wish list.</h6>
            )
          }
        </ModalBody>
        <ModalFooter>
          <Button color="danger" href="/wish">
            Edit Wishlist
          </Button>
          <Button color="dark" onClick={toggleWishModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      
      <Modal isOpen={cartModal} toggle={toggleCartModal}>
        <ModalHeader toggle={toggleCartModal}>
          Your Shopping Cart
        </ModalHeader>
        <ModalBody >
          {cartItemsList.length > 0 ? 
            (
              <Table borderless className="cart-modal-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Item Price($)</th>
                    <th>Cost($)</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItemsList.map(item => (
                    <tr key={item.cartId}>
                      <td>
                      <p>{item.name}</p>
                      </td>
                      <td className="text-center">
                        <p>{item.quantity}</p>
                      </td>
                      <td>
                        <p>{item.price}</p>
                      </td>
                      <td>
                        <p>{(item.quantity * item.price).toFixed(2)}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th />
                    <th />
                    <th>Subtotal($)</th>
                    <td>{cartCosts.subtotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <th />
                    <th className="text-right"> + </th>
                    <th>Shipping Fee ($)</th>
                    <td> 10.00</td>
                  </tr>
                  <tr>
                    <th />
                    <th />
                    <th> Your Total Cost ($)</th>
                    <td>{cartCosts.total.toFixed(2)}</td>
                  </tr>
                </tfoot>
              </Table>
            )
            :
            (
              <h6 className="mt-3">No items in cart.</h6>
            )
          }
        </ModalBody>
        <ModalFooter>
          <Button color="danger" href="/cart">
            Edit Cart
          </Button>
          <Button color="dark" onClick={toggleCartModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default CustomNavBar
import { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge
} from "reactstrap";
import { Row } from "reactstrap";
import { Table } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FaCoffee, FaHeart, FaShoppingCart } from "react-icons/fa";

import "./CustomNavBar.css"

const CustomNavBar = ({wishItemsCount, cartItemsCount}) => {
  const [cartModal, setCartModal] = useState(false); 
  const [wishModal, setWishModal] = useState(false);

  const toggleWishModal = (e)=> {
    e.preventDefault();
    setWishModal(!wishModal);
  };
  const toggleCartModal = (e)=> {
    e.preventDefault();
    setCartModal(!cartModal);
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" className="ml-1">
          <FaCoffee className="mx-2"/>
          Karr's Coffee & Tea Company
        </NavbarBrand>
        <Collapse navbar className="justify-content-end">
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
    </div>

  )
}

export default CustomNavBar
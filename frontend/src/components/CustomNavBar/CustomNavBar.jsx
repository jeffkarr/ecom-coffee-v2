import { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
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

const CustomNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartModal, setCartModal] = useState(false); 
  const [wishModal, setWishModal] = useState(false);

  const toggle = ()=> {
    setIsOpen(!isOpen)
  };
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
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <NavbarToggler onClick={toggle} />
            <Nav className="ml-auto " navbar>
              <NavItem>
                <NavLink onClick={toggleWishModal} className="mr-3">
                  <Row>
                    <FaHeart /> 
                    {/* <Badge color="danger" className="ml-2">
                      {wishItemsCount}
                    </Badge> */}
                  </Row>
                  <Row>Your Wishlist</Row>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={toggleCartModal} className="mx-5">
                  <Row>
                    <FaShoppingCart />
                    {/* <Badge color="danger" className="ml-2">
                      {cartItemsCount}
                    </Badge> */}
                  </Row>
                  <Row>Your Cart</Row>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>

      </Navbar>
    </div>

  )
}

export default CustomNavBar
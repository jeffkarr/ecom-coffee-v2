import {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import "./Categories.css";

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="white" light expand="md" className="category-navbar">
        <Nav navbar>
          <NavItem className="category-nav-item">
            <NavLink href="/home" className="mx-4">
              Home
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem className="category-nav-item">
              <NavLink href="/deals" className="mx-4">
                Hot Deals
              </NavLink>
            </NavItem>
            <NavItem className="category-nav-item">
              <NavLink href="/coffees" className="mx-4">
                Coffees
              </NavLink>
            </NavItem>
            <NavItem className="category-nav-item">
              <NavLink href="/teas" className="mx-4">
                Teas
              </NavLink>
            </NavItem>
            <NavItem className="category-nav-item">
              <NavLink href="/accessories" className="mx-4 ">
                Accessories
              </NavLink>
            </NavItem>
            <NavItem className="category-nav-item">
              <NavLink href="/wish" className="mx-4">
                Wish List
              </NavLink>
            </NavItem>
            <NavItem className="category-nav-item">
              <NavLink href="/cart" className="ml-4">
                Shopping Cart
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Categories
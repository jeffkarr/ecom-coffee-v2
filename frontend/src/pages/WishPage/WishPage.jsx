import { useState } from 'react';

import CustomNavbar from "../../components/CustomNavBar";
import Categories from "../../components/Categories";

import { Button, Container, Col, Navbar, Table } from "reactstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

import "./WishPage.css";

const WishPage = () => {
  const [wishListItems, setWishListItems] = useState([
  ]);

  return (
    <div>
      <CustomNavbar />
      <Categories />
      <Container>
        <Navbar color="light" light id="wishlistNav">
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h2 id="wishlist">Your Wish List</h2>
          </Col>
        </Navbar>
      </Container>
      <Container className="wishlist-container">
        <Table className="wishlist-table table-responsive-md">
          {!wishListItems.length ? 
            <tbody /> 
          : <thead>
              <tr className="text-center">
                <th />
                <th />
                <th />
                <th>Item</th>
                <th>Quantity</th>
                <th>Item Price ($)</th>
                <th>Cost ($)</th>
              </tr>
            </thead>
          }
          {!wishListItems.length ? 
            <tbody className="text-center">
              <tr>
                <td className="pt-4">
                  <h5>No items on wish list.</h5>
                </td>
              </tr>
            </tbody> 
          : <tbody>
            {wishListItems.map(item => {
              return (
                <tr className="text-center" key={item.wishId}>
                  <td className="text-center align-middle">
                    <div className="add-wish-item-to-cart-div" />
                    <Button 
                      size="sm" data-toggle="tooltip" 
                      data-placement="top" 
                      title="Add Item to Cart" 
                      id={item.wishId} 
                      className="add-wish-to-cart-btn" 
                      onClick={onAddWishItemToCart}
                    >
                      <FaCartPlus id={item.wishId} />
                    </Button>
                  </td>
                  <td className="text-center align-middle">
                    <div className="wish-item-trash-div" />
                    <Button 
                      size="sm" data-toggle="tooltip" 
                      data-placement="top" 
                      title="Remove Item" 
                      id={item.wishId} 
                      className="remove-wish-item-btn" 
                      onClick={onRemoveWishItem}
                    >
                      <FaRegTrashAlt id={item.wishId} />
                    </Button>
                  </td>
                  <td>
                    <img src={item.image} alt="wish-item" className="wish-item-img" />
                  </td>
                  <td>
                    <p>{item.name}</p>
                  </td>
                  <td className="text-center">
                    <p>{item.quantity}</p>
                  </td>
                  <td className="text-center">
                    <p>{item.price}</p>
                  </td>
                  <td className="text-center">
                    <p>{(item.quantity * item.price).toFixed(2)}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>}
        </Table>
      </Container>
    </div>
  )
}

export default WishPage
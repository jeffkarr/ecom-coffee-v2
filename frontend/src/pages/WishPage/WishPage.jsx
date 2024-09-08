
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import CustomNavbar from "../../components/CustomNavBar";
import Categories from "../../components/Categories";

import { Button, Container, Col, Navbar, Table } from "reactstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";


import { removeWishItem } from '../../slices/wishSlice';
import { wishCartAdd } from '../../slices/cartSlice';

import "./WishPage.css";

const WishPage = () => {

  const wishListItems = useSelector( state => state.wish.wishItems, shallowEqual);

  const dispatch = useDispatch();

  const getWishItemById = async (wishId, wishItems) => {
    let wishItem = wishItems.filter(wishTrxn => wishTrxn.wishId === parseInt(wishId));
    return wishItem;
  };

  const buildNewCartItem = async (wishToCartItem) => {
    const cartId = Math.floor(Math.random() * 1000) + 1;
    const newCartItem = {
      cartId: cartId,
      itemId: wishToCartItem[0].itemId,
      category: wishToCartItem[0].category,
      name: wishToCartItem[0].name,
      price: wishToCartItem[0].price,
      description: wishToCartItem[0].description,
      image: wishToCartItem[0].image,
      quantity: wishToCartItem[0].quantity
    };
    return newCartItem;
  }

  const onAddWishItemToCart = async (e) => {
    e.preventDefault();
    const wishId = e.currentTarget.id;
    const wishToCartItem = await getWishItemById(wishId, wishListItems);
    const newCartItemFromWish = await buildNewCartItem(wishToCartItem);

    if (newCartItemFromWish) {
      dispatch(wishCartAdd(newCartItemFromWish));
      setTimeout( () => {
        dispatch(removeWishItem(wishId));
      }, 500);
    } 
  };

  const onRemoveWishItem = (e) => {
    e.preventDefault();
    const removeWishId = e.currentTarget.id;
    dispatch(removeWishItem(removeWishId));
  };

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
            <thead>
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
                      size="sm" 
                      className="add-wish-to-cart-btn" 
                      onClick={onAddWishItemToCart}
                      id={item.wishId}
                    >
                      <FaCartPlus id={item.wishId} />
                    </Button>
                  </td>
                  <td className="text-center align-middle">
                    <div className="wish-item-trash-div" />
                    <Button 
                      size="sm" 
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
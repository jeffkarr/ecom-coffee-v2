import { Button } from "reactstrap";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="card-img">
      <img alt={props.name} src={props.image} onClick={() => props.setClickedTrue(props.id)} />
    </div>
    <div className="card-body">
      <h5>{props.name}</h5>
      <p>{props.description}</p>
      <h5>${props.price}</h5>
    </div>
    <div>
      <row>
        <p>howdy</p>
        {/* <Button
          id={props.itemId}
          color="danger"
          className="btn btn-sm mr-5"
        >
          <FaHeart className="mx-2"/>
          Wish List
        </Button>
        <Button
          onClick={props.addToCart}
          id={props.id}
          color="danger"
          className="m-2 btn btn-sm"
        >
          <FaShoppingCart className="mx-2"/>
          Add to Cart
        </Button> */}
      </row>
    </div>

  </div>
);

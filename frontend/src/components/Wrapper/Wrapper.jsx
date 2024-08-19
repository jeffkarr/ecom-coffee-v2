import { Container } from "reactstrap";
import "./Wrapper.css";

const Wrapper = props => (
  <div className="wrapper-container"> 
    <div className="wrapper">{props.children}</div>
  </div>
);

export default Wrapper
import React from 'react'
import CustomNavbar from "../../components/CustomNavBar";
import Categories from "../../components/Categories";
import { Container } from "reactstrap";


const CoffeePage = () => {
  return (
    <div>
      <CustomNavbar />
      <Categories />    
      <Container fluid className="coffee-container">
        <h1>Coffee Page</h1>
        
      </Container> 
    </div>
  )
}

export default CoffeePage
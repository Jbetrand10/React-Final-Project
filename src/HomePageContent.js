import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"



const HomePageContent = () => {

    return (
        <>
         <h1>Welcome</h1> 
         
        <Card className="text-center col-md-10 mx-auto my-3">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>This is Our Featured Item</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
          <Link to={`/products`} className="btn btn-primary mx-3">Products</Link>
        </Card.Body>
        </Card>
        </>
    )
}

export default HomePageContent
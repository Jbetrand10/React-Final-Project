import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from "react-router-dom"
// import LoadingIndicator from './Loadingindicator'
import Footer from './Footer'
// import logo from '../assets/logo.jpg'

function Home() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
            {/* <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand> */}
            <Navbar.Brand href="#home">Josh's Drum Shop</Navbar.Brand>

                <Nav className="me-auto">
                <Link to="/" className="nav-link">Home</Link>
                    <Link to="/About" className="nav-link">About Us</Link>
                    <Link to="/products" className="nav-link">Products</Link>
                    <Link to="/products/new" className="nav-link">Create Your Set</Link>
                </Nav>
                <Navbar.Text className='me-auto'>
                  
                {/* <LoadingIndicator /> */}
                </Navbar.Text>
            </Container>
        </Navbar>
        <Footer/>
      <Stack gap={3} className="col-md-10 mx-auto mt-3">
        <Outlet />
      </Stack>
      
    </>
  )
}

export default Home
import Card from "react-bootstrap/Card"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"
import { useParams, useNavigate, Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import { useContext, useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'

function Products(props) {

  let params = useParams()
  let navigate = useNavigate()

  let { getProduct, deleteProduct } = useContext(ProductContext)
  let [ product, setProduct ] = useState()
  let [ error, setError ] = useState()

    useEffect(() => {
    setError(null)
    async function fetch() {
        await getProduct(params.productId)
        .then((product) => setProduct(product))
        .catch((message) => setError(message))
    }
    fetch()
    }, [params.productId, getProduct])

 

  function handleDeleteProduct(id) {
    deleteProduct(id)
    navigate('/products')
  }

  function loading() {
    return <div className="w-25 text-center"><Spinner animation="border" /></div>
  }

  function errorMessage() {
    return <Alert variant="danger">There was an error attempting to load the: {error}</Alert>
  }

  function productCard() {
    let { id, productName, description, price } = product
    return (
        <>
          <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{productName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Price: ${price}</Card.Subtitle>
              <Card.Text>
                <strong>Description:</strong> <span>{description}</span>
              </Card.Text>
                <Link to={`/products/${id}/edit`} className="btn btn-primary mx-3">View More</Link>
                <Link to={`/products/${id}/edit`} className="btn btn-primary mx-3">Edit</Link>
                <Button variant="danger" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>


        <Card className="align-self-start w-25">
        {/* <Card.Img variant="top" src={require(`../node_modules/fake-avatars/avatars/${avatar}`).default} /> */}
        <Card.Body>
          <Card.Title>{productName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Price: ${price}</Card.Subtitle>
          <Card.Text>
            <strong>Description:</strong> <span>{description}</span>
          </Card.Text>
          <Link to={`/products/${id}/edit`} className="btn btn-primary mx-3">View More</Link>
          <Link to={`/products/${id}/edit`} className="btn btn-primary mx-3">Edit</Link>
          <Button variant="danger" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
        </Card.Body>
      </Card>
        <br />
       <Card className="align-self-start w-25">
        {/* <Card.Img variant="top" src={require(`../node_modules/fake-avatars/avatars/${avatar}`).default} /> */}
        <Card.Body>
          <Card.Title>{productName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Price: ${price}</Card.Subtitle>
          <Card.Text>
            <strong>Description:</strong> <span>{description}</span>
          </Card.Text>
          <Link to={`/products/${id}/edit`} className="btn btn-primary mx-3">View More</Link>
          <Link to={`/products/${id}/edit`} className="btn btn-primary mx-3">Edit</Link>
          <Button variant="danger" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
        </Card.Body>
      </Card>
        </>
    )
  }
  if (error) return errorMessage()
  if (product === undefined) return loading()
  return product.id !== parseInt(params.productId) ?  loading() : productCard()
}

export default Products
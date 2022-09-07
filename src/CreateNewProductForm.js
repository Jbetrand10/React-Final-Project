import { useState, useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button'
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from './ProductContext';

function CreateNewProductForm() {
  let params = useParams()
  let [ product, setProduct ] = useState({
    id: params.productId,
    productName: "",
    description: "",
    price: "",
    avatar: ""
  })

  let {getProduct, addProduct, updateProduct } = useContext(ProductContext)
  let navigate = useNavigate()
  let { id, productName, description, price, avatar } = product

  useEffect(() => {
    if (id === undefined) return
    async function fetch() {
      await getProduct(id)
        .then((product) => setProduct(product))
    }
    fetch()
  }, [id])

  function handleChange(event) {
    setProduct((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value }})
  }

  function addOrUpdate() {
    if (id === undefined) {
      return addProduct(product)
    } else {
      return updateProduct(product)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    addOrUpdate().then((product) =>
      navigate(`/products/${product.id}`)
    )
  }

  function getAvatar() {
    try {
      return require(`../node_modules/fake-avatars/avatars/${avatar}`)
    } catch {
      return "https://via.placeholder.com/256"
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Image src={getAvatar()} />
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="productName" value={productName} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="description" value={description} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" name="price" value={price} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" name="avatar" value={avatar} onChange={handleChange} />
      </Form.Group>
      <Button type="submit">Save</Button>
    </Form>
  )
}

export default CreateNewProductForm
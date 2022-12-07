import React, {useState, useEffect } from "react";
import { useParams, Link, } from "react-router-dom";
import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { listProductsDetails } from "../actions/productActions";
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
const ProductScreen = () => {
  const [qty,setQty] = useState(0);
  const productDetails = useSelector((state)=> state.productDetails)

  const {loading, error, product} = productDetails;
  let {id} = useParams();
  const dispatch = useDispatch();

  useEffect(()=>{
   dispatch(listProductsDetails(id));

  },[dispatch])

  
  return (
    <>
    <Link className='btn btn-light my-3' to='/'>Go Back</Link>
    {loading ? (
        <Loader /> 
      ) : error ? (
        <Message variant="danger">{error} </Message>
      ) : (
    <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} />
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
          </ListGroup.Item>
          <ListGroup.Item>
            ₹{product.price}
          </ListGroup.Item>
          <ListGroup.Item>
            Description:{product.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>
                price
                </Col>
                <Col>
                <strong>₹{product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
              <Col>Status</Col>
              <Col>{product.countInStock>0 ?'In Stock ': 'Out of Stock'}</Col>
              </Row>
            </ListGroup.Item>
            { product.countInStock >0 &&(
             <ListGroup.Item>
              <Row>
                <Col>Qty</Col>
                <Col>
                <Form.Select value={qty} onChange={(e)=>setQty(e.target.value)}>
                  {
                    [...Array(product.countInStock).keys()].map((x)=> (
                      <option key={x+1} value={x+1}>{x+1}</option>
                    ))
                  }
                </Form.Select>
                </Col>
              </Row>
             </ListGroup.Item>)}

             

            <ListGroup.Item>
              <Row>
              <Button className='btn-block' type='button' disabled={product.countInStock === 0} onClick >
                Add To Cart
              </Button>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
      )
}
    </>
  )
}

export default ProductScreen
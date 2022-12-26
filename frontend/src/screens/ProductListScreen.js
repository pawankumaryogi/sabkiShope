import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions";

function ProductListScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      navigate("/login");
    }
  }, [dispatch, userInfo, navigate]);

  const createProductHandler = () => {};
  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure")) {
      //delete Products dispatch
    }
  };

  return (
    <>
      <Row className="align-items-center ">
        <Col>products</Col>
        <Col>
          <Button onClick={createProductHandler}>
            <i className="fas fa-plus"></i>Add Product
          </Button>
        </Col>
      </Row>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped boardered="true" hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>₹{product.price}</td>
                <td>{product.brand}</td>

                <td>
                  <Link to={`/admin/product/${product._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit" />
                    </Button>
                  </Link>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(product._id)}
                  >
                    <i className="fas fa-trash" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}

export default ProductListScreen;
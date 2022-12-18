import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { useNavigate } from "react-router-dom";
const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const navigate = useNavigate();
  if (!shippingAddress) {
    navigate("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Select Method</Form.Label>
        </Form.Group>
        <Col>
          <Form.Check
            type="radio"
            label="Paypal"
            id="paypal"
            name="paymentMethod"
            value="PayPal"
            checked
            onChange={(e) => {
              setPaymentMethod(e.target.value);
            }}
          ></Form.Check>
          <Form.Check
            type="radio"
            label="UPI"
            id="upi"
            name="paymentMethod"
            value="upi"
            onChange={(e) => {
              setPaymentMethod(e.target.value);
            }}
          ></Form.Check>
          <Form.Check
            type="radio"
            label="Credit Card"
            id="creditCart"
            name="paymentMethod"
            value="creditcart"
            onChange={(e) => {
              setPaymentMethod(e.target.value);
            }}
          ></Form.Check>
          <Form.Check
            type="radio"
            label="RazorPay"
            id="razoprpay"
            name="paymentMethod"
            value="razorpay"
            onChange={(e) => {
              setPaymentMethod(e.target.value);
            }}
          ></Form.Check>
        </Col>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;

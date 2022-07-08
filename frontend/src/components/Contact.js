import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

export default function Contact() {
  return (
    <div className="Container">
      <h1>Contact</h1>
      <br />
      <h3>Leave us a message</h3>
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email" label="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control required />
        </Form.Group>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Comments"
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="Leave a comment here" />
        </FloatingLabel>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

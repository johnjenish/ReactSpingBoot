import React, { useState } from 'react';
import { Form, Button, Row ,Col} from 'react-bootstrap';
import classes from './Dashboard.css';


const EducationLoan = (props) => {
    const [state, setState] = useState({
        username: '',
        email: '',
        city: '',
        phone: ''
      });
     
    

        const handleOnSubmit = (event) => {
        event.preventDefault();
            props.modalStatus(event.target.name)
      };
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };
    
    return(
        <div>
            <h1>Education Loan</h1>
            <Form className="register-form" onSubmit={handleOnSubmit}>    
        <Row>
        
        
        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleInputChange}
          />
        </Form.Group>
               
        <Form.Group controlId="city" as={Col}>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            name="city"
            onChange={handleInputChange}
          />
        </Form.Group>
        
        </Row>
        
        <Row>
                 
        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleInputChange}
          />
        </Form.Group>
               
        <Form.Group controlId="city" as={Col}>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            name="city"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="phone" as={Col}>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone"
            name="phone"
            onChange={handleInputChange}
          />
        </Form.Group>
        
        </Row>
        
        <Button variant="primary" type="submit" >
          Register
        </Button>
      </Form>

     

        </div>
    )
}

export default EducationLoan;
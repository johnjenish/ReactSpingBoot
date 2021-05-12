import React, { useState } from 'react';
import { Form, Button, Row ,Col} from 'react-bootstrap';
import classes from './Register.css';
import BMSService from '../../API/BMSService';
const Register = props => {
     const [state, setState] = useState({
        username: '',
        password: '',
        name : '',
        deposit: ''
      });
    
      const [validated, setValidated] = useState(false);

       const handleSubmit = (event) => {
     
    const { username, password,name,deposit } = state;
    
      let val  = { 
        "username" : username,
        "password" : password,
        "name": name,
        "deposit" :deposit
      
      }

      BMSService.executeRegisterService(val)
    .then(res=> handleSuccess(res))
    .catch(res=> handleError(res)) 
    
    setValidated(true);

    
    
  }; 


  const handleSuccess = (data) => {
    console.log(data) 
    props.history.push({
          pathname: '/dashboard'
     });
  };

 const handleError = (data) =>{
  console.log(data)
  };



    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };
      const {username ,password,name,deposit} = state;
      return (
        <div>
      <h1>Registration Form</h1>
      <form  className="register-form"  >
<Row >
        <Col md="12" style={{marginBottom : "10px"}}>
            <label>Username</label>
            <input style={{marginLeft:"35px"}}
              name="username"
              value ={username}
              onChange={handleInputChange}
              placeholder="User name" required maxLength ="10"
            />
             
          </Col>
          <Col  md="12" style={{marginBottom : "20px"}}>
            <label>Password</label>
            <input style={{marginLeft:"18px"}}
              type="Password"
              name="password"
              value ={password}
              onChange={handleInputChange}
              placeholder="Password"
            />
            
               
          </Col>

          <Col md="12" style={{marginBottom : "10px"}}>
            <label>Name</label>
            <input style={{marginLeft:"35px"}}
              name="name"
              value ={name}
              onChange={handleInputChange}
              placeholder="Name" required maxLength ="10"
            />
             
          </Col>
          <Col  md="12" style={{marginBottom : "20px"}}>
            <label>Deposite:</label>
            <input style={{marginLeft:"18px"}}
              type="number"
              name="deposit"
              value ={deposit}
              onChange={handleInputChange}
              placeholder="Password"
            />
            
               
          </Col>

                     
          <br />
         
        <Button variant="primary" type="submit" as={Col} className="loginBtn" md="2"  onClick={handleSubmit} >
          Login
        </Button>
        </Row>

</form>
     
    </div>
        
      );
}

export default Register;
import React, { useState } from 'react';
import { Form, Button, Row ,Col} from 'react-bootstrap'; 
import classes from './Login.css';
import BMSService from '../../API/BMSService';
import { useHistory } from "react-router-dom";


const Login = props => {

  let history = useHistory();

    const [state, setState] = useState({
        userid: '',
        password: ''
      });
    const [error,setError] = useState({})
      
  const [refreshHeader,setrefreshHeader] = useState(false);

      const handleSubmit = (event) => { 
        event.preventDefault();
        const { userid, password } = state;
        if(userid && password) {
          let val  = { 
            "userId" : userid,
            "password" : password 
          }
          BMSService.executeLoginService(val)
          .then(res=> handleSuccess(res))
          .catch(res=> handleError(res))
       }
    else{
      setError({sbm :"Invalid Username && Password"})
    }
    }

    
  const handleSuccess = (data) => {
    console.log(data) 
    localStorage.setItem("registeredData" ,JSON.stringify(data["data"]["userId"])); 
    setrefreshHeader(true);
    history.push('/dashboard');
  };

 const handleError = (data) =>{
  setError({sbm :"Invalid Username && Password"})
  console.log(data)
  };


   
      const registerRedirect = (event) => {
        event.preventDefault();
        props.history.push({
          pathname: '/register'
        });
      };
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        let errValue = validate(name, value);
        if(errValue)
        setError(errValue) 

        setState((prevState) => ({
          ...prevState,  
          [name]: value
        }));
      };

      const  validate = (name, value) => {
        const err ={};
        switch (name) {
             
            case "userid":
              if (!value || value.trim() === "") {
                err.userid ="Username is Required";
              }else {
                err.userid = "";
              }
              break;
            case "password":
              if (!value) {
                err.pwd = "Password is Required";
              }else {
                err.pwd = "";
              } 
              break; 

            }

            return err;
      };
      //const { errorsUser , errorsPwd} = error;
      const {userid ,password} = state;
      return (
        <div>
      <h1>Login Form</h1>
      <form  className="register-form" >
<Row >
        <Col md="12" style={{marginBottom : "10px"}}>
            <label>User Id:</label>
            <input style={{marginLeft:"35px"}}
              name="userid"
              value ={userid}
              onChange={handleInputChange}
              placeholder="User Id" required maxLength ="10"
            />
              { error.userid  &&  <p>
             <span className="text-danger">{error.userid}</span> 
            </p> }
          </Col>
          <Col  md="12" style={{marginBottom : "20px"}}>
            <label>Password:</label>
            <input style={{marginLeft:"18px"}}
              type="Password"
              name="password"
              value ={password}
              onChange={handleInputChange}
              placeholder="Password"
            />
            {error.pwd  &&   <p>
             <span className="text-danger">{error.pwd}</span> 
            </p> }
               
          </Col>
          <br />
         
        <Button variant="primary" type="submit" as={Col} className="loginBtn" md="2" onClick={handleSubmit}>
          Login
        </Button>

        {error.sbm  &&   <p>
             <span className="text-danger">{error.sbm}</span> 
            </p> }
               
               
        <p variant="primary"  as={Col} className="signUp" md={{ span: 2, offset: 2 }} 
        onClick={registerRedirect} >
          New User Sign Up
        </p>

        {/* <Button variant="primary" type="submit" as={Col} className="loginBtn" md="2">
          Profile
        </Button> */}

        </Row>


        </form>
    </div>
        
      );
}

export default Login;
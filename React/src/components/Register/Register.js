  import React, { useState ,useEffect} from 'react';
  import { Form, Button, Row ,Col} from 'react-bootstrap';
  import classes from './Register.css';
  import BMSService from '../../API/BMSService';
  import moment from 'moment';
  import $ from 'jquery'; 
import { registerField } from 'redux-form';

const Register = props => {
  const [state, setState] = useState({
    userid: '',
    password: ''
  });
         const dateFormat = 'YYYY-MM-DD';
         const dateRange = moment(new Date()).format(dateFormat);
        const minDateRange = (new Date().getFullYear()-18)  + "-" + "0"+(new Date().getMonth()+1) + "-" + new Date().getDate()
        const [stateVal, setStateVal] = useState();
        const [formVal, setFormVal] = useState({});
        const [validated, setValidated] = useState(false);

        const editProfile = props.location.editProfile;

        const registered =  JSON.parse(localStorage.getItem("registeredData"));
       useEffect(()=>{
        if(registered){
         
          console.log(formVal)
          BMSService.executeCustomerGerService(registered)
          .then(res => { 
            res = res['data']
            setFormVal(res)
          })
          .catch(res => console.log(res))
        }
       },[editProfile])
       
        const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        
        event.preventDefault();
        event.stopPropagation();
      
      }
      setValidated(true);
      
            const formData = new FormData(event.target),
                  formDataObj = Object.fromEntries(formData.entries())
      if(form.checkValidity() === true){
        if(registered){
          formDataObj['registered'] = registered;
        }
        event.preventDefault();
        event.stopPropagation(); 
        BMSService.executeRegisterService(formDataObj)
      .then(res=> handleSuccess(res))
      .catch(res=> handleError(res)) 
      }
      
    };
      
    
    const handleSuccess = (data) => {
      
      setValidated(true);
      props.history.push({
              pathname: '/dashboard'
        });
    };

  const handleError = (data) =>{
    
    console.log(data)
    setValidated(false);
    };


    
        const handleInputChange = (event) => {
          const { name, value } = event.target;
          setFormVal((prevState) => ({
            ...prevState,
            [name]: value
          }));
        };
      
        // const onChangeText = (e) =>{
        //   switch (e.target.id) {
        //     case "ID":
        //       if (e.target.value.match(/^[A-Za-z0-9_-]*$/)) setLoginID(e.target.value);
        //       break;
        //     case "password":
        //       if (e.target.value.match(/^[A-Za-z0-9_-]*$/)) setPassWord(e.target.value);
        //       break;
        //     default:
        //       break;
        //   }
        // };
       const handleDate = (e) => {
        // const currentYear = (new Date).getFullYear();
        // const currentMonth = (new Date).getMonth();
        // const currentDay = (new Date).getDate();
        
        // $("#fromdate").datepicker({
        //   minDate: new Date((currentYear - 1), 12, 1),
        //   dateFormat: 'dd/mm/yy',
        //   maxDate: new Date(currentYear, currentMonth, currentDay)
        // });

      //   console.log(e.target.value)
      //   let date = e.target.value;
      //   const dateFormat = 'DD-MM-YYYY';
      //   const toDateFormat = moment(new Date(date)).format(dateFormat);
      //   let a = moment(toDateFormat, dateFormat, true).isValid(); 
      // let b = new Date()
 
      // let todayDate = moment(new Date()).format(dateFormat);;
      // if(todayDate > toDateFormat){
      //   console.log("w")
      // }
       
        };



        const handleCountry = (e) =>{
          const {value } = e.target;
          if(value =="India"){
            setStateVal("tamil nadu");
          }

        }
       
        return (
          <div>
        <h1>Registration Form</h1>
        
        <Form className="register-form" noValidate validated={validated}  onSubmit={handleSubmit}>
            <Form.Row>
          <Form.Group as={Col} controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control value={formVal.name} onChange={handleInputChange}
              type="text"
              placeholder="Enter name" pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
              name="name" required  
              />
                <Form.Control.Feedback type="invalid">
                Please choose a name.
              </Form.Control.Feedback>
          </Form.Group>
                

          <Form.Group as={Col} controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control required value={formVal.username} onChange={handleInputChange}
              type="text" pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
              placeholder="Enter username"
              name="username"
              
            />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group as={Col} controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control value={formVal.password} onChange={handleInputChange}
              type="password"
              placeholder="Enter password"
              name="password" required
            />
              <Form.Control.Feedback type="invalid">
                Enter the password
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group  as={Col} controlId="GuardianType">
            <Form.Label>GuardianType</Form.Label>
            <Form.Control  value={formVal.guardiantype} onChange={handleInputChange}
              type="text"
              placeholder="Enter GuardianType"
              name="guardianType"  required
              />
                <Form.Control.Feedback type="invalid">
                  Enter the GuardianType
                </Form.Control.Feedback>
          </Form.Group>
          
          </Form.Row>

          <Form.Row>
          
          <Form.Group as={Col} controlId="guardianName">
            <Form.Label>GuardianName</Form.Label>
            <Form.Control value={formVal.guardianname} onChange={handleInputChange}
              type="text"
              placeholder="Enter GuardianName"
              name="guardianName" required
              />
                <Form.Control.Feedback type="invalid">
                  Enter the GuardianName
                </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group as={Col} controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control 
              type="textarea"
              placeholder="Enter address"
              name="address" required
              />
                <Form.Control.Feedback type="invalid">
                  Enter the Address
                </Form.Control.Feedback>
          </Form.Group>
                
          <Form.Group as={Col} controlId="citizenship">
            <Form.Label>Citizenship</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter citizenship"
              name="citizenship" required
              />
                <Form.Control.Feedback type="invalid">
                  Enter the Citizenship
                </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control  as="select" 
              placeholder="Enter country"
              name="country" required  onChange={handleCountry}
              >
                <option>Country</option> 
              <option>India</option> 
              </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Enter the Country
                </Form.Control.Feedback> 
          </Form.Group>
          </Form.Row>
          
          <Form.Row>
          <Form.Group as={Col} controlId="state">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text" value={stateVal}
              placeholder="Enter State"
              name="state" required
              />
                <Form.Control.Feedback type="invalid">
                  Enter the State
                </Form.Control.Feedback>
          </Form.Group>
           
          
          <Form.Group as={Col} controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email" required
              />
                <Form.Control.Feedback type="invalid">
                  Enter the Email
                </Form.Control.Feedback>  
          </Form.Group>
                
          <Form.Group controlId="gender" as={Col}>
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Gender"
              name="gender" required
              />
                <Form.Control.Feedback type="invalid">
                  Enter the Gender
                </Form.Control.Feedback> 
          </Form.Group>
          <Form.Group controlId="maritialstatus" as={Col}>
            <Form.Label>Maritial Status</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter maritialstatus"
              name="maritialstatus" required
              />
                <Form.Control.Feedback type="invalid">
                  Enter the maritialstatus
                </Form.Control.Feedback> 
                </Form.Group>
          </Form.Row>
          
          <Form.Row>
          
          <Form.Group as={Col} controlId="contactno">
            <Form.Label>Contact No</Form.Label>
            <Form.Control
            type="text"  pattern= "[0-9]*" maxlength="10"
              placeholder="Enter contact no"  
              name="contactno" required 
              />
                <Form.Control.Feedback type="invalid">
                  Enter the contact no
                </Form.Control.Feedback> 
                </Form.Group>
          
          <Form.Group as={Col} controlId="dob">
            <Form.Label>D.O.B</Form.Label>
            <Form.Control
              type="date" max={minDateRange}
              placeholder="Enter D.O.B"
              name="dob"
              required
              />
                <Form.Control.Feedback type="invalid">
                  Enter the DD/MM/YY
                </Form.Control.Feedback> 
                </Form.Group>
                
          <Form.Group controlId="regdate" as={Col}>
            <Form.Label>Registration Date</Form.Label>
            <Form.Control
              type="date" max={dateRange}
                            name="regdate"  required  onChange={handleDate}
              />
                <Form.Control.Feedback type="invalid">
                  Enter the DD/MM/YY
                </Form.Control.Feedback> 
                </Form.Group>
                  
          <Form.Group controlId="account" as={Col}>
            <Form.Label>Account Type</Form.Label>
            <Form.Control  as="select"
              placeholder="account type"
              name="account"  required
              >
                <option>Salary</option> 
              <option>Current</option> 
              </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Enter the Account Type
                </Form.Control.Feedback> 
                </Form.Group>
                
          </Form.Row>
          
          <Form.Row>
          
          <Form.Group as={Col} controlId="branchname">
            <Form.Label>Branchname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter branchname"
              name="branchname"  required
              />
                <Form.Control.Feedback type="invalid">
                  Enter the Branchname
                </Form.Control.Feedback> 
                </Form.Group>
                
          
          <Form.Group as={Col} controlId="citizenstatus">
            <Form.Label>Citizen Status</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Citizen Status"
              name="citizenstatus"  required
              />
                <Form.Control.Feedback type="invalid">
                  Enter the Citizen Status
                </Form.Control.Feedback> 
                </Form.Group>
                  
          <Form.Group controlId="depositamount" as={Col}>
            <Form.Label>Deposite Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Deposite Amount"
              name="depositamount"  required
              />
                <Form.Control.Feedback type="invalid">
                  Enter the Deposite Amount
                </Form.Control.Feedback> 
                </Form.Group>
          <Form.Group controlId="prooftype" as={Col}>
            <Form.Label>Proof type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Proof type"
              name="prooftype" required
              />
                <Form.Control.Feedback type="invalid">
                  Enter the Proof type
                </Form.Control.Feedback> 
                </Form.Group>
          </Form.Row>
          
          <Form.Row>
          
          <Form.Group as={Col} controlId="documentNo">
            <Form.Label>Document No</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Document No"
              name="documentNo" required
              />
                <Form.Control.Feedback type="invalid">
                  Enter the Document No
                </Form.Control.Feedback> 
                </Form.Group>
          
          <Form.Group as={Col} controlId="refAccountname">
            <Form.Label>Reference Account Name</Form.Label>
            <Form.Control
              type="text" pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
              placeholder="Enter Reference Account Name"
              name="refAccountname"  
              />
                <Form.Control.Feedback type="invalid">
                  Enter the Reference Account Name
                </Form.Control.Feedback> 
                </Form.Group>
          
            <Form.Group as={Col} controlId="refAccountno">
            <Form.Label>Reference Account No</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Reference Account No"
              name="refAccountno"  
              />
                <Form.Control.Feedback type="invalid">
                  Enter the Reference Account No
                </Form.Control.Feedback> 
                </Form.Group>
                
            
          <Form.Group as={Col} controlId="refAccountadd">
            <Form.Label>Reference Account Address</Form.Label>
            <Form.Control
              type="textarea"
              placeholder="Enter Reference Account Address"
              name="refAccountadd" 
              />
                <Form.Control.Feedback type="invalid">
                  Enter the Reference Account Address
                </Form.Control.Feedback> 
                </Form.Group>
                
          </Form.Row>
          
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
          
        );
  }

  export default Register;
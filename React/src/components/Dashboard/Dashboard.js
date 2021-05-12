import React, { useState } from 'react';
import { Form, Button, Row ,Col} from 'react-bootstrap';
import EducationLoan from './EducationLoan';
import HomeLoan from './HomeLoan';
import classes from './Dashboard.css';
import Modal from 'react-modal';

const Dashboard = (props) => {
    const [state, setState] = useState({
        username: '',
        email: '',
        city: '',
        phone: ''
      });

      const [editProfile,setEditProfile] = useState(false);
      const [showLoanType,setShowLoanType] = useState({
        showEduLoan : false,
        showHomeLoan : false
      });


      const [modalIsOpen,setModalIsOpen] = useState(false);
      
      const [loanType, setLoanType] = useState(["Select" ,"Education Loan" , "Home loan"]);


      const LoanType = loanType.map(LoanType => LoanType)

        const handleLoanTypeChange = (e) => {
           console.log(e.target.value);
             const {value } = e.target;

             switch (value){
              case ("0"):
                setShowLoanType({
                  showHomeLoan : false,
                  showEduLoan : false
                 })  
              break;
              case ("1"):
                  setShowLoanType({
                    showHomeLoan : false,
                    showEduLoan : true
                   })  
              break;
              case ("2"):
                setShowLoanType({
                  showHomeLoan : true,
                  showEduLoan : false
                 }) 
              default:
              return null; 
               }
        };

        const handleOnSubmit = (event) => {
        event.preventDefault();
        props.history.push({
          pathname: '/dashboard'           
        });
      };
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };

      const openModal = () => {
          setModalIsOpen(true);
      }
    
      const { showEduLoan , showHomeLoan} = showLoanType;

// const handleRegister = () =>{
//   setEditProfile(true);

//   props.history.push({
//     pathname: '/register',
//     editProfile
//   });

 
//   }

   
    return(
        <div>
            <h1>Dashboard</h1>
            {/* <button style={{float:"right"}}  onClick={handleRegister} >profile edit</button> */}
        
            <Form className="register-form" onSubmit={handleOnSubmit}>    
        <Row>
        
        <Form.Group as={Col} controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control as="select"
            onChange={handleLoanTypeChange}
          >
          {
        LoanType.map((address, key) => <option value={key}>{address}</option>)
      }
      </Form.Control>
        </Form.Group>
        
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
      
      </Form>
      
        {showEduLoan  && <EducationLoan modalStatus={openModal}/>}
        {showHomeLoan && <HomeLoan/>}
      
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(!modalIsOpen)}>
          <button onClick={() => setModalIsOpen(!modalIsOpen)} >close</button>
          <div>Your applicaltion has been processed successfully!!</div>
        </Modal>

        </div>
    )

    
}

export default Dashboard;
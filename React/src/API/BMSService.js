import axios from 'axios'

class BMSService{
   executeLoginService(data){
       return axios.post('http://localhost:9090/api/login',data);
   }

   executeRegisterService(val){

    let data  = {
      "name" : val.name,
      "username" : val.username,
      "password" : val.password ,
      "depositamount" : val.depositamount,
      "guardiantype" : val.guardianType,
     "guardianname" : val.guardianName,
     "address" :val.address,
     "citizenship" : val.citizenship,
     "state" : val.state,
     "email" : val.email,
     "gender" : val.gender,
     "maritialstatus" : val.maritialstatus,
     "contactno" : val.contactno,
     "dob" : val.dob,
     "regdate" : val.regdate,
     "accounttype" : val.account,
     "branchname" : val.branchname,
     "citizenstatus" : val.citizenstatus
   
    }
if(val['id']){
  
  data = {
    ...data, 
    "registeredId": val.registeredId
  } 
}
       return axios.post('http://localhost:9090/api/register',data)

   }
    
   executeCustomerGerService(registeredId){
    return axios.get(`http://localhost:9090/api/register/${registeredId}`) 
   }

   handleSuccess(data){
    console.log(data)
    return data;
  };

  handleError(data){
  console.log(data)
  };

}

export default new BMSService();
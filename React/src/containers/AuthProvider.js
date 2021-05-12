import React ,{useEffect,createContext,useState} from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) =>{ 
    const [loggedIn,setLoggedIn] = useState(false)

    useEffect(()=>{
        const loggedVal = JSON.parse(localStorage.getItem("registeredData"));
        loggedVal ? setLoggedIn(true) : setLoggedIn(false);
    },[])

    const state = {
        token : loggedIn
    }


    return(
        <AuthContext.Provider value={state}>
        {children}
        </AuthContext.Provider>
    )
}


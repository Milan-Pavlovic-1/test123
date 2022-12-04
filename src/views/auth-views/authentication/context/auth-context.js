import React, { useState } from "react";

const AuthContext = React.createContext({

/*     role: "User",
    permissions:[],
    getPermissions:([]) => {} */

});


export const AuthContextProvider = (props) =>{

const [permision, setPermision] = useState();

    const setPermissionsHandler =(values)=>{
          setPermision(values);
    }

        return <AuthContext.Provider 
                value={{setPermissionsHandler: setPermissionsHandler, permision:permision}}
        >{props.children}</AuthContext.Provider>
}

export default AuthContext;
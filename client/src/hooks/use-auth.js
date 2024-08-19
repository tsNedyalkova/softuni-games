import { useContext } from "react";
import { login } from "../api/auth-api";
import { AuthContext } from "../contexts/auth-context";

export const useLogin = () => {
    const {changeAuthState} = useContext(AuthContext);

    const loginHndler = async (email, password) => {
            const result = await login(email, password);
            changeAuthState(result);
            console.log(result);
            
            //TODO: update app state
        
    }

    return loginHndler;
};
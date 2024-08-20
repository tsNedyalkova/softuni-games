import { useContext } from "react";
import { login, register } from "../api/auth-api";
import { AuthContext } from "../contexts/auth-context";

export const useLogin = () => {
    const {changeAuthState} = useContext(AuthContext);

    const loginHndler = async (email, password) => {
            const {password: _, ...authData} = await login(email, password);

            changeAuthState(authData);

            return authData;
    }

    return loginHndler;
};

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const { password: _, ...authData } = await register(email, password);
        
        changeAuthState(authData);

        return authData;
    }

    return registerHandler;
}

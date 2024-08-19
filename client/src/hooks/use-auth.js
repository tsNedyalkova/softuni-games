import { useContext } from "react";
import { login, register } from "../api/auth-api";
import { AuthContext } from "../contexts/auth-context";

export const useLogin = () => {
    const {changeAuthState} = useContext(AuthContext);

    const loginHndler = async (email, password) => {
            const result = await login(email, password);

            changeAuthState(result);

            return result;
    }

    return loginHndler;
};

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const result = await register(email, password);

        changeAuthState(result);

        return result;
    }

    return registerHandler;
}
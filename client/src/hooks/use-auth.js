import { login, register } from "../api/auth-api";
import { useAuthContext } from "../contexts/auth-context";

export const useLogin = () => {
    const {changeAuthState} = useAuthContext();

    const loginHndler = async (email, password) => {
            const {password: _, ...authData} = await login(email, password);

            changeAuthState(authData);

            return authData;
    }

    return loginHndler;
};

export const useRegister = () => {
    const { changeAuthState } = useAuthContext();

    const registerHandler = async (email, password) => {
        const { password: _, ...authData } = await register(email, password);
        
        changeAuthState(authData);
        

        return authData;
    }

    return registerHandler;
}

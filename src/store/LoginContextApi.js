import { createContext, useState, useContext } from "react";

const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

function LoginContextProvider(props) {
    const [loggedIn, setLoggedIn] = useState();
    const value = { loggedIn, setLoggedIn };
    return (
        <LoginContextProvider value={value}>
            {props.children}
        </LoginContextProvider>
    )
}

export default LoginContextProvider;
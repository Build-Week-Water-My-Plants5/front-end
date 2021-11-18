import { useEffect } from "react";
import { useHistory } from "react-router";


const SignOut = ({ setToken }) => {
    const { push } = useHistory();

    useEffect(() => {
        localStorage.removeItem('token');
        setToken(null);
        push('/');
    }, [])

    return(
        <div>
            
        </div>
    )
}

export default SignOut;
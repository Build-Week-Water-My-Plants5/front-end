import { useEffect } from "react";
import { useHistory } from "react-router";


const SignOut = () => {
    const { push } = useHistory();

    useEffect(() => {
        localStorage.removeItem('token');
        push('/');
    }, [])

    return(
        <div>
            
        </div>
    )
}

export default SignOut;
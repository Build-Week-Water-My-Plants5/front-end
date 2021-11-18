import { useState, useEffect } from 'react';
import axios from 'axios';


const Account = () => {
    const [user, setUser] = useState({});
    const uid = localStorage.getItem('uid');

    useEffect(() => {
        axios.get(`https://water-the-plants-api.herokuapp.com/api/users/${uid}`)
        .then(res => {
            setUser(res.data);
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    return(
        <div>
            <span>Username: {user.username}</span>
            <span>{user.phone_number && user.phone_number}</span>
            <span>ID: {user.user_id}</span>
        </div>
    )
}

export default Account;
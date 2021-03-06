import { useState, useEffect } from 'react';
import axios from 'axios';
import { mockUser } from '../data.js';

import './PlantList.css';

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
        <div className='plant column'>
            <p>ID: {user.user_id}</p>
            <p>Username: {user.username}</p>
            <p>Phone: {mockUser.phone}</p>
        </div>
    )
}

export default Account;
import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {name, lname}  = useParams();
    return (
        <div>
            <h2>User {name} {lname}</h2>
        </div>
    )
}

export default User;

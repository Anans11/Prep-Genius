import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [completed, setCompleted] = useState(0);
    const [xp, setXp] = useState(0);
    const loadProfile = async () => {
        try {
            let response = await fetch('http://localhost:3001/loadprofile', {
                method: 'GET',
                credentials: 'include',
            })
            response = await response.json();
            console.log('response from loadProfile: ', response);
            setName(response.name);
            setEmail(response.email);
            setCompleted(response.completed);
            setXp(response.xp);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        loadProfile();
    }, [])
    return (
        <div>
            <h1>Profile</h1>
            <div>
                <label>Name: </label>
                <label>{name}</label>
            </div>
            <div>
                <label>Email: </label>
                <label>{email}</label>
            </div>
            <div>
                <label>Completed: </label>
                <label>{completed}</label>
            </div>
            <div>
                <label>XP: </label>
                <label>{xp}</label>
            </div>
        </div>
    );
};

export default Profile;
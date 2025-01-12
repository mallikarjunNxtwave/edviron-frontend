import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'

import { FormContainer, FormHeading, FormInputBox, FormLabelText, FormSubmitButton, MainContainer } from '../styledComponents';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const navigate = useNavigate();
    
    const getRegister = async (event) => {
        event.preventDefault()

        const url = 'https://edviron-backend-jh1s.onrender.com/register'
        const details = {
            username, password
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(details),
            headers: {
                "Content-Type": "Application/json"
            }
        }
        const response = await fetch(url, options)
        if(response.ok){
            const data = await response.json()
            navigate('/login');
        }else {
            console.log(response)
        }
        
    }
    const handleStateChange = (event, setFunction) => {
        setFunction(event.target.value)
    }
    const jwtToken = Cookies.get('jwt_token');
    if (jwtToken !== undefined) {
        return <Navigate to='/todos' />
    }

    
    return (
        <MainContainer>
            <FormContainer >
                <FormHeading>REGISTER</FormHeading>
                <div>
                    <FormLabelText htmlFor='USERNAME'>USERNAME</FormLabelText>
                    <FormInputBox type='text' id='USERNAME' placeholder='Username' value={username} onChange={(event) => handleStateChange(event, setUsername)} />
                </div>
                <div>
                    <FormLabelText htmlFor='PASSWORD'>PASSWORD</FormLabelText>
                    <FormInputBox type='password' id='PASSWORD' placeholder='Password' value={password} onChange={(event) => handleStateChange(event, setPassword)} />
                </div>
                <FormSubmitButton onClick={getRegister}>Submit</FormSubmitButton>
            </FormContainer>
        </MainContainer>
    )

}




export default Register;
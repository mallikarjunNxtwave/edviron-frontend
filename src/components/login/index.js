import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { FormContainer, FormHeading, FormSubmitButton, MainContainer, FormLabelText, FormInputBox } from '../styledComponents';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const onSubmitLogin = async (event) => {
        event.preventDefault();
        const url = 'https://edviron-backend-jh1s.onrender.com/login'
        const details = {
            username,
            password
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(details),
            headers: {
                "Content-Type": "Application/json"
            }
        }
        try {
            const response = await fetch(url, options)
            if (response.ok) {
                const data = await response.json()
                Cookies.set("jwt_token", data.jwt_token, { expires: 1 })
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleStateChange = (event, setFunction) => {
        setFunction(event.target.value)
    }

    const jwtToken = Cookies.get('jwt_token');
    if (jwtToken !== undefined) {
        return <Navigate to='/' />
    }

    return (
        <MainContainer>
            <FormContainer>
                <FormHeading>LOGIN</FormHeading>
                <div>
                    <FormLabelText htmlFor='USERNAME'>USERNAME</FormLabelText>
                    <FormInputBox type='text' id='USERNAME' placeholder='Username' value={username} onChange={(event) => handleStateChange(event, setUsername)} />
                </div>
                <div>
                    <FormLabelText htmlFor='PASSWORD'>PASSWORD</FormLabelText>
                    <FormInputBox type='password' id='PASSWORD' placeholder='Password' value={password} onChange={(event) => handleStateChange(event, setPassword)} />
                </div>
                <FormSubmitButton type="submit" onClick={onSubmitLogin}>Submit</FormSubmitButton>
                <Link to={"/register"}>RIGISTER</Link>
            </FormContainer>
        </MainContainer>
    )

}

export default Login;
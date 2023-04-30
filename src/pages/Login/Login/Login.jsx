import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';


const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const {signIn} = useContext(AuthContext);

    const location = useLocation()
    const from = location.state?.from?.pathname || '/category/0';

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(password);
        setError('')


        // if (!/^\w+([-+.']\w+)*@[A-Za-z\d]+\.com$/.test(email)) {
        //     e.target.email.focus();
        //     toast.error("Provide a valide email");
        //     return;
        // };

        // if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
        //     e.target.password.focus();
        //     toast.error("Provide a valid password");
        //     setError('please provide a password with at least a symbol, upper and lower case letters and a number min 8 letter password');
        //     return;
        // };

        signIn(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess('Successfully Login')
            toast.success('Successfully Login!')
            navigate(from, {replace: true})
        })
        .catch(error=>{
            const message = error.message;
            console.log(message)
            setError(message)
            toast.error(message)
        })




        form.reset()
    }


    return (
        <Container className='w-25'>
            <h3>Please login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />

                <Form.Text className="text-success">
                    Dont't Have An Account ? <Link to='/register'>Register</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-sucendary">
                    {success}
                </Form.Text>
                <br />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;
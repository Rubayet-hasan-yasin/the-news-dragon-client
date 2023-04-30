import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [accepted, setAccepted] = useState(false);

    const {createUser} = useContext(AuthContext);

    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(password);
        setError('')

        // if(!/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(photo)){
        //     event.target.photo.focus();
        //     toast.error("Provide a valide Photo URL");
        //     return;
        // };

        // if(!/^\w+([-+.']\w+)*@[A-Za-z\d]+\.com$/.test(email)){
        //     event.target.email.focus();
        //     toast.error("Provide a valide email");
        //     return;
        // };

        // if(!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)){
        //     event.target.password.focus();
        //     toast.error("Provide a valid password");
        //     setError('please provide a password with at least a symbol, upper and lower case letters and a number min 8 letter password');
        //     return;
        // };


        createUser(email, password)
        .then(result=>{
            const createdUser = result.user;
            setSuccess('registation successfull')
            console.log(createdUser);
            toast.success('registation successfull')
            updateProfile(createdUser,{
                displayName: name,
                photoURL: photo
            })
            .then(()=>{})
            .catch(error=> setError(error.message))
        })
        .catch(error=>{
            const message = error.message;
            console.log(error);
            setError(message)
            toast.error(message)
        })

        form.reset()


    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    
    return (
        <Container className='w-25'>
            <h3>Please login</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Your Photo URL" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleAccepted}
                    type="checkbox" 
                    name='accept' 
                    label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
                </Form.Group>
                <Button disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
                <br />

                <Form.Text className="text-success">
                    Already Have An Account ? <Link to='/login'>Login</Link>
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

export default Register;
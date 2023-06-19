import React,{ useRef, useState } from 'react'
import{ Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
    const emailRef=useRef();
    const passwordRef=useRef();
    const { login }= useAuth()
    const [error, setError]=useState('')
    const [loading, setLoading]=useState(false)
    const navigate= useNavigate()

    async function submitHandler(e){
        e.preventDefault();

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        }catch(error){
            console.log(error)
            setError("Wrong email or password")
        }
        setLoading(false)

    }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Log In</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={submitHandler}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required/>
                    </Form.Group>
                    <br></br>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required/>
                    </Form.Group>
                    <br></br>
                    
                    <Button disabled={loading} type="submit" className="w-100">Log In</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-3'>
            <Link to="/forgot-password">Forgot Password</Link>
        </div>
        <div className='w-100 text-center mt-2'>
            Don't have account? <Link to="/signup" className='text-decoration-none'>Sign Up</Link>
        </div>
    </>
  )
}

export default Login
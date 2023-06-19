import React,{ useRef, useState } from 'react'
import{ Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const emailRef=useRef();
    const { resetPassword }= useAuth()
    const [error, setError]=useState('')
    const [loading, setLoading]=useState(false);
    const [message, setMessage]=useState()
    // const navigate= useNavigate()

    async function submitHandler(e){
        e.preventDefault();

        try{
            setMessage("")
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            // navigate("/")
            setMessage("Email sent to you for reseting the password")
            console.log(message)
        }catch(error){
            // console.log(error)
            setError("Failed to reset the password")
        }
        setLoading(false)

    }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Reset Password</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {message && <Alert variant='success'>{message}</Alert>}
                <Form onSubmit={submitHandler}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required/>
                    </Form.Group>
                    <br></br>
                    <Button disabled={loading} type="submit" className="w-100">Reset Password</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-3'>
            <Link to="/login" className='text-decoration-none'>Log In</Link>
        </div>
        <div className='w-100 text-center mt-2'>
            Don't have account? <Link to="/signup" className='text-decoration-none'>Sign Up</Link>
        </div>
    </>
  )
}

export default ForgotPassword
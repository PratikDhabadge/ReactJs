import React,{ useRef, useState } from 'react'
import{ Form, Button, Card, Alert} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

const Signup = () => {
    const emailRef=useRef();
    const passwordRef=useRef();
    const passwordConfirmRef=useRef();
    const { signup }= useAuth()
    const [error, setError]=useState('')
    const [loading, setLoading]=useState(false)

    async function submitHandler(e){
        e.preventDefault();

        if(passwordRef.current.value!==passwordConfirmRef.current.value){
            return setError("Password don't match")
        } 
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            
        }catch(error){
            console.log(error)
            setError("Creating account is failed or Email already registered")
        }
        setLoading(false)

    }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
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
                    <Form.Group id='password-confirm'>
                        <Form.Label>Confirm</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmRef} required/>
                    </Form.Group><br></br>
                    <Button disabled={loading} type="submit" className="w-100">Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Already have an account? <Link to="/login" className='text-decoration-none'>Log In</Link>
        </div>
    </>
  )
}

export default Signup
import React from 'react'
import { useRef } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const SignUp = ( {signup} ) => {

  const formRef = useRef()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: { email: data.email, password: data.password }
    }
    signup(userInfo)
    navigate("/login")
    e.target.reset()
  }

  return (
    <>
      <div><h1>Sign Up</h1></div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <FormGroup floating>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
          />
          <Label for="exampleEmail">
            Email
          </Label>
        </FormGroup>
        {' '}
        <FormGroup floating>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
          />
          <Label for="examplePassword">
            Password
          </Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="confirmPW"
            name="pw_confirmation"
            placeholder="Confirm PW"
            type="password"
          />
          <Label for="confirmPassword">
            Confirm Password
          </Label>
        </FormGroup>
        {' '}
        <Input type="submit" value="Signup" />
      </form>
      </>
  )
}

export default SignUp